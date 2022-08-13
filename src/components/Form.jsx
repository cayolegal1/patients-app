import { useState } from "react"
import FormInputs from "./FormInputs";
import FormTitle from "./FormTitle";

const Form = ({setPatients}) => {

  const [value, setValue] = useState({

    petname: "Pitu",
    ownername: "Owen",
    email: "legalcayo7@gmail.com",
    date: "2022-08-13",
    sintomas: "Tos",
    id: Math.random() * 112
  })


  const updateValue = e => {

    let inputValue = e.target.value;

    setValue(val => (
      {
      ...val, 
      [e.target.name]: inputValue.trim(),
      id: Math.random() * 112
      }))
  } 


  const addPatient = e => {
    
    e.preventDefault();

    const form = document.querySelector('form');

    const formData = new FormData(form);

    const validator = [...formData.values()]

    const emailExpReg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(formData.get("petname").length >= 3 
      && formData.get("ownername").length >= 3 
      && formData.get("email").match(emailExpReg)
      && formData.get("date")
      && formData.get("sintomas").length >= 3
      ){

        setValue(val => 

          ({
            id: Math.random(),
            ...val
          })
        )

        setPatients(prev => ([value, ...prev]))   

        setValue(prev => prev);
        
        form.reset();
      } 


      if(validator.includes('')) {

        console.log("vacio")
        console.log(validator)

      }
      
    else console.log("Mal");
  }

  
  return (
    <div className="md:w-1/2 lg:w-2/5 md:flex flex-col ml-8 text-center mb-2">

      <FormTitle />

      <form action="" className="mt-5 shadow-md bg-white rounded-md py-10 px-5 text-left mr-10 md:mr-0">
        
        <FormInputs value={value} updateValue={updateValue} addPatient={addPatient}/>

      </form>

    </div>
  )
}

export default Form