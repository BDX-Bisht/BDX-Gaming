import './App.css';
import { Router } from './pages/Router';
import { Footer } from './pages/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
