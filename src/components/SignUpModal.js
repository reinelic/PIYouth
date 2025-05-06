import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const SignUpModal = () => {
  const { modalState, toggleModals, signUp } = useContext(UserContext)
  const [validation, setValidation] = useState('')

  // Uing react hook form
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const cred = await signUp(data.email, data.password)
      console.log(cred)
      setValidation('')

      navigate('/private/private-home')
      toggleModals('Close')
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setValidation('Email format invalid')
      }
      if (error.code === 'auth/email-already-in-use') {
        setValidation('Email already used')
      }
    }
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className='position-fixed vw-100 vh-100 signinmodal top-0'>
          <div className='w-100 h-100 bg-danger  bg-danger d-flex justify-content-around align-items-center border-info p-20 '>
            <div className='form-info w-50 h-100 fs-2 fw-bold text-accent p-4 align-middle'>
              Inscrivez-vous pour acceder <br></br>A toutes les informations
              liees a SUMA
            </div>

            <div className='form w-50 h-100 text-light p-5'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title'> Sign Up</h5>
                    <button
                      className='btn-close'
                      onClick={() => {
                        toggleModals('Close')
                        setValidation('')
                      }}
                    ></button>
                  </div>

                  <div className='modal-body'>
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className='sign-up-form'
                    >
                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignUpEmail'>
                          Addresse Email
                        </label>

                        <input
                          className='form-control'
                          {...register('email', {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Please enter a valid email',
                            },
                          })}
                          aria-invalid={errors.email ? 'true' : 'false'}
                        />
                        {errors.email && <> {errors.email.message} </>}
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' htmlFor='SignUpPwd'>
                          Mot de passe
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          {...register('password', {
                            required: true,
                            pattern:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                          })}
                        />

                        {errors.password && (
                          <p>
                            {' '}
                            Le mot de passe doit contenir au moins un caractere
                            special, une lettre majuscule et un chiffre
                          </p>
                        )}
                      </div>

                      <div className='mb-3'>
                        <label className='form-label' htmlFor='RepeatPwd'>
                          Repeat Password
                        </label>
                        <input
                          type='password'
                          className='form-control'
                          {...register('password2', {
                            required: true,
                            validate: (val) => {
                              if (watch('password') != val) {
                                return 'Your passwords do no match'
                              }
                            },
                          })}
                        />
                        {errors.password2 && errors.password2.message}
                      </div>

                      <button className='btn btn-primary'>Soumettre</button>
                    </form>

                    <p>{validation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SignUpModal
