import {useContext } from "react"
import { PatientsContext } from "../../App";

const PatientButton = ({patient}) => {

  //Contexto
  const {setPatientEdit, setValue, setPatients, value} = useContext(PatientsContext);

  //Métodos
  const deletePatient = () => {

    setPatients(prev => {

      const filter = prev.filter(item => item != patient)
      return filter
    })
  }

  const editPatient = () => {

    setPatientEdit(patient);

    const petname = document.getElementById('petname').value = patient.petname;
    const ownername = document.getElementById('ownername').value = patient.ownername;
    const email = document.getElementById('email').value = patient.email;
    const date = document.getElementById('date').value = patient.date;
    const sintomas = document.getElementById('sintomas').value = patient.sintomas;

    setValue({
      petname, 
      ownername,
      email,
      date,
      sintomas
    });

    document.getElementById('add').onclick = (e) => {
      
      e.preventDefault();

      setPatients(prev => {

      const updatedList = prev.filter(item => item.id !== patient.id);

      return updatedList

    }) }
  }

  return (
    
    <div className="mt-5 flex justify-between">
          
          <button 
            className="font-bold rounded bg-sky-600 py-2 px-4 text-white hover:bg-sky-700 transition-colors"
            onClick={editPatient}> 

            Editar

          </button>

          <button 
            className="font-bold rounded bg-red-600 py-2 px-2 text-white hover:bg-red-700 transition-colors"
            onClick={deletePatient}>

            Eliminar 

          </button>
          
    </div>
  )
}

export default PatientButton