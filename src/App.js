import './App.css';
import VoyagesSplashPage from './components/voyage/Voyages/VoyagesSplashPage';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(undefined)

  const viewConductor =()=>{
    return token === undefined ? 'Ready to Voyage?' : <VoyagesSplashPage />
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Test!</p>
        <p>Test 2</p>
        <p>Jake's TEST!!!</p>
        <p>Laura's Branch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='JakesTestDiv'>
        {/* <VoyagesSplashPage /> */}
        {viewConductor()}
      </div>
  );
}

export default App;