import React, { useState } from 'react';

function Madlib() {
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');
  const [adjective, setAdjective] = useState('');
  const [adverb, setAdverb] = useState('');
  const [story, setStory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = `Once upon a time, there was a ${adjective} ${noun} who loved to ${adverb} ${verb}.`;
    setStory(newStory);
  };

  return (
    <div>
      <h1>Madlibs Game</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="noun">Noun:</label>
        <input type="text" id="noun" value={noun} onChange={(e) => setNoun(e.target.value)} required />

        <label htmlFor="verb">Verb:</label>
        <input type="text" id="verb" value={verb} onChange={(e) => setVerb(e.target.value)} required />

        <label htmlFor="adjective">Adjective:</label>
        <input type="text" id="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} required />

        <label htmlFor="adverb">Adverb:</label>
        <input type="text" id="adverb" value={adverb} onChange={(e) => setAdverb(e.target.value)} required />

        <button type="submit">Generate Story</button>
      </form>

      {story && <p>{story}</p>}
    </div>
  );
}

export default Madlib;