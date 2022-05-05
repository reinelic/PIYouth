
import{Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Private from './pages/Private/Private';
import PrivateHome from './pages/Private/PrivateHome/PrivateHome';
import SignUpModal from './components/SignUpModal';
import SignInModal from './components/SignInModal'

function App() {
  return (
    <>
    <SignUpModal/>
    <SignInModal />
    <Navbar/>

   
    <Routes>

      <Route path="/" element={ <Home/>}></Route>

      <Route path="/private" element={<Private/>}>  
         <Route path="/private/private-home" element={<PrivateHome/>}/>
      </Route>


    </Routes>
    
   </>
  );
}

export default App;
