import React from 'react'

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

        <div className="mt-5 flex justify-between">
          <button 
            className="font-bold rounded bg-sky-600 py-2 px-4 text-white hover:bg-sky-700 transition-colors"> 

            Editar

          </button>

          <button 
            className="font-bold rounded bg-red-600 py-2 px-2 text-white hover:bg-red-700 transition-colors"
            onClick={filterPatients}>

            Eliminar 
          </button>
        </div>
    </div>
  )
}

export default Patient