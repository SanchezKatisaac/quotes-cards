import { Quote } from '@/models';
import { getQuotesList } from '@/redux/quote';
import { fetchQuotes } from '@/redux/quote/slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form as QuoteForm,
  List as QuotesList
} from '@/components/Quote';
import { Container, Typography } from '@mui/material';


const Home = () => {
  const dispatch = useDispatch<any>()
  const quotesList: Quote[] = useSelector(getQuotesList);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, []);

  return (
    <Container maxWidth="md" className='m-10 h-full'>
      <Typography variant="h2" align="center" sx={{ marginBottom: '15px' }}>
        Buscador de Frases
      </Typography>

      <QuoteForm />
      <QuotesList quotesList={quotesList} />
    </Container>
  );
};

export default Home;