import { useState } from 'react'

import Header from '@/components/Header'
import QuoteForm from '@/components/Quote/Form'
import QuotesList from '@/components/Quote/List';
import { Container, Typography } from '@mui/material';

function App() {
  const [quotes, setQuotes] = useState<string[]>([]);

  const handleAddQuote = (newQuote: string) => {
    setQuotes([...quotes, newQuote]);
  };

  return (
    <>
      <Header />
      <Container maxWidth="md" className='m-10 h-full'>
        <Typography variant="h2" align="center" sx={{ marginBottom: '15px' }}>
          Buscador de Frases
        </Typography>

        <QuoteForm onAdd={handleAddQuote} />
        <QuotesList quotes={quotes} />
      </Container>
    </>
  )
}

export default App
