import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import axios from 'axios'

const CdsList = () => {
  const [cds, setCds] = useState([])
  const [filtered, setFilter] = useState([])

  useEffect(() => {
    getCDS()
  }, [])

  const getCDS = async () => {
    const data = await axios.get(
      'https://api.npoint.io/21d771eb6ff6e4e0fbe3/cds'
    )
   
    console.log(data.data)

    setCds(data.data)
    setFilter(data.data)
  }

  const filter = (e) => {
    let selected = e.target.value
    console.log(selected)
    const filteredData = cds.filter((elt) => {
      if (selected !== 'Partout') {
        return elt.Location == selected
      } else {
        return elt
      }
    })

    console.log(filteredData)
    setFilter(filteredData)
  }

  console.log(filtered)

  return (
    <div className='container  mt-2 '>
      <div className='filtre'>
        <label htmlFor='' className='h5 text-primary-100 diplay-2'>
          {' '}
          <i className='bi bi-hospital-fill'></i> Selectionner une region pour
          acceder aux centres des jeunes :{' '}
        </label>
        <select name='location' id='' className='' onChange={(e) => filter(e)}>
          <option value='Partout'> Partout</option>
          <option value='Bujumbura'> Bujumbura</option>
          <option value='Muyinga'> Muyinga</option>
          <option value='Mwaro'> Mwaro</option>
          <option value='Muramvya'> Muramvya</option>e
        </select>
      </div>
      <hr className='text-info font-bold'></hr>

      <h1> Liste des CDSs</h1>
      {filtered.length > 0 ? (
        filtered.map((elt) => (
          <>
            <div className='card mb-3'>
              <div className='card-header bg-accent text-primary-200'>
                CDS Amis des jeunes - {elt.Location}
              </div>
              <div className='card-body text-primary-100'>
                <h5 className='card-title '>Nom du CDS: {elt.name} </h5>
                <p className='card-text'>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <h5>CDS Location: {elt.Location}</h5>
                <h5> Contacter a : {elt.contact}</h5>
                <h5> Heure d'ouverture : {elt.ouverture}</h5>
              </div>
            </div>
          </>
        ))
      ) : (
        <h5 className='text-light'> </h5>
      )}
    </div>
  )
}

export default CdsList
