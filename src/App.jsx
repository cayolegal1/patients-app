import { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import PatientsList from './components/PatientsList'

function App() {

 const [patients, setPatients] = useState([])

 document.title = "Veterinaria - Pacientes App"

  return (

    <div className='container mx-auto mt-10'>

      <Header />

      <div className='mt-12 md:flex'>

        <Form setPatients={setPatients}/>
        
        <PatientsList patients={patients} setPatients={setPatients}/>

      </div>

    </div>
  )
}

export default App
