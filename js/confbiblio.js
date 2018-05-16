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
            alert(libraries.length)

            for (let i = 0; i < libraries.length; i++) {
                alert(libraries[i]._freguesia)
                alert(libraries[i]._morada)
            }

        }
    }
    console.log(libraries)

    //Formulário Bibilioteca
    let formBiblio = document.getElementById("formbiblio")

    let fbutBiblio = document.getElementById("fbutbiblio")

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

            alert(strError)

            renderTableBiblio()

            event.preventDefault()
        }

    })

    //Render tabela
    function renderTableBiblio() {

        tblBiblio.innerHTML = ""

        tblBiblio.innerHTML = "<table id='tabelaBiblio' style='width: 100 % '>" +
            "<tr>" +
            "<th>Freguesia</th>" +
            "<th>Morada</th>" +
            "<th>Capacidade</th>" +
            "<th>Actions</th>" +  
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < libraries.length; i++) {

            strHTML += "<tr>" +
                "<td>" + libraries[i]._freguesia + "</td>" +
                "<td>" + libraries[i]._morada + "</td>" +
                "<td>" + libraries[i]._capacidade + "</td>" +
                "<td>" +
                "<a id='" + libraries[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
            "</tr>"

        }

        tblBiblio.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
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

    fbutBiblio.addEventListener("click", function () {

        renderTableBiblio()

    })
}