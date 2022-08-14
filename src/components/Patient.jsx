import React from 'react'
import PatientButton from './PatientButton'

const Patient = ({patient, setPatients}) => {

  const filterPatients = () => {

    setPatients(prev => {

      const filter = prev.filter(item => item != patient)
      return filter
    })
  }
  return (
    
    <div className="text-left mt-5 ml-10 p-8 bg-white shadow-md rounded-xl mb-5">
        <p className="font-bold text-gray-700 uppercase">
        Nombre: 
        <span className='font-normal normal-case'> {patient.petname.trim()}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mt-5">
        Propietario: 
        <span className='font-normal normal-case'> {patient.ownername.trim()}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mt-5">
        Email: 
        <span className='font-normal normal-case'> {patient.email.trim()}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mt-5">
        Fecha de alta: 
        <span className='font-normal normal-case'> {patient.date}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mt-5">
        Síntomas: 
        <span className='font-normal normal-case'> {patient.sintomas.trim()}</span>
        </p>

        <PatientButton filterPatients={filterPatients} />

    </div>
  )
}

export default Patient