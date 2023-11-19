import { useState } from 'react';
import { QuoteCardProps } from '@/models'

import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const QuoteCard = ({ quote }: QuoteCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(quote);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

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
              {quote}
            </Typography>
            <DeleteIcon className='ml-2' />
          </div>
        )}
      </CardContent>
    </Card >
  );
};
export default QuoteCard;