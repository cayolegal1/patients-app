const validatorForm = (form, setIsValid, setError) => {

    const validator = [...form.values()]

    const emailExpReg =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!form.get("email").match(emailExpReg)) {

      setIsValid(false)
      setError("El email no es válido. Intenta con otro.")
      return false 
    }

    if(validator.includes('')) {

      setIsValid(false)
      setError("Uno de los campos está vacío.")
      return false
    }

    if(form.get("petname").length < 3 
    || form.get("ownername").length < 3 
    || form.get("sintomas").length < 3) {

      setIsValid(false)
      setError("Uno de los campos tiene poca información.")
      return false
    }

    return true
}

export {validatorForm}