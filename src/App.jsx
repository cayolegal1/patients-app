import { useState, createContext } from 'react'
import Form from './components/Form/Form'
import Header from './components/Header'
import PatientsList from './components/Patients/PatientsList'
export const PatientsContext = createContext();

function App() {

  const [patients, setPatients] = useState([])

  const [value, setValue] = useState({});

  return (

    <PatientsContext.Provider 

      value={
        { 
          patients,
          setPatients, 
          value,
          setValue
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
