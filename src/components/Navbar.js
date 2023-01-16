import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link, useNavigate } from 'react-router-dom'
import { signOut, getAuth } from 'firebase/auth'

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
    <nav className='navbar navbar-light bg-light px-4 '>
      <Link to='' className='navbar-brand mb-0 h1 text-primary '>
        Pathfinder Burundi
      </Link>

      <div className=' '>
        {/* <div className ="mx-3"> <Link to = "/cdsList"> <button className="text-info btn btn-outline-primary "> Centre de Sante </button> </Link></div> */}
        <div>
          {!currentUser ? (
            <div className='navbar-nav d-flex flex-row'>
              <div
                className='nav-item px-2 text-danger'
                onClick={() => {
                  toggleModals('SignIn')
                }}
              >
                Sign In
              </div>

              <div
                className='nav-item '
                onClick={() => {
                  toggleModals('SignUp')
                }}
              >
                Sign Up
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
