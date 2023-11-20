import { InputChangeEvent, formEvent } from '@/models';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createNewQuote, fetchQuotes } from '@/redux/quote/slice';
import AddIcon from '@mui/icons-material/Add';
import { Button, TextField } from '@mui/material';

const QuoteForm = () => {
  const dispatch = useDispatch<any>()
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: InputChangeEvent) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: formEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      try {
        const newQuote = { description: inputValue }

        dispatch(createNewQuote(newQuote));
        dispatch(fetchQuotes());
        setInputValue('');
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <form className='flex justify-end' onSubmit={handleSubmit}  >
      <TextField
        type="text"
        label="Agregar frase"
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        multiline
        sx={{ marginRight: '8px', maxWidth: '300px' }}
      />
      <Button variant="contained" color='success' type="submit" size="large" endIcon={<AddIcon />} >
        <span className='text-lg'>
          Agregar
        </span>
      </Button>
    </form>
  );
};

export default QuoteForm;