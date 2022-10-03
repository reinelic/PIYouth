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
       <div className ="d-flex justify-content-end">
       <div className ="mx-3"> <Link to = "/cdsList"> <button className="text-info btn btn-outline-primary "> Centre de Sante </button> </Link></div>
       <div>
           {
               !currentUser?
               <>
                   <button className="btn btn-outline-danger text-primary" onClick={()=>{ toggleModals("SignIn");}}>
                   Sign In
               </button>
    
               <button className="btn btn-outline-danger text-primary ms-2" onClick={()=>{toggleModals("SignUp")}} >
                   Sign Up
               </button>
               
               </>
           

           
    
           :   <>
              
            
            <button 
                
                className="btn btn-primary ms-2 ">
               <Link to ="private/private-home "> <span className="text-white">Acceuil</span> </Link>  
            </button>
            <button 
                
                className="btn btn-primary ms-2 text-light">
               <Link to ="/rendez"> <span className="text-white">Prendre un rendez-vous</span></Link>  
            </button>

            <button 
                onClick ={logOut}
                className="btn btn-danger ms-2">
                Logout
            </button>

           
              </>
         
 

            }
           


       </div>
       </div>
    

   </nav>
  )
}

export default Navbar