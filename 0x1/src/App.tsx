import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { DarkModeToggle } from './components/DarkModeToggle';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
