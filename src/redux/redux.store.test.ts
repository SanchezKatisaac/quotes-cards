import store, { RootState } from '@/redux/store';

describe('Redux Store Configuration', () => {
  it('should have correct initial state', () => {
    const expectedReducerKey = 'quotes';

    const state: RootState = store.getState();

    expect(state).toHaveProperty(expectedReducerKey);
    expect(Object.keys(state)).toHaveLength(1);

    expect(state).toEqual({
      quotes: {
        quotesList: [],
        error: '',
        loading: false
      }
    });
  });
});
