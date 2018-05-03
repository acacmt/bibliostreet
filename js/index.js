let users = []
let userId = 0

class User {

 constructor(name, email, password) {
    this._id = User.getLastId() + 1
    this.name = name
    this.email = email
    this.password = password
 }

 // Propriedade ID
 get id() {
 return this._id
 }

 // Propriedade NAME
 get name() {
 return this._name
 }

 set name(newName) {
 this._name = newName
 }

 // Propriedade EMAIL
 get email() {
 return this._email
 }

 set email(newEmail) {
 this._email = newEmail
 }

 // Propriedade PASSWORD
 get password() {
 return this._password
 }

 set password(newPassoword) {
 this._password = newPassoword
 }

 static getLastId() {
 let lastId = 0
 if(users.length != 0) {
 lastId = users[users.length-1].id
 }
 return lastId
 }

}



window.onload = function() {
 // Referências para elementos HTML
 let optLogin = document.getElementById("optLogin")
 let optLogout = document.getElementById("optLogout")
 let optHi = document.getElementById("optHi")

 // Injetar utilizadores e viagens via código
 let user01 = new User("ric", "ric@mail.pt", 12345)
 users.push(user01);
 let user02 = new User("Maria", "maria@mail.pt", 54321)
 users.push(user02)

// Esconder opções de autenticação
optLogout.style.display = 'none'
optHi.style.display = 'none'

 let frmLogin = document.getElementById("frmLogin")
 // SUBMISSÃO DE AUTENTICAÇÃO
 frmLogin.addEventListener("submit", function(event) { 
    // Obter as referências para as caixas de texto
    let inputLoginEmail = document.getElementById("inputLoginEmail")
    let inputLoginPassword = document.getElementById("inputLoginPassword")

    console.log("Email: " + inputLoginEmail.value)
    console.log("Pass: " + inputLoginPassword.value)

    // Iterar sobre o array e verificar se o utilizador já existe
    let userExists = false
    let userName = ""
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == inputLoginEmail.value && users[i].password == inputLoginPassword.value) {
            userExists = true
            userId = users[i].id
            userName = users[i].name
        }        
    }   

    // Se sim, autenticar utilizador
    if(userExists == true) {
        alert("Autenticação efetuado com sucesso!!")
        // Fechar a modal
        $('#login-modal').modal('hide')
        // Alterar navbar 
        optLogin.style.display = 'none'
        optLogout.style.display = 'block'
        optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
        userName + "</a>"
        optHi.style.display = 'block'

    } else {
        // Se não, exibir mensagem a indicar a inexistência do utilizador no array
        alert("Dados de autenticação inválidos!!")
    }
    event.preventDefault()

 })

 // SUBMISSÃO DE REGISTO
 let frmRegister = document.getElementById("frmRegister")
 frmRegister.addEventListener("submit", function() { 
 // 1. Validar pass iguais
 let inputPassword1 = document.getElementById("inputPassword1")
 let inputPassword2 = document.getElementById("inputPassword2")
 let strError = ""

 console.log(inputPassword1.value)
 console.log(inputPassword2.value)

 if (inputPassword1.value != inputPassword2.value) {
 strError = "As passwords têm de ser iguais" 
 }

 // 2. Validar se já existe um user com o mesmo email
 let inputEmail = document.getElementById("inputEmail")
 let userExist = false
 for (var i = 0; i < users.length; i++) {
 if (users[i].email == inputEmail.value) {
 userExist = true
 } 
 }

 if(userExist == true) {
 strError += "\nEmail já existente!"
 }

 // 3. Criar o utilizador
 if (strError=="") {
 let inputName = document.getElementById("inputName")
 let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value)
 // 4. Adicionar ao array
 users.push(newUser)
 userId = newUser.id

 // 5. Alerta de sucesso!
 alert("Registo efetuado com sucesso!!")
 // 6. Fechar a modal
 $('#registoModal').modal('hide')
 $('#login-modal').modal('hide')
 // 7. ALterar navbar 
 
 optLogin.style.display = 'none'
 optLogout.style.display = 'block'
 
 optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
 newUser.name + "</a>"
 optHi.style.display = 'block'

 } else {
 alert(strError) 
 frmRegister.reset()
 inputName.focus()
 }
 event.preventDefault()
 })

 // LOGOUT
 optLogout.addEventListener("click", function () {
    userId = 0
    optLogin.style.display = 'block'
    optLogout.style.display = 'none'
    optHi.style.display = 'none'
 })

}










