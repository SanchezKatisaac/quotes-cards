import { useState } from 'react'

import Header from '@/components/Header/Header.component.tsx'
import QuoteForm from '@/components/Quote/Form.tsx'
import QuotesList from '@/components/Quote/List.tsx';

function App() {
  const [quotes, setQuotes] = useState([]);

  const handleAddQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
  };

  return (
    <>
      <div className="App">
        <Header />

        <h1>Buscador de frases</h1>
        <QuoteForm onAdd={handleAddQuote} />
        <QuotesList quotes={quotes} />
      </div>
    </>
  )
}

export default App
