import {useState} from 'react';
import './App.css';
import Auth from './components/auth/Auth'
import VoyagesSplashPage from './components/voyage/Voyages/VoyagesSplashPage';

function App() {
  const [token, setToken] = useState(undefined)
  console.log(token)

  const viewConductor =()=>{
                                              // ******* updateToken Porp added!!!! *******
    return token === undefined ? <div className="App"><Auth updateToken={updateToken} /></div> : <VoyagesSplashPage token={token} />
  }

  const updateToken =(newToken)=>{
    setToken(newToken);
  }

  return (
    <div className="main">
      {/* commented out so we can display Auth component OR VoyagesSplashPage component */}
      {/* <div className='VoyageSplashPage'>
         <VoyagesSplashPage /> 
          {viewConductor()}
      </div>
    <div className="App">
     <Auth />
     </div> */}
     
     {viewConductor()}

  </div>
  );
}

export default App;