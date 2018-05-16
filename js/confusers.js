window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem("utilizadores")) {
            /*VAi buscar todos os utilizadores*/
            utilizadores = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }
    }

    //////////////////////////////
    //////////////////////////////
    //       UTILIZADORES
    //////////////////////////////
    //////////////////////////////

    butuser.addEventListener("click", function () {

        renderTableAddUti()

    })

    //Renderizar Tabela, sem a possibilidade de Remover utilizadores
    function renderTableAddUti() {

        tbluser.innerHTML = ""

        tbluser.innerHTML = "<table id='tabelaAddUti' style='width: 100 % '>" +
            "<tr>" +
            "<th>Id</th>" +
            "<th>Nome</th>" +
            "<th>Tipo</th>" +
            "<th>Email</th>" +
            "<th>Password</th>" +
            "<th>Actions</th>" +
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" +
                "<a id='" + utilizadores[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
                "</tr>"

        }

        tbluser.innerHTML += strHTML

    }

    //Adicionar utilizador
    formuser.addEventListener("submit", function () {

        let strError = ""
        let tipoUti = ""

        //Itera sobre o array e verifica se já existe o email
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == femail.value) {
                strError += "Email já existente"
            }
        }

        if (strError == "") {

            let newUtilizador = new Utilizador(fnome.value, tipoUti, femail.value, fpassword.value)
            utilizadores.push(newUtilizador)


            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))


            console.log(utilizadores)

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

        tblRemUti.innerHTML = "<table id='tabelaRemUti' style='width: 100 % '>" +
            "<tr>" +
            "<th>Id</th>" +
            "<th>Nome</th>" +
            "<th>Tipo</th>" +
            "<th>Email</th>" +
            "<th>Password</th>" +
            "<th>Editar</th>" +
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td><button type='button' class='remove' id=" + utilizadores[i]._id + ">-</button>"
            "</tr>"

        }

        tblRemUti.innerHTML += strHTML


        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {

                let rowId = btnRemove[i].getAttribute("id")
                removeUser(rowId)

                renderTableRemUti()
            })
        }

    }

}