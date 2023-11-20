import { Quote, QuoteInitialState } from "@/models";
import { createQuote, getQuotes, deleteQuoteById } from "@/services/quotes";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuotes = createAsyncThunk(
  'quote/fetchQuotes',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getQuotes();
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  });

export const createNewQuote = createAsyncThunk(
  'quote/createNewQuote',
  async (newQuote: object, { rejectWithValue }) => {
    try {
      await createQuote(newQuote);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  });

export const deleteQuote = createAsyncThunk(
  'quote/deleteQuote',
  async (newQuote: Quote, { rejectWithValue }) => {
    try {
      await deleteQuoteById(newQuote.id);
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  });

const initialState: QuoteInitialState = {
  quotesList: [],
  error: '',
  loading: false
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchQuotes.fulfilled, (state: any, action: PayloadAction<Quote[]>) => {
        state.quotesList = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuotes.rejected, (state, action: any) => {
        state.error = action.payload.message;
      })
  },
})

export const { actions: quoteActions, reducer: quoteReducer } = quoteSlice;

export default quoteSlice;