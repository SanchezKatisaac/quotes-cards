import { fetchQuotes, } from '@/redux/quote/slice';
import { getQuotes, } from '@/services/quotes';
import { AnyAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

jest.mock('@/services/quotes');

describe('Quote Slice Async Actions', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should dispatch fetchQuotes with correct action sequence', async () => {
    const mockedQuotes = [{ id: 1, description: 'Quote 1' }];

    (getQuotes as jest.Mock).mockResolvedValue({ data: mockedQuotes });

    await store.dispatch(fetchQuotes() as any);

    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchQuotes.pending.type);
    expect(actions[1].type).toEqual(fetchQuotes.fulfilled.type);
    expect(actions[1].payload).toEqual(mockedQuotes);
  });
});
