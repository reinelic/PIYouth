import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { signOut, getAuth } from 'firebase/auth'
import { ArrowBarRight, PersonAdd } from 'react-bootstrap-icons'

const Navbar = () => {
  const navigate = useNavigate()
  const auth = getAuth()

  const { toggleModals, currentUser } = useContext(UserContext)

  console.log(currentUser)

  const logOut = async () => {
    try {
      console.log('I am logging out!')
      const res = await signOut(auth)

      console.log(res)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className='navbar navbar-light bg-light box-shadow px-4'>
      <Link to='' className='navbar-brand h1 text-danger mb-0 '>
        SUMA
      </Link>

      <div className=' '>
        {/* <div className ="mx-3"> <Link to = "/cdsList"> <button className="text-info btn btn-outline-primary "> Centre de Sante </button> </Link></div> */}
        <div>
          {!currentUser ? (
            <div className='navbar-nav d-flex flex-row'>
              <div
                className='nav-item text-danger px-2'
                onClick={() => {
                  toggleModals('SignIn')
                }}
              >
                Sign In <ArrowBarRight />
              </div>

              <div
                className='nav-item'
                onClick={() => {
                  toggleModals('SignUp')
                }}
              >
                Sign Up <PersonAdd />
              </div>
            </div>
          ) : (
            <div className='navbar-nav d-flex flex-row'>
              <div className='nav-item'>
                <Link to='/private/private-home'>
                  {' '}
                  <span className='text-danger mx-2'>A propos</span>{' '}
                </Link>
              </div>
              <div className='nav-item'>
                <Link to='private/CdsList'>
                  {' '}
                  <span className='text-danger mx-2'>
                    CDS-Amis de jeunes
                  </span>{' '}
                </Link>
              </div>

              <div onClick={() => logOut()} className='nav-item'>
                Logout <i class='bi bi-arrow-left'></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
