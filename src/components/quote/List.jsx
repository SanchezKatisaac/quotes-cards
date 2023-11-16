import { useState, useEffect } from 'react';
import QuoteCard from './Card';

const QuotesList = ({ quotes }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState(quotes);

  useEffect(() => {
    const results = quotes.filter((quote) =>
      quote.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredQuotes(results);
  }, [quotes, searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar frase..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="cards-container">
        {filteredQuotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default QuotesList;