import { QuoteInitialState } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import { quoteSlice } from "@/redux/quote/slice";


export interface RootState {
  quotes: QuoteInitialState
}

export default configureStore<RootState>({
  reducer: {
    quotes: quoteSlice.reducer,
  }
})