import { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { QuotesListProps, InputChangeEvent } from '@/models'

import QuoteCard from '@/components/Quote/Card';


const QuotesList = ({ quotes }: QuotesListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  useEffect(() => {
    const results = quotes.filter((quote) =>
      quote.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotes(results);
  }, [quotes, searchTerm]);

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
      <Grid container spacing={2}>
        {filteredQuotes.map((quote, index) => (
          <Grid
            key={index}
            item
            xs={100}
            md={4}
            className='text-center'
          >
            <QuoteCard
              quote={quote}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default QuotesList;