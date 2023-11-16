import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import QuoteForm from './components/quote/Form.jsx'
import QuotesList from './components/quote/List.jsx';

function App() {
  const [quotes, setQuotes] = useState([]);

  const handleAddQuote = (newQuote) => {
    setQuotes([...quotes, newQuote]);
  };

  return (
    <>
      <div className="App">
        <h1>Buscador de frases</h1>
        <QuoteForm onAdd={handleAddQuote} />
        <QuotesList quotes={quotes} />
      </div>
    </>
  )
}

export default App
