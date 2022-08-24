import { useState, useContext } from "react"
import { validatorForm } from "../../helpers/validator";
import { PatientsContext } from "../../App";
import FormInputs from "./FormInputs";
import FormTitle from "./FormTitle";

const Form = () => {
  
  //Estados
  const [isValid, setIsValid] = useState(true);
  
  const [error, setError] = useState('');

  //Contexto
  const {setPatients, value, setValue} = useContext(PatientsContext);

  //Métodos
  const addPatient = e => {
    
    e.preventDefault();

    const form = document.querySelector('form');

    const formData = new FormData(form);

    const validator = validatorForm(formData, setIsValid, setError)

    if(validator) {

      setIsValid(true)

      setPatients(prev => ([value, ...prev]))   
  
      setValue({});
          
      form.reset();

    }   
  }
  
  return (

    <div className="md:w-1/2 lg:w-2/5 md:flex flex-col ml-8 text-center mb-2">

      <FormTitle />

      <form action="" className="mt-5 shadow-md bg-white rounded-md py-10 px-5 text-left mr-10 md:mr-0">
        
        { !isValid && 

          <div className="bg-red-600 font-bold text-white rounded-md text-center mb-6 py-2 px-0 md:w-10/12 m-auto">

            {error}

          </div>  
        }

        <FormInputs addPatient={addPatient}/>

      </form>

    </div>
  )
}

export default Form