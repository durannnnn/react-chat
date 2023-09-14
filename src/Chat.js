import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [creatingRoom, setCreatingRoom] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const newMessage = {
      username,
      message,
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');
  };

  const handleCreateRoomClick = () => {
    setCreatingRoom(true);
    // Lógica para criar uma nova sala aqui
  };

  const handleJoinRoomClick = () => {
    setCreatingRoom(false);
    // Lógica para entrar em uma sala existente aqui
  };

  return (
    <div className="App">
      <h1>{creatingRoom ? 'Criar Sala' : 'Entrar em uma Sala'}</h1>
      <div className="ChatBox">
        {chatHistory.map((item, index) => (
          <div key={index} className="Message">
            <strong>{item.username}: </strong>
            {item.message}
          </div>
        ))}
      </div>
      {creatingRoom ? (
        <div className="InputArea">
          <input
            type="text"
            placeholder="Nome da Nova Sala"
            value={username}
            onChange={handleUsernameChange}
          />
          <button onClick={handleCreateRoomClick}>Criar Sala</button>
        </div>
      ) : (
        <div className="InputArea">
          <input
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={handleUsernameChange}
          />
          <textarea
            placeholder="Digite sua mensagem"
            value={message}
            onChange={handleMessageChange}
            rows="10"
          />
          <button onClick={handleSendMessage}>Enviar</button>
        </div>
      )}
      <div>
        <button onClick={handleJoinRoomClick}>
          {creatingRoom ? 'Entrar em uma Sala Existente' : 'Criar Nova Sala'}
        </button>
      </div>
    </div>
  );
}

export default App;