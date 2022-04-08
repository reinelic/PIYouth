
import{Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import SignUpModal from './components/SignUpModal';

function App() {
  return (
    <>
    <Navbar>

    </Navbar>
    <SignUpModal>
      
    </SignUpModal>
    <Routes>

      <Route path="/" element={ <Home/>}></Route>


    </Routes>
    
    </>
  );
}

export default App;
