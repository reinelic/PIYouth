import React from 'react';
import {Link} from  "react-router-dom"

const Navbar = () => {
  return (
   <nav className="navbar navbar-light bg-light px-4">

       <Link to="" className="navbar-brand">Youth</Link>
       <div>
           <button className="btn btn-primary">
               Sign In
           </button>

           <button className="btn btn-primary ms-2">
               Sign Up
           </button>

           <button className="btn btn-danger ms-2">
               Logout
           </button>



       </div>

   </nav>
  )
}

export default Navbar