import React from 'react'

const PatientButton = ({filterPatients}) => {
  return (
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
  )
}

export default PatientButton