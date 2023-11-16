import { useState } from 'react';

const PhraseForm = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      onAdd(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregar frase"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default PhraseForm;