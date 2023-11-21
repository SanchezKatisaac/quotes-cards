import { useEffect, useState } from 'react';

import { InputChangeEvent, Quote } from '@/models';
import AddIcon from '@mui/icons-material/AddCircle';
import { Grid, TextField, Typography } from '@mui/material';

import { Card as QuoteCard } from '@/components/Quote';


const QuotesList = ({ quotesList }: { quotesList: Quote[] }) => {
  const noQuotes = quotesList.length === 0;
  const [searchTerm, setSearchTerm] = useState('');

  const [filteredQuotes, setFilteredQuotes] = useState(quotesList);

  useEffect(() => {
    const results = quotesList.filter((quote: Quote) =>
      quote.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotes(results);
  }, [quotesList, searchTerm]);

  const handleSearch = (event: InputChangeEvent) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='p-5'>
      <TextField
        type="text"
        placeholder="Buscar frase..."
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        fullWidth
        sx={{ marginY: '15px' }}
      />

      {noQuotes ? (
        <div className='mt-12 w-full text-center cursor-pointer'>
          <Typography variant="h3">
            Animate y carga tu primera frase
          </Typography>
          <AddIcon className='mt-3' sx={{ color: 'var(--primary-color)', fontSize: 50 }} />
        </div>
      )
        : (
          <Grid container spacing={2}>
            {filteredQuotes.map((quote: Quote, index: number) => (
              <Grid
                key={index}
                item
                xs={12}
                md={4}
                className='text-center'
              >
                <QuoteCard
                  quote={quote}
                />
              </Grid>
            ))}
          </Grid>
        )
      }
    </div>
  );
};

export default QuotesList;