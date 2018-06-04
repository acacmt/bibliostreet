let libraries = []

class library {

    constructor(freguesia, morada, capacidade) {

        this._id = library.getLastId() + 1
        this.freguesia = freguesia
        this.morada = morada
        this.capacidade = capacidade

    }

    get id() {
        return this._id
    }

    get freguesia() {
        return this._freguesia
    }

    set freguesia(newFreguesia) {
        this._freguesia = newFreguesia
    }

    get morada() {
        return this._morada
    }

    set morada(newMorada) {
        this._morada = newMorada
    }

    get capacidade() {
        return this._capacidade
    }

    set capacidade(newCapacidade) {
        this._capacidade = newCapacidade
    }

    static getLastId() {
        let lastId = 0
        if (libraries.length != 0) {
            lastId = libraries[libraries.length - 1].id
        }
        return lastId
    }

}

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("libraries")) {


            libraries = (JSON.parse(localStorage.getItem("libraries")))
            //alert(libraries.length)

            for (let i = 0; i < libraries.length; i++) {
                //alert(libraries[i]._freguesia)
                //alert(libraries[i]._morada)
            }

        }
    }
    console.log(libraries)

    //Formulário Bibilioteca
    let formBiblio = document.getElementById("formbiblio")

    let fbutBiblio = document.getElementById("fbutBiblio")

    let fFreguesia = document.getElementById("ffreguesia")
    let fMorada = document.getElementById("fmorada")
    let fCapacidade = document.getElementById("fcap")

    let divInserirBiblio = document.getElementById("libraries")
    let divBiblio = document.getElementById("divBiblio")
    let tblBiblio = document.getElementById("tblbiblio")

    //////////////////////////////
    //////////////////////////////
    //       BIBLIOTECAS
    //////////////////////////////
    //////////////////////////////

    fbutBiblio.addEventListener("click", function () {

        renderTableBiblio()

    })

    //Adicionar um nova biblioteca
    formBiblio.addEventListener("submit", function (event) {

        let strError = ""

        //Itera sobre o array e verifica se existe alguma biblioteca
        for (var i = 0; i < libraries.length; i++) {
            if (libraries[i].morada == fMorada.value) {
                strError += "Já existe uma biblioteca com a morada selecionada!"
            }
        }

        if (strError == "") {

            let newBiblio = new library(fFreguesia.value, fMorada.value, fCapacidade.value)
            libraries.push(newBiblio)

            localStorage.removeItem("libraries")

            localStorage.setItem("libraries", JSON.stringify(libraries))

            renderTableBiblio()

            event.preventDefault()

        } else {



            renderTableBiblio()

            event.preventDefault()
        }

    })

    //Render tabela
    function renderTableBiblio() {

        tblBiblio.innerHTML = ""

        let strHTML = `<table id='tabelatag' style='width: 100%; border: 1px solid'>
        <tr>
        <th>Freguesia</th>
        <th>Morada</th>
        <th>Capacidade</th>
        <th>Actions</th>
        </tr>`



        for (var i = 0; i < libraries.length; i++) {

            strHTML += `<tr><td>${libraries[i]._freguesia}</td>
                <td>${libraries[i]._morada}</td>
                <td>${libraries[i]._capacidade}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${tags[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
                </td> 
            </tr>`

        }
        strHTML += '</table>'

        tblBiblio.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                let rowId = btnRemove[i].getAttribute("id")
                removebiblioById(rowId)

                localStorage.removeItem("libraries")

                localStorage.setItem("libraries", JSON.stringify(libraries))

                renderTableBiblio()
            })
        }
    }

    function removebiblioById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < libraries.length; i++) {
            if (libraries[i]._id == id) {
                libraries.splice(i, 1)
            }
        }
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