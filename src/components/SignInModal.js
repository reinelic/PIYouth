import React,{useContext,useRef,useState,useEffect}from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const SignInModal = () => {

    const[ email , setEmail] = useState("")
    const[ password , setPassword] = useState("")
     
    const {modalState,toggleModals,signIn}=useContext(UserContext);
    const [validation,setValidation]=useState("");

    const navigate = useNavigate();

    // const inputs = useRef([]);

    // const addInputs =(el)=>{

    //     console.log('Inputs length')
    //     console.log(inputs.current.length);
    //     console.log(inputs.current)
    //     console.log(el)

    //     if(el && !inputs.current.includes(el)){
    //         inputs.current.push(el)
    //     }
    // }

    // const formRef =useRef();

    const handleForm = async(e)=>{
        e.preventDefault();
        // console.log(formRef)
           
       try {
        console.log(email, password);
        const cred = await signIn(email, password)
        console.log(cred)
        // formRef.current.reset();
        setValidation("");
        setEmail('');
        setPassword( '')
    
        navigate('/private/private-home');



        toggleModals("Close");

         
    } catch (error) {
           console.log(error.code);
           setValidation("Email or password incorrect!")
           
        }
       }



    

    // console.log(inputs);

  
  return (<>{ modalState.signInModal  &&
    
    <div className="position-fixed top-0 vw-100 vh-100 signinmodal">

        <div className="w-100 h-100 bg-danger p-20 d-flex justify-content-around align-items-center border-info">

            <div className="form-info w-50 h-100 align-middle fs-2 p-4">
                
               Bienvenue sur  la plateforme dediee aux Jeunesse


            </div>

            {/* <div className="position-absolute top-50 start-50 translate-middle "> */}
               <div className="form w-50 h-100 p-5 text-light">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header"> 
                            <h5 className="modal-title"> Login</h5>
                            <button className="btn-close btn-light" onClick={()=>{toggleModals("Close");setValidation("")}}></button>
                        </div>

                        <div className="modal-body">
                            <form  onSubmit={handleForm} className="sign-up-form">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignInEmail">Email Address</label>
                                    <input value = {email} onChange ={ (e) => setEmail(e.target.value)}  type="email" name="email" className='form-control' id="SignUpEmail" required/>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignInPwd">Password</label>
                                    <input  value = {password} onChange = { (e) =>setPassword(e.target.value)} type="password" name="pwd" className='form-control' id="SignUpPassword" required />
                                </div>

                               

                                <h4 className="text-danger ">{validation}</h4>

                                <button className="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
   

  }
     </>
  )
}

export default SignInModal