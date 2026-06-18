import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'; // 1. Ubah n menjadi kapital 'Navbar'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* 2. Ubah menjadi <Navbar /> dengan huruf kapital */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          LOL Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;