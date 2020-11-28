import './App.css';
import VoyagesSplashPage from './components/voyage/Voyages/VoyagesSplashPage';
import { useState } from 'react';


function App() {
  const [token, setToken] = useState(undefined)
  // const [token, setToken] = useState('')


  const viewConductor =()=>{
    return token === undefined ? 'Ready to Voyage?' : <VoyagesSplashPage />
  }

  return (

      <div className='JakesTestDiv'>
         <VoyagesSplashPage /> 
        {viewConductor()}
      </div>
  );
}

export default App;