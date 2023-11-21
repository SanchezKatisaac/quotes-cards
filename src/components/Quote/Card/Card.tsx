import { InputChangeEvent, Quote } from '@/models';
import { deleteQuote, fetchQuotes, updateQuote } from '@/redux/quote/slice';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const QuoteCard = ({ quote }: { quote: Quote }) => {
  const dispatch = useDispatch<any>()

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(quote.description);

  const handleEditQuote = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEditQuote = () => {
    const quoteChanges: Quote = { id: quote.id, description: editedText }
    dispatch(updateQuote(quoteChanges))
    dispatch(fetchQuotes());
    handleCancelEdit();
  };

  const handleInputChange = (event: InputChangeEvent) => {
    setEditedText(event.target.value);
  };

  const handleDeleteQuote = () => {
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
            />
            <div className='flex justify-end mt-3'>
              <Button variant="contained" color='success' onClick={handleSaveEditQuote}>
                Guardar
              </Button>
              <Button variant="contained" color='error' onClick={handleCancelEdit}>
                Cancelar
              </Button>
            </div>
          </>
        ) : (
          <div className='flex items-center'>
            <Typography className='w-full line-clamp-1' variant="h5" onClick={handleEditQuote}>
              {quote.description}
            </Typography>
            <DeleteIcon className='ml-2' sx={{ fontSize: 25 }} onClick={handleDeleteQuote} />
          </div>
        )}
      </CardContent>
    </Card >
  );
};
export default QuoteCard;