import { RootState } from '@/redux/store';
import { getQuotesList } from "@/redux/quote";

describe('Redux Selectors', () => {
  const mockState: RootState = {
    quotes: {
      quotesList: [
        { id: 1, description: 'Quote 1' },
        { id: 2, description: 'Quote 2' },
      ],
      error: '',
      loading: false
    },
  };

  it('getQuotesList selector should return quotes list from state', () => {
    const result = getQuotesList(mockState);
    expect(result).toEqual(mockState.quotes.quotesList);
  });

  it('should return undefined when RootState is undefined', () => {
    const state: any = undefined;
    const result = getQuotesList(state);
    expect(result).toEqual([]);
  });

  it('should return undefined when quotesList is undefined', () => {
    const state: any = {
      quotes: {
        quotesList: undefined
      }
    };
    const result = getQuotesList(state);
    expect(result).toEqual([]);
  });

  it('should return undefined when RootState has incorrect shape', () => {
    const state: any = {
      incorrectShape: {
        quotesList: ['quote1', 'quote2']
      }
    };
    const result = getQuotesList(state);
    expect(result).toEqual([]);
  });
});