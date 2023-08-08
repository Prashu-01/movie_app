import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeUI from './components/home/homeUI';
import Show from './components/show/show';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Bookshow from './components/show/bookshow';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeUI/>} />
        <Route path='/show' element={<Show/>} />
        <Route path='/book' element={<Bookshow />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
