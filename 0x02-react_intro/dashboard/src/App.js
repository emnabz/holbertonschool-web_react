import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-header">
        <img src={logo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div >
        <p className='App-footer'>Copyright 2020 - holberton School</p>
        <div className='border'></div>
      </div>
  </div>
  );
}

export default App;
