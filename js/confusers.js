window.onload = function () {

    if (localStorage.getItem("users")) {

        users = JSON.parse(localStorage.getItem("users"))

    }

    //Formulário Users
    let formuser = document.getElementById("formuser")

    let fbutuser = document.getElementById("fbutuser")

    let fnome = document.getElementById("fnome")
    //let festado = document.getElementById("festado")
    let femail = document.getElementById("femail")
    let fpassword = document.getElementById("fpassword")
    let fmulta = document.getElementById("fmulta")

    let tblUser = document.getElementById("divuser")

    console.log("Nome user: " + fnome)
    console.log("Email: " + femail)
    console.log(fpassword)
    renderTableUser()

    fbutuser.addEventListener("click", function () {

        renderTableUser()
    })

    //Adicionar utilizador
    formuser.addEventListener("submit", function () {

        let strError = ""

        //Itera sobre o array e verifica se já existe o email
        for (var i = 0; i < users.length; i++) {
            if (users[i].email == femail.value) {
                strError += "Este email já existe!"
            }
        }

        if (strError == "") {

            let newUser = new user(fnome.value, femail.value, fpassword.value, fmulta.value)
            users.push(newUser)
            localStorage.removeItem("users")
            localStorage.setItem("users", JSON.stringify(users))
            console.log(users)

            renderTableUser()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableUser()

            event.preventDefault()

        }


    })

    // Render Tabela
    function renderTableUser() {

        tblUser.innerHTML = ""

        let strHTML = `<table id='tblUser' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Nome</th>

        <th>Email</th>
        <th>Password</th>
        <th>Multa</th>
        <th>Actions</th>
        </tr>`

        for (let i = 0; i < users.length; i++) {

            strHTML += `<tr><td>${users[i]._name}</td>
                
                <td>${users[i]._email}</td>
                <td>${users[i]._password}</td>
                <td>${users[i]._multa}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${users[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`
        }
        strHTML += '</table>'

        tblUser.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].firstChild.getAttribute("id")

                removecatById(rowId)
                renderTableUser()
            })
        }

    }

    function removecatById(id) {
        for (let i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
                users.splice(i, 1)
            }
        }

        localStorage.removeItem("users")

        localStorage.setItem("users", JSON.stringify(users))
    }

    // LOGOUT
    optLogout.addEventListener("click", function () {
        userId = 0
        optLogout.style.display = 'none'
        erase();

        // similar behavior as an HTTP redirect
        window.location.replace("index.html");

    })

    function erase() {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('pw1');
    }
}