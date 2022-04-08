import React from 'react'

const SignUpModal = () => {
  return (
    <>
    <div className="position-fixed top-0 vw-100 vh-100">

        <div className="w-100 h-100 bg-dark bg-opacity-75">

            <div className="position-absolute top-50 start-50 translate-middle">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header"> 
                            <h5 className="modal-title"> Sign Up</h5>
                            <button className="btn-close"></button>
                        </div>

                        <div className="modal-body">
                            <form action="" className="sign-up-form">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignUpEmail">Email Address</label>
                                    <input type="email" name="email" className='form-control' id="SignUpEmail" required/>
                                </div>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="SignUpPwd">Password</label>
                                    <input type="password" name="pwd" className='form-control' id="SignUpPassword" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="RepeatPwd">Repeat Password</label>
                                    <input type="password" name="pwd" className='form-control' id="SignUpPassword" required />
                                </div>

                                <button className="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default SignUpModal