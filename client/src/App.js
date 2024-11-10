import './App.css';
import React from 'react';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

function App() {
  return (
    <div className="App">
      <h1>Simple MERN App</h1>
      <MessageForm />
      <MessageList />
    </div>
  );
}

export default App;
