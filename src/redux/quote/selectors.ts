import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

const selectSelf = (state: RootState) => state;

export const getQuotesList = createDraftSafeSelector(
  selectSelf,
  state => state.quotes.quotesList
);