import { QuoteCardProps } from '@/models'

import { Card, CardContent } from '@mui/material';
const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <Card elevation={3} className="overflow-hidden flex items-center justify-center" sx={{ height: 180 }}>
      <CardContent className='box overflow-hidden line-clamp-6 box-ellipsis box-orient-vertical'  >
        {quote}
      </CardContent>
    </Card>
  );
};

export default QuoteCard;