import {useState} from 'react';
import './App.css';
 import Auth from './components/auth/Auth'
import VoyagesSplashPage from './components/voyage/Voyages/VoyagesSplashPage';

function App() {
  const [token, setToken] = useState(undefined)
  // const [token, setToken] = useState('')


  const viewConductor =()=>{
    return token === undefined ? 'Ready to Voyage?' : <VoyagesSplashPage />
  }

  return (
    <div className="main">
      <div className='VoyageSplashPage'>
         <VoyagesSplashPage /> 
          {viewConductor()}
      </div>
    <div className="App">
     <Auth />
     </div>
  </div>
  );
}

export default App;