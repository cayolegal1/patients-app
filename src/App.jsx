import { useState, createContext, useEffect } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header'
import PatientsList from './components/Patients/PatientsList'
export const PatientsContext = createContext();

function App() {

  //Estados
  const [patients, setPatients] = useState([])

  const [value, setValue] = useState({})

  const [patientEdit, setPatientEdit] = useState({})

  //Efectos

  useEffect(() => {

    const patientsInStorage = localStorage.getItem("patients");

    const localPatients = JSON.parse(patientsInStorage);

    if(localPatients.length > 0) setPatients(localPatients);

  }, [])

  useEffect(() => {

    localStorage.setItem('patients', JSON.stringify(patients));

  }, [patients])

  return (

    <PatientsContext.Provider 

      value={
        { 
          patients,
          patientEdit,
          value,
          setPatients, 
          setPatientEdit,
          setValue,
        }
    }>

      <div className='container mx-auto mt-10'>

        <Header />

        <div className='mt-12 md:flex'>

          <Form />
          
          <PatientsList />

        </div>

      </div>

    </PatientsContext.Provider >
  )
}

export default App
