import React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Methodes = () => {

  const [methodes , setMethodes] = useState([]);

  const getMethodes = async()=>{
    
    const methodesList  = await axios.get('http://localhost:3004/methodes');
    setMethodes(methodesList.data);
    console.log(methodesList.data)

  }

  useEffect(()=>
  {
      getMethodes();

  },[])

  

 

  const firstRow = methodes.filter(method => {
  
    return method.id<4
  
  });
  const secondRow = methodes.filter(method =>method.id>3);

  const firstMethodes = firstRow.map(method =><>
  <Link to={`/${method.id}`}>
  <div  key={method.id} className="moyen text-center">
          <img src={method.methodeUrl} className='icone' alt="" />
          <div className="">{method.methodeName}</div>
  </div>        
  </Link>
  


</>)

const secondMethodes = secondRow.map(method =><>
 <Link to={`/${method.id}`}>  <div  key={method.id} className="moyen text-center">

<img src={method.methodeUrl} className='icone' alt="" />
<div className="">{method.methodeName}</div>

</div>
</Link>
</>);

  console.log(firstRow);

  return (
    <>
    <div className="text-dark text-muted">

<div className="first d-flex ">


   {firstMethodes}

     {/* <div className="moyen text-center">
     
         <img src="/preservatif.png" className='icone' alt="" />
         <div className="">preservatif</div>
     
     </div>

     <div className="moyen text-center">

         <img src="/diaphragme.png" className='icone' alt="" />
         <div className="">Diaphragme</div>
     </div>

     <div className="moyen text-center">

         <img src="/Injections.png" className='icone' alt="" />
         <div className="">Injections</div>
     </div> */}



</div>


<div className="second d-flex  ">

  {secondMethodes}

         {/* <div className="moyen text-center">
         
               <img src="/Anneau.png" className='icone' alt="" />
               <div className="">Anneau</div>
       
         </div>

         <div className="moyen text-center ">

            <img src="/Idu.png" className='icone' alt="" />
            <div className="">Idu</div>

        </div>


      <div className="moyen text-center">

         <img src="/Sayana.png" className='icone' alt="" />
         <div className="">Sayana</div>

       </div>

 */}


</div>














</div>


    </>
  )
}

export default Methodes