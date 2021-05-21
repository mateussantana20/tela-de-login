const Form = {
  user: document.querySelector('input#user'),
  password: document.querySelector('input#password'),

  getValues () {
    return {
      user: Form.user.value,
      password: Form.password.value
    }
  },
  // Validar o formulario
  validateField () {
    const { user, password } = Form.getValues()

    if( user.trim() === "" || password.trim() === "") {
      throw new Error("Por favor, preencha todos os campos")
    }
  },

  createMessageError (message) {
    MessageError.addRedColor(Form.user)
    MessageError.addRedColor(Form.password)

    const createP = document.querySelector('.divError p').innerHTML = message
    document.querySelector('.divError').appendChild(createP)
    return createP
  },

  clearMessageError () {
    MessageError.clearInput(Form.user)
    MessageError.clearInput(Form.password)

    const createP = document.querySelector('.divError p')
    createP.innerHTML = ""
  },

  submit(event) {
    event.preventDefault()
    Form.clearMessageError()

    try {
      Form.validateField()
    } catch (error) {
     
      Form.createMessageError(error.message)
      // alert(error.message)
    }
  }
}

const MessageError = {
  addRedColor (input) {
    input.classList.add('error')
  },
  clearInput (input) {
    input.classList.remove('error')
  },
}

