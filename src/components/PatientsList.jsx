import Patient from './Patient'

const PatientsList = ({patients, setPatients}) => {
  return (
    <div className='md:w-1/2 md:flex flex-col text-center mt-10 md:mt-0'>
        <h2 className="font-black text-2xl">Listado Pacientes</h2>
        <p className="mt-2 text-lg">
          Administra tus 
          <span className="font-bold text-indigo-600"> Pacientes</span>
        </p>

        <div className='md:h-screen md:overflow-y-scroll mr-10 md:mr-0'>

          {patients.map(patient => <Patient patient={patient} key={patient.id} setPatients={setPatients}/>)}

        </div>
    </div>
  )
}

export default PatientsList