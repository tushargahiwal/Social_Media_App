
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage/Homepage';
import Authentication from './components/Authentication/Authentication';


function App() {
  return (
    <div className="">
    <Routes>
      <Route path='/' element={true?<HomePage/>:<Authentication/>}/>
    </Routes>
    </div>
  );
}

export default App;
