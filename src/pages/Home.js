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
    setCds(data.data.cds)
  }

  return (
    <>
      <div className='container-fluid wrapper'>
        <div className='row home flex'>
          <div className='col-md-7 home_info'>
            <h1 className='home_info--title fw-bold fs-primary-heading text-primary-200'>
              <span className='text-accent-heading'>SUMA</span>
              <br />
              Autonomisation Financière des Femmes
            </h1>

            <div className='home_info--body text-primary-200 fs-section'>
              SUMA connecte les entrepreneures aux institutions financières,
              leur fournit une éducation financière essentielle, et facilite
              l'épargne et le développement de leurs entreprises tout en
              renforçant leurs communautés.
            </div>

            <div className='home_info--action d-flex'>
              <div
                className='action_a bg-button box-shadow'
                onClick={() => toggleModals('SignUp')}
              >
                Rejoignez notre mouvement
              </div>

              <div className='action_b'>
                <Link to='/cdsList'>
                  <span className='mr-2'>Réseaux de femmes</span>
                  <Hospital size={48} />
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-5 home__img'></div>
        </div>

        <div className='container-fluid methodes padding-block-big'>
          <div className='row bg-body-primary'>
            <div className='col-md-7 contra'>
              <img
                src='/contra_component.png'
                alt='Femmes entrepreneures'
                className='component mb-2'
              />
              <div className='text-primary-100 w-70 fs-section mt-4'>
                <h3>Notre Approche Holistique</h3>
                <p>
                  Nous combinons accès au financement, formation en gestion
                  d'entreprise, et mentorat pour créer un écosystème complet de
                  soutien aux femmes en utilisant les technologies NLP .
                </p>
              </div>
            </div>

            {/* <Methodes /> */}
          </div>

          <Activites />

          {cds.data ? (
            <div className='row bg-dark p-4'>
              {cds.map((elt) => (
                <div className='col-md-4'>
                  <Cds data={elt} />
                </div>
              ))}
            </div>
          ) : null}

          <div className='row border-primary mt-4 mb-4'>
            <div className='col-md-4 bg-primary cdsagent p-2'>
              {/* Image placeholder */}
            </div>

            <div className='col-md-8 text-dark bg-white p-3'>
              <div className='text-muted fs-section'>
                <h3>Impact Communautaire</h3>
                <p>
                  Chaque femme entrepreneure soutenue par SUMA crée un effet
                  multiplicateur : elle emploie en moyenne 3 personnes, éduque
                  ses enfants, et inspire d'autres femmes dans sa communauté.
                  Notre modèle prouve que l'autonomisation financière des femmes
                  transforme des vies et stimule le développement local.
                </p>
                <button className='btn btn-accent'>
                  Voir nos réussites <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
