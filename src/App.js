
import{Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar>
      
    </Navbar>
    <Routes>

      <Route path="/" element={ <Home/>}></Route>


    </Routes>
    
    </>
  );
}

export default App;
