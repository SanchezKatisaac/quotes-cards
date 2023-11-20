import { InputChangeEvent, Quote } from '@/models';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteQuote, fetchQuotes } from '@/redux/quote/slice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';

const QuoteCard = ({ quote }: { quote: Quote }) => {
  const dispatch = useDispatch<any>()

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(quote.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    console.log({ editedText })
    handleCloseEdit();
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event: InputChangeEvent) => {
    setEditedText(event.target.value);
  };

  const handleDeleteQuote = (quote: Quote) => {
    dispatch(deleteQuote(quote))
    dispatch(fetchQuotes());
  }

  return (
    <Card
      elevation={3}
      sx={{
        background: 'var(--gradient)',
        border: '1px solid var(--primary-color)'
      }}
    >
      <CardContent>
        {isEditing ? (
          <>
            <TextField
              value={editedText}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              multiline
              autoFocus
              onBlur={handleSaveClick}
            />
            <div className='flex justify-end mt-3'>
              <Button variant="contained" color='success' onClick={handleSaveClick}>
                Guardar
              </Button>
              <Button variant="contained" color='error' onClick={handleCloseEdit}>
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <div className='flex items-center'>
            <Typography className='w-full line-clamp-1' variant="h5" onClick={handleEditClick}>
              {quote.description}
            </Typography>
            <DeleteIcon className='ml-2' sx={{ fontSize: 25 }} onClick={() => handleDeleteQuote(quote)} />
          </div>
        )}
      </CardContent>
    </Card >
  );
};
export default QuoteCard;