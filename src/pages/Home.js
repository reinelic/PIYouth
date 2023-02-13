import React from 'react'
import { useState, useEffect, useContext } from 'react'
import './home.css'
import Cds from '../components/Cds'
import axios from 'axios'
import Methodes from '../components/Methodes'
import { Activites } from '../components/Activites'
import { Link } from 'react-router-dom'
import { Hospital } from 'react-bootstrap-icons'
import { UserContext } from '../context/userContext'

const Home = () => {
  const [cds, setCds] = useState([])

  const { toggleModals, currentUser } = useContext(UserContext)

  useEffect(() => {
    getCDS()
  }, [])

  const getCDS = async () => {
    const data = await axios.get('https://api.npoint.io/21d771eb6ff6e4e0fbe3')

    console.log('This are the cds')

    console.log(data.data.cds)

    setCds(data.data.cds)
  }

  return (
    <>
      <div className='container-fluid wrapper'>
        <div className=' row home  flex '>
          <div className=' col-md-7 home_info'>
            <h1 className='home_info--titl e fw-bold fs-primary-heading text-primary-200'>
              <span class='text-accent-heading '> Jeunesse Resiliente</span>{' '}
              <br />
              Un monde Resilient
            </h1>

            <div className='home_info--body text-primary-200 fs-section'>
              Pathfinder Burundi aide les jeunes a avoir acces a une sante
              sexuelle et reproductive saine. Rejoignez la communaute des jeunes
              PI pour beneficier de l'education et services en sante sexuelle et
              reproductive
            </div>

            <div className='home_info--action d-flex'>
              <div
                className=' action_a bg-button box-shadow'
                onClick={() => {
                  console.log('clicking here ...')
                  toggleModals('SignUp')
                }}
              >
                Rejoignez la communaute{' '}
              </div>

              <div className='action_b'>
                <Link to='/cdsList'>
                  <span className='mr-2'> CDS jeunes</span>{' '}
                  <Hospital size={48} />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-5 home__img'></div>
        </div>

        <div className='container-fluid methodes padding-block-big'>
          {/* <div className=" bg-danger position-relative top-0 w-25">

<h4> Les Methodes de contraception</h4> 

</div>     */}

          <div className=' row bg-body-primary '>
            <div className='col-md-7 contra'>
              <img
                src='/contra_component.png'
                alt=''
                className='component mb-2'
              />

              <div className='text-primary-100 mt-4 w-70 fs-section '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam quas nobis itaque mollitia aut corporis praesentium
                libero doloribus tempore, facere ut alias, cum commodi voluptas
                tempora rerum, perspiciatis expedita. Blanditiis impedit
                consectetur cum non unde fugiat magnam repudiandae,
              </div>
            </div>

            {/* Methodes  */}

            <Methodes />
          </div>

          <Activites />

          {cds.data ? (
            <div className=' row bg-dark p-4'>
              {cds.map((elt) => (
                <div className='col-md-4'>
                  {' '}
                  <Cds data={elt} />
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <div className='row mt-4 mb-4 border-primary'>
            <div className='col-md-4 bg-primary p-2 cdsagent'>
              {/* <img src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="img" /> */}
            </div>

            <div className='col-md-8 text-dark bg-white p-3'>
              <div className='text-muted fs-section'>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quaerat alias, suscipit iusto nam culpa corporis possimus illo
                quam est! Iusto deleniti provident accusamus asperiores fugiat,
                nihil autem eveniet corporis eligendi dolor minus optio expedita
                deserunt repellat! A, ipsa harum? Enim itaque nemo aliquam nam
                harum illo porro suscipit accusamus culpa, error vero, nostrum
                in iusto? Hic optio omnis rem laborum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
