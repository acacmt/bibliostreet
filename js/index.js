console.log(localStorage.getItem("users"))
let users = []
let userId = 0

class User {

    constructor(name, email, password, type) {
        this._id = User.getLastId() + 1
        this.name = name
        this.email = email
        this.password = password
        this.type = type
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

    // Propriedade TIPO USER
    get type() {
        return this._type
    }

    set type(newType) {
        this._type = newType
    }

    static getLastId() {
        let lastId = 0
        if (users.length != 0) {
            lastId = users[users.length - 1].id
        }
        return lastId
    }

}

//////////////////////////////////
//////////////////////////////////
//        users
//////////////////////////////////
//////////////////////////////////

window.onload = function () {

    if (localStorage.getItem("users") != null) {

        let temp_users = JSON.parse(localStorage.getItem("users"));
        console.log(temp_users)
        for (var i = 0; i < temp_users.length; i++) {
            let user = new User(temp_users[i]._name, temp_users[i]._email, temp_users[i]._password, temp_users[i]._type)
            users.push(user);
        }
        console.log(users)
    }


    check();


    // Referência para elementos HTML
    let optLogin = document.getElementById("optLogin")

    // Injetar users e viagens via código
    if (users.length == 0) {
        let user01 = new User("ric", "ric@mail.pt", 12345, 0)
        users.push(user01);
        let user02 = new User("Maria", "maria@mail.pt", 54321, 1)
        users.push(user02);
    }




    let frmLogin = document.getElementById("frmLogin")
    // SUBMISSÃO DE AUTENTICAÇÃO
    frmLogin.addEventListener("submit", function (event) {

        event.preventDefault()

        // Obter as referências para as caixas de texto
        let inputLoginEmail = document.getElementById("inputLoginEmail")
        let inputLoginPassword = document.getElementById("inputLoginPassword")

        console.log("Email: " + inputLoginEmail.value)
        console.log("Pass: " + inputLoginPassword.value)

        // Iterar sobre o array e verificar se o utilizador já existe
        let userExists = false
        let userName = ""

        for (var i = 0; i < users.length; i++) {
            console.log(users[i].email)
            if (users[i].email == inputLoginEmail.value && users[i].password == inputLoginPassword.value) {

                userExists = true

                userId = users[i]._id
                userName = users[i]._name
                userType = users[i]._type

            }
        }



        // Se sim, autenticar utilizador
        if (userExists == true) {
            store(userName, inputLoginEmail.value, inputLoginPassword.value);
            alert("Autenticação efetuado com sucesso!!")
            // Fechar a modal
            $('#login-modal').modal('hide')
            if (userType == 0) {
                window.location.replace("admin.html");
            } else
            if (userType == 1) {
                window.location.replace("operador.html");
            } else if (userType == 2) {
                window.location.replace("admin.html");
            }

        } else {
            // Se não, exibir mensagem a indicar a inexistência do utilizador no array
            alert("Dados de autenticação inválidos!!")
        }


    })

    // SUBMISSÃO DE REGISTO
    let frmRegister = document.getElementById("frmRegister")
    frmRegister.addEventListener("submit", function () {
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

        if (userExist == true) {
            strError += "\nEmail já existente!"
        }

        // 3. Criar o utilizador
        if (strError == "") {
            let inputName = document.getElementById("inputName")
            let newUser = new User(inputName.value, inputEmail.value, inputPassword1.value)
            // 4. Adicionar ao array
            users.push(newUser)
            userId = newUser.id
            localStorage.setItem("users", JSON.stringify(users));

            // 5. Alerta de sucesso!
            alert("Registo efetuado com sucesso!!")
            // 6. Fechar a modal
            $('#registoModal').modal('hide')
            $('#login-modal').modal('hide')


        } else {
            alert(strError)
            frmRegister.reset()
            inputName.focus()
        }
        event.preventDefault()
    })

}

// window.onload = function () {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.getItem("users")) {
//             /*VAi buscar todos os users*/
//             users = (JSON.parse(localStorage.getItem(localStorage.key(i))))

//         }
//     }

//     butuser.addEventListener("click", function () {

//         renderTableAddUti()

//     })

//     //Renderizar Tabela, sem a possibilidade de Remover users
//     function renderTableAddUti() {

//         tbluser.innerHTML = ""

//         tbluser.innerHTML = "<table id='tabelaAddUti' style='width: 100 % '>" +
//             "<tr>" +
//             "<th>Id</th>" +
//             "<th>Nome</th>" +
//             "<th>Tipo</th>" +
//             "<th>Email</th>" +
//             "<th>Password</th>" +
//             "<th>Actions</th>" +
//             "</tr>" +
//             "</table>"

//         let strHTML = ""

//         for (var i = 0; i < users.length; i++) {

//             strHTML += "<tr>" +
//                 "<td>" + users[i]._id + "</td>" +
//                 "<td>" + users[i]._nome + "</td>" +
//                 "<td>" + users[i]._tipo + "</td>" +
//                 "<td>" + users[i]._email + "</td>" +
//                 "<td>" + users[i]._pass + "</td>" +
//                 "<td>" +
//                 "<a id='" + users[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
//                 "</td>" +
//                 "</tr>"

//         }

//         tbluser.innerHTML += strHTML

//     }

//     //Adicionar utilizador
//     formuser.addEventListener("submit", function () {

//         let strError = ""
//         let tipoUti = ""

//         //Itera sobre o array e verifica se já existe o email
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].email == femail.value) {
//                 strError += "Email já existente"
//             }
//         }

//         if (strError == "") {

//             let newUtilizador = new Utilizador(fnome.value, tipoUti, femail.value, fpassword.value)
//             users.push(newUtilizador)


//             localStorage.removeItem("users")

//             localStorage.setItem("users", JSON.stringify(users))


//             console.log(users)

//             renderTableAddUti()

//             event.preventDefault()

//         } else {

//             alert(strError)

//             renderTableAddUti()

//             event.preventDefault()

//         }


//     })

//     function renderTableRemUti() {

//         tblRemUti.innerHTML = ""

//         tblRemUti.innerHTML = "<table id='tabelaRemUti' style='width: 100 % '>" +
//             "<tr>" +
//             "<th>Id</th>" +
//             "<th>Nome</th>" +
//             "<th>Tipo</th>" +
//             "<th>Email</th>" +
//             "<th>Password</th>" +
//             "<th>Editar</th>" +
//             "</tr>" +
//             "</table>"

//         let strHTML = ""

//         for (var i = 0; i < users.length; i++) {

//             strHTML += "<tr>" +
//                 "<td>" + users[i]._id + "</td>" +
//                 "<td>" + users[i]._nome + "</td>" +
//                 "<td>" + users[i]._tipo + "</td>" +
//                 "<td>" + users[i]._email + "</td>" +
//                 "<td>" + users[i]._pass + "</td>" +
//                 "<td><button type='button' class='remove' id=" + users[i]._id + ">-</button>"
//             "</tr>"

//         }

//         tblRemUti.innerHTML += strHTML


//         let btnRemove = document.getElementsByClassName("remove")
//         // Para cada botão, adicionar um listener para escutar pelo evento clique
//         for (let i = 0; i < btnRemove.length; i++) {
//             btnRemove[i].addEventListener("click", function () {

//                 let rowId = btnRemove[i].getAttribute("id")
//                 removeUser(rowId)

//                 renderTableRemUti()
//             })
//         }

//     }

// }