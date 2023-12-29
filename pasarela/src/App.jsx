import AppRoutes from './routes/Routes';
import './App.css'
import LoginProvider from './context/LoginContext';
import { useEffect } from 'react';

function App() {
  
  return (
    <div className='app'>
      <LoginProvider>
        <AppRoutes />
      </LoginProvider>
    </div>
  );
};

export default App;