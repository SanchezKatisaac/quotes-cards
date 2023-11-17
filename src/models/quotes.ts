import { ChangeEvent, FormEvent } from "react";

export type QuoteCardProps = {
  quote: string;
};

export type QuotesListProps = {
  quotes: string[];
};

export type QuoteFormProps = {
  onAdd: (newQuote: string) => void;
};

export type InputChangeEvent = ChangeEvent<HTMLInputElement>

export type formEvent = FormEvent<HTMLFormElement>