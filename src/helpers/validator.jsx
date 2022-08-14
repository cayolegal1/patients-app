const validatorForm = (form, setIsValid, setError) => {

    const emailExpReg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const petname = document.getElementById('petname');

    const ownername = document.getElementById('ownername');

    const email = document.getElementById('email');

    const date = document.getElementById('date')

    const sintomas = document.getElementById('sintomas');

    const elements = [petname, ownername, email, date, sintomas]

    elements.forEach(item => item.style.borderColor = '#e5e7eb' )

    if(!form.get("email").match(emailExpReg)) {
        
      email.style.borderColor = 'red';
      setIsValid(false);
      setError("El email no es válido.");
      return false 

    }

    const pet = inputChanger("petname", petname, form, setIsValid, setError);
    const own = inputChanger("ownername", ownername, form, setIsValid, setError);
    const syntom = inputChanger("sintomas", sintomas, form, setIsValid, setError);
    const dateInput = inputChanger("date", date, form, setIsValid, setError);

    if(!pet) return false
    if(!own) return false
    if(!syntom) return false
    if(!dateInput) return false

    return true
}

const inputChanger = (item, input, form, setIsValid, setError) => {

    if(form.get(item).length < 3  || form.get(item) === null) {

        input.style.borderColor = 'red';
        setIsValid(false);
        setError("Uno de los campos contiene poca información o esta vacío");
        return false

    } else return true
}

export {validatorForm}