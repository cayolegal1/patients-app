import { useState } from "react"
const Form = ({setPatients}) => {

  const [value, setValue] = useState({})

  const updateValue = e => {

    let inputValue = e.target.value;

    setValue(val => (
      {
      ...val, 
      [e.target.name]: inputValue,
      id: Math.random() * 112
      }))

      console.log(value);

  } 

  const addPatient = e => {
    
    e.preventDefault();

    const form = document.querySelector('form');

    const formData = new FormData(form);

    const exp = "-^(?:[^<>()[\].,;:\s@'']+(\.[^<>()[\].,;:\s@'']*|''[^\n'']+'')@(?:[^<>()[\].,;:\s@'']+\.)+[^<>()[\]\.,;:s@'']{2,63}$/i]"

    if(formData.get("petname").length >= 3 
      && formData.get("ownername").length >= 3 
      //&& formData.get("email") === exp 
      && formData.get("date")
      && formData.get("sintomas").length >= 3
      ){

        setValue(val => 

          ({
            id: Math.random(),
            ...val
          })
        )

        console.log(value)

        setPatients(prev => ([value, ...prev]))


        setValue({});

        form.reset();
      } 

    else console.log("Mal");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 md:flex flex-col ml-8 text-center mb-2">
      <h1 className="font-black text-2xl">Seguimiento Pacientes</h1>

      <p className="mt-2 text-lg">

        Añade pacientes y 
        <span className="text-indigo-600 font-bold"> Administralos</span>

      </p>

      <form action="" className="mt-5 shadow-md bg-white rounded-md py-10 px-5 text-left mr-10 md:mr-0">
        <div className="">
          <label htmlFor="petname" className="block">Nombre de la Mascota</label>

          <input 
          className="border-2 rounded mt-2 w-full p-2 text-zinc-700"
          type="text"
          name="petname"
          id="petname"
          placeholder="Pitufina"
          onInput={updateValue}
          />

        </div>

        <div className="mt-5">
          <label htmlFor="ownername" className="block">Nombre del Propietario</label>
          <input 
          className="border-2 rounded mt-2 w-full p-2 text-zinc-700"
          type="text"
          name="ownername"
          id="ownername"
          placeholder="Owen"
          onInput={updateValue}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="email" className="block">Email</label>
          <input 
          className="border-2 rounded mt-2 w-full p-2 text-zinc-700"
          type="email"
          name="email"
          id="email"
          placeholder="owen@outlook.com"
          onInput={updateValue}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="date" className="block">Fecha de Alta</label>
          <input 
          className="border-2 rounded mt-2 w-full p-2 text-zinc-700"
          type="date"
          name="date"
          id="date"
          onInput={updateValue}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="sintomas" className="block">Síntomas</label>
          <textarea 
          className="border-2 rounded mt-2 w-full p-4 text-zinc-700"
          name="sintomas"
          id="sintomas"
          placeholder="Describe los síntomas"
          onInput={updateValue}
          />
        </div>

        <input
         type="submit" 
         value="Agregar" 
         className="mt-5 cursor-pointer bg-indigo-600 p-2 rounded-md text-white w-full font-bold hover:bg-indigo-700 transition-all"
         onClick={addPatient}
        />

      </form>
    </div>
  )
}

export default Form