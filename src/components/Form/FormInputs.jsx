import React, {useContext} from 'react'
import { PatientsContext } from '../../App';

const FormInputs = ({addPatient}) => {

    const {setValue} = useContext(PatientsContext);

    const updateValue = e => {

        let inputValue = e.target.value;

        setValue(val => (
            {

            ...val, 

            [e.target.name]: inputValue.trim(),

            id: Math.random() * 1120

            }))
        } 

    return (
        <>
            <div>
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

        </>
  )
}

export default FormInputs