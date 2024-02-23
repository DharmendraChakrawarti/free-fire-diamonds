import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Fb from './Fb';
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>}/>
      <Route path='Home' element={ <Home/>}/>
       <Route path='Fb' element={ <Fb/>}/>

    </Routes>
  </BrowserRouter>

}

export default App;
