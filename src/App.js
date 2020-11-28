import {useState} from 'react';
import './App.css';
// import Auth from './components/auth/Auth'
import VoyagesSplashPage from './components/voyage/Voyages/VoyagesSplashPage';

function App() {
  const [token, setToken] = useState(undefined)

  const viewConductor =()=>{
    return token === undefined ? 'Ready to Voyage?' : <VoyagesSplashPage />
  }

  return (

    // <div className="App">
    // <Auth />
    // </div>

     <div className='JakesTestDiv'>
        <VoyagesSplashPage />
        {viewConductor()}
    </div>
  );
}

export default App;