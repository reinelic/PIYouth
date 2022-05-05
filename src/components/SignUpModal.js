import React,{useContext,useRef,useState}from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const SignUpModal = () => {


    const {modalState,toggleModals,signUp}=useContext(UserContext);
    const [validation,setValidation]=useState("");

    const navigate = useNavigate();

    const inputs = useRef([]);

    const addInputs =(el)=>{

        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    const formRef =useRef();

    const handleForm = async(e)=>{
        e.preventDefault();
        console.log(inputs.current[0].value)
        if(inputs.current[1].value.length<6||inputs.current[2].value.length<6){
            console.log(inputs.current[1].value)
            setValidation("6 characteres minimum");
            return;
        }else if(inputs.current[1].value.length !== inputs.current[1].value.length){
            setValidation("Password do not match");
            return;
        }

       try {
           
        const cred = await signUp(inputs.current[0].value,inputs.current[1].value)
        formRef.current.reset();
        setValidation("");
        navigate('/private/private-home');
        toggleModals("Close");
    } catch (error) {
           if(error.code === "auth/invalid-email"){
               setValidation("Email format invalid")
           }
           if(error.code === "auth/email-already-in-use"){
            setValidation("Email already used")
        }
       }



    }

    console.log(inputs);

  
  return (<>{ modalState.signUpModal  &&
    
    <div className="position-fixed top-0 vw-100 vh-100">

        <div className="w-100 h-100 bg-dark opacity-75C0ncern">

            <div className="position-absolute top-50 start-50 translate-middle">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header"> 
                            <h5 className="modal-title"> Sign Up</h5>
                            <button className="btn-close" onClick={()=>{toggleModals("Close");setValidation("")}}></button>
                        </div>

                        <div className="modal-body">
                            <form ref={formRef} onSubmit={handleForm} className="sign-up-form">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignUpEmail">Email Address</label>
                                    <input ref={addInputs} type="email" name="email" className='form-control' id="SignUpEmail" required/>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignUpPwd">Password</label>
                                    <input ref={addInputs} type="password" name="pwd" className='form-control' id="SignUpPassword" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="RepeatPwd">Repeat Password</label>
                                    <input ref={addInputs} type="password" name="pwd" className='form-control' id="SignUpPassword" required />
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

export default SignUpModal