import React from 'react';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleInputChange = (event) => {
    console.log('Input value:', event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Components</h1>
      <Button text="Click Me" onClick={handleClick} />
      <br />
      <br />
      <Input placeholder="Enter text" onChange={handleInputChange} />
    </div>
  );
}

export default App;
