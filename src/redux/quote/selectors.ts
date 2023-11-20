import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectSelf = (state: RootState) => state;

export const getQuotesList = createDraftSafeSelector(
  selectSelf,
  state => state.quotes.quotesList
);