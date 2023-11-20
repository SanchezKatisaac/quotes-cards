import { ChangeEvent, FormEvent } from "react";

export interface Quote {
  id: number,
  description: string
};

export interface QuoteInitialState {
  quotesList: Quote[],
  error: string,
  loading: boolean
}

export type QuoteFormProps = {
  onAdd: (newQuote: string) => void;
};

export type InputChangeEvent = ChangeEvent<HTMLInputElement>

export type formEvent = FormEvent<HTMLFormElement>