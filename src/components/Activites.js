import React from 'react'
import { ArrowBarRight, ArrowRight } from 'react-bootstrap-icons'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './activities.css'

export const Activites = () => {
  const slideImages = [
    {
      url: '/act1.jpg',
      caption: 'Activite 1',
      content: (
        <>
          <h3 className='fw-bold'>Autonomisation Financière des Femmes</h3>
          <p>
            Notre plateforme offre des solutions financières adaptées pour aider
            les femmes entrepreneures vulnérables à développer leurs petites
            entreprises. Accès à des microcrédits, formations en gestion et
            accompagnement personnalisé.
          </p>
          <button className='btn btn-primary mt-2'>
            En savoir plus <ArrowRight className='ms-2' />
          </button>
        </>
      ),
    },
    {
      url: '/act2.jpg',
      caption: 'Activite 2',
      content: (
        <>
          <h3 className='fw-bold'>Réseau de Solidarité Féminine</h3>
          <p>
            Rejoignez notre communauté de femmes entrepreneures! Partagez vos
            expériences, bénéficiez de mentorat et créez des opportunités
            commerciales grâce à notre réseau solidaire.
          </p>
          <button className='btn btn-primary mt-2'>
            Rejoindre maintenant <ArrowBarRight className='ms-2' />
          </button>
        </>
      ),
    },
    // You can add more slides here if needed
  ]

  return (
    <div className='bg-body-primary padding-block-big'>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className='each-slide' key={index}>
            {/* <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div> */}
            <div className='activities container-fluid  text-dark overflow-hidden'>
              <img src='/lines.png' alt='' className='d-inline' />{' '}
              <h2 className='text-accent d-inline text-center'>Activities</h2>
              <div className='row mb-2'>
                <div className='col-12 position-relative'>
                  <img src={slideImage.url} alt='' className='img_act' />

                  <div className='act-info  bg-accent text-primary-200  border-info mt-3 p-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cupiditate accusantium, alias praesentium officiis
                    repudiandae consectetur perferendis repellendus eos?
                    Consequatur, quas!
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
} // end component
