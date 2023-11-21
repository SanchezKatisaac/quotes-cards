import {
  getQuotes,
  getQuoteById,
  createQuote,
  updateQuoteById,
  deleteQuoteById,
} from '@/services/quotes/quotes';
import axiosService from '@/services/axios/axiosService';
import { Quote } from '@/models';

jest.mock('@/services/axios/axiosService');

describe('Quotes Service', () => {
  const mockQuotes: Quote[] = [
    { id: 1, description: 'Quote 1' },
    { id: 2, description: 'Quote 2' },
  ];

  (axiosService.get as jest.Mock).mockImplementation(() =>
    Promise.resolve({ data: mockQuotes })
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch quotes from the API', async () => {
    const quotes = await getQuotes();
    expect(quotes.data).toEqual(mockQuotes);
    expect(axiosService.get).toHaveBeenCalledWith('quotes/');
  });

  it('should fetch a quote by ID from the API', async () => {
    const quoteId = 1;
    const mockQuote: Quote = mockQuotes[0];

    (axiosService.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: mockQuote })
    );

    const quote = await getQuoteById(quoteId);
    expect(quote.data).toEqual(mockQuote);
    expect(axiosService.get).toHaveBeenCalledWith(`quotes/${quoteId}/`);
  });

  it('should create a new quote via API', async () => {
    const newQuote = { description: 'New Quote' };
    const createdQuote: Quote = { id: 3, ...newQuote };

    (axiosService.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: createdQuote })
    );

    const created = await createQuote(newQuote);
    expect(created.data).toEqual(createdQuote);
    expect(axiosService.post).toHaveBeenCalledWith('quotes/', newQuote);
  });

  it('should update a quote by ID via API', async () => {
    const updatedQuote = { id: 1, description: 'Updated Quote' };
    (axiosService.put as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: updatedQuote })
    );

    const updated = await updateQuoteById(updatedQuote);
    expect(updated.data).toEqual(updatedQuote);
    expect(axiosService.put).toHaveBeenCalledWith(`quotes/${updatedQuote.id}/`, updatedQuote);
  });

  it('should delete a quote by ID via API', async () => {
    const quoteId = 1;

    (axiosService.delete as jest.Mock).mockImplementation(() =>
      Promise.resolve({})
    );

    await deleteQuoteById(quoteId);
    expect(axiosService.delete).toHaveBeenCalledWith(`quotes/${quoteId}`);
  });
});
