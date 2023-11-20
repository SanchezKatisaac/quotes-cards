import {
  QUOTES
} from '@/constant/api';
import { Quote } from '@/models';
import { axiosService } from '@/services/axios';

export const getQuotes = async () => {
  return await axiosService.get(QUOTES);
};

export const getQuoteById = async (id: number) => {
  return await axiosService.get(`${QUOTES}${id}`);
};

export const createQuote = async (newQuote: object) => {
  return await axiosService.post(QUOTES, { ...newQuote });
};

export const updateQuote = async (quote: Quote) => {
  return await axiosService.put(`${QUOTES}${quote.id}`, { description: quote.description });
};

export const deleteQuote = async (id: number) => {
  return await axiosService.delete(`${QUOTES}${id}`);
};