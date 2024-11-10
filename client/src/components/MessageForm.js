import React, { useState } from 'react';
import axios from 'axios';

const MessageForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/messages', { text })
      .then(() => setText(''))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a message"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
