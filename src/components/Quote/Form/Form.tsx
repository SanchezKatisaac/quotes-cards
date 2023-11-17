import { useState } from 'react';
import { QuoteFormProps, InputChangeEvent, formEvent } from '@/models';

import { Button, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const PhraseForm = ({ onAdd }: QuoteFormProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: InputChangeEvent) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: formEvent) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className='flex justify-end' onSubmit={handleSubmit}  >
      <TextField
        type="text"
        label="Agregar frase"
        value={inputValue}
        onChange={handleInputChange}
        variant="outlined" fullWidth
        sx={{ marginRight: '8px', maxWidth: '300px' }}
      />
      <Button variant="contained" type="submit" size="large" endIcon={<AddIcon />} >
        <span className='text-lg'>
          Agregar
        </span>
      </Button>
    </form>
  );
};

export default PhraseForm;