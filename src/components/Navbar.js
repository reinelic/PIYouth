import React,{useContext} from 'react';
import { UserContext } from '../context/userContext';
import {Link, useNavigate} from  "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

const Navbar = () => {

    const navigate  = useNavigate()

    const {toggleModals,currentUser}=useContext(UserContext);

    console.log(currentUser);

    const logOut = async() =>{

        await signOut(auth);
        navigate('/')

    }

  return (
   <nav className="navbar navbar-light bg-light px-4">

       <Link to="" className="navbar-brand">Youth</Link>
       <div>
           {
               !currentUser?
               <>
                   <button className="btn btn-primary" onClick={()=>{ toggleModals("SignIn");}}>
                   Sign In
               </button>
    
               <button className="btn btn-primary ms-2" onClick={()=>{toggleModals("SignUp")}} >
                   Sign Up
               </button>
               
               </>
           

           
    
           :   <>
              
               <button 
                onClick ={logOut}
                className="btn btn-danger ms-2">
                Logout
            </button>
           
              </>
         
 

            }
           


       </div>

   </nav>
  )
}

export default Navbar