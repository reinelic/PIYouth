import React from 'react';
import { useState,useEffect } from 'react';
import './home.css';
import Cds from '../components/Cds';
import axios from 'axios';



 const Home = () => {

  const[cds,setCds] = useState([])

  useEffect(()=>{
        
    getCDS();

 },[])

 const getCDS = async()=>{


    const data =  await axios.get('http://localhost:3000/cds');

    console.log(data);


    setCds(data);

    

 }
 console.log('This are the cds');
 console.log(cds);

  return (
    <>
    <div className="header">
       <div className="cover container flex mb-4">

        <h1 className="cover-text display-5 text-light">
            Bienvenue sur la plateforme PI concu pour les jeunes
            
        </h1>
      
      </div>
     
  </div>

  <div className="container mt-6">

  <h4 className=" text-center text-info mb-2">
         Methodes de contraception 

      </h4>
     

  


 { cds.data? <div className=" row bg-dark p-4">

  {
    cds.data.map(elt =><div className="col-md-4"> <Cds  data ={elt}/></div>)
  }


 
 
 </div> : <div>Data Loading</div>}

  <div className="row mt-4 mb-4 border-primary">
    


    <div className="col-md-4 bg-primary p-2 cdsagent">

      {/* <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img" /> */}

    </div>

    <div className="col-md-8 text-dark bg-white p-3">
    <h5> Commentaire d'un agent CDS</h5>
    <div className="text-muted"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat alias, suscipit iusto nam culpa 
      corporis possimus illo quam est! Iusto deleniti provident accusamus asperiores fugiat, nihil autem eveniet corporis eligendi dolor minus optio expedita deserunt repellat! A, ipsa harum? Enim itaque nemo aliquam nam harum 
      illo porro suscipit accusamus culpa, error vero, nostrum in iusto? Hic optio omnis rem laborum.</div>
      
    </div>
    
    </div>   




      

      
 
      </div>


    


 

  </>
   
  )
}
export default Home