window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem("users")) {
            /*VAi buscar todos os users*/
            users = (JSON.parse(localStorage.getItem(localStorage.key(i))))
        }
    }

    butuser.addEventListener("click", function () {

        renderTableAddUti()

    })

    //Renderizar Tabela, sem a possibilidade de Remover users
    function renderTableAddUti() {
        tbluser.innerHTML = ""
        let strHTML = `<table id='tabelaAddUti' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
        </tr>`

        for (var i = 0; i < users.length; i++) {

            strHTML += `<tr><td>${users[i]._nome}</td>
                <td>${users[i]._tipo}</td>
                <td>${users[i]._email}</td>
                <td>${users[i]._pass}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${users[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`
        }
        strHTML += '</table>'
        tbluser.innerHTML += strHTML
    }

    //Adicionar utilizador
    formuser.addEventListener("submit", function () {

        let strError = ""
        let tipoUti = ""

        //Itera sobre o array e verifica se já existe o email
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == femail.value) {
                strError += "Email já existente"
            }
        }

        if (strError == "") {

            let newUtilizador = new Utilizador(fnome.value, tipoUti, femail.value, fpassword.value)
            users.push(newUtilizador)


            localStorage.removeItem("users")

            localStorage.setItem("users", JSON.stringify(users))

            console.log(users)

            renderTableAddUti()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableAddUti()

            event.preventDefault()

        }


    })

    function renderTableRemUti() {

        tblRemUti.innerHTML = ""
        let strHTML = `<table id='tabelaRemUti' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Nome</th>
        <th>Tipo</th>
        <th>Email</th>
        <th>Password</th>
        <th>Actions</th>
        </tr>`

        for (var i = 0; i < users.length; i++) {

            strHTML += `<tr><td>${users[i]._nome}</td>
                <td>${users[i]._tipo}</td>
                <td>${users[i]._email}</td>
                <td>${users[i]._pass}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${users[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`
        }
        strHTML += '</table>'
        tblRemUti.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].getAttribute("id")
                removeUser(rowId)
                renderTableRemUti()
            })
        }
    }
}