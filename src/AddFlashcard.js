import React, { useState } from 'react';
import axios from 'axios';

const AddFlashcard = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);

  const handleAddFlashcard = async () => {
    try {
      const newFlashcard = { question, answer };
      await axios.post('http://localhost:5000/api/flashcards', newFlashcard);
      alert('Flashcard added successfully');
      setQuestion('');
      setAnswer('');
    } catch (error) {
      setError("There was an error adding the flashcard!");
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Question" 
        value={question} 
        onChange={e => setQuestion(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Answer" 
        value={answer} 
        onChange={e => setAnswer(e.target.value)} 
      />
      <button onClick={handleAddFlashcard}>Add Flashcard</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default AddFlashcard;
