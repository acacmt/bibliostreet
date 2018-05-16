let books = []

class book {

    constructor(titulo, capa, descricao, autores, lancamento, genero, tags, editora, paginas, estado, id) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        if (id == null) {
            this._id = book.getLastId() + 1
        } else {
            this.id = id
        }

        this.titulo = titulo
        this.capa = capa
        this.descricao = descricao
        this.autores = autores
        this.lancamento = lancamento
        this.genero = genero
        this.tags = tags
        this.editora = editora
        this.paginas = paginas
        this.estado = estado

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get titulo() {
        return this._titulo
    }

    set titulo(newTitulo) {
        this._titulo = newTitulo
    }

    get capa() {
        return this._capa
    }

    set capa(newcapa) {
        this._capa = newcapa
    }

    get descricao() {
        return this._descricao
    }

    set descricao(newDescricao) {
        this._descricao = newDescricao
    }

    get autores() {
        return this._autores
    }

    set autores(newAutores) {
        this._autores = newAutores
    }

    set lancamento(newlancamento) {
        this._lancamento = newlancamento
    }

    get genero() {
        return this._genero
    }

    set genero(newGenero) {
        this._genero = newGenero
    }

    get tags() {
        return this._tags
    }

    set tags(newtags) {
        this._tags = newtags
    }

    get editora() {
        return this._editora
    }

    set editora(newEditora) {
        this._editora = newEditora
    }

    get paginas() {
        return this._paginas
    }

    set paginas(newpaginas) {
        this._paginas = newpaginas
    }

    get estado() {
        return this._estado
    }

    set estado(newEstado) {
        this._estado = newEstado
    }

    static getLastId() {
        let lastId = 0
        if (utilizadores.length != 0) {
            lastId = utilizadores[utilizadores.length - 1].id
        }
        return lastId
    }

}

window.onload = function () {

    //Formulário Doar
    let formDoar = document.getElementById("addbook")

    let butdoar = document.getElementById("butdoar")

    let fname = document.getElementById("fname")
    let fcapa = document.getElementById("fcapa")
    let fdescricao = document.getElementById("fdescricao")
    let fautores = document.getElementById("fautores")
    let fdata = document.getElementById("fdata")
    let genero = document.getElementById("genero")
    let dtag = document.getElementById("dtag")
    let feditora = document.getElementById("feditora")
    let fpaginas = document.getElementById("fpaginas")
    let festado = document.getElementById("festado")

    let doar = document.getElementById("doar")
    let divdoar = document.getElementById("divdoar")
    let tbldoar = document.getElementById("tbldoar")

    //////////////////////////////
    //////////////////////////////
    //        LIVROS
    //////////////////////////////
    //////////////////////////////

    
    formDoar.addEventListener("submit", function (event) {

        let strError = ""
        let estadobook = ""

        //Itera sobre o array e verifica se existe o livro
        for (var i = 0; i < books.length; i++) {
            if (books[i]._fname == fname.value) {
                strError += "Esse book já existe"
            }
        }

        if (strError == "") {

            let newbook = new book(fname.value, fcapa.value, fdescricao.value, fautores.value, fdata.value, genero.value, tag.value, feditora.value, fpaginas.value, estadobook)
            books.push(newLiblio)

            
            localStorage.removeItem("books")

            localStorage.setItem("books", JSON.stringify(books))

            renderTablebooks()

            event.preventDefault()

        } else {

            alert(strError)

            renderTablebooks()

            event.preventDefault()
        }

    })


    function renderTablebooks() {

        divdoar.innerHTML = ""

        divdoar.innerHTML = "<table id='tabelabook' style='width: 100 % '>" +
            "<tr>" +
            "<th>Codigo</th>" +
            "<th>Titulo</th>" +
            "<th>Capa</th>" +
            "<th>Descricao</th>" +
            "<th>Autores</th>" +
            "<th>Data Lançamento</th>" +
            "<th>Género</th>" +
            "<th>tags</th>" +
            "<th>Editora</th>" +
            "<th>Nº de Páginas</th>" +
            "<th>Estado</th>" +
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < books.length; i++) {

            let descricao = books[i].fdescricao
            books[i].fdescricao.length = 5
            books[i].fdescricao += "..."

            strHTML += "<tr>" +
                "<td>" + books[i]._id + "</td>" +
                "<td>" + books[i]._fcapa + "</td>" +
                "<td>" + descricao + "</td>" +
                "<td>" + books[i]._fautores + "</td>" +
                "<td>" + books[i]._fdata + "</td>" +
                "<td>" + books[i]._genero + "</td>" +
                "<td>" + books[i]._tag + "</td>" +
                "<td>" + books[i]._feditora + "</td>" +
                "<td>" + books[i]._fpaginas + "</td>" +
                "<td>" + books[i]._estadobook + "</td>" +
                "<td><button type='button' class='remove' id=" + books[i]._id + ">-</button>"
            "<td><button type='button' class='edit' id=" + books[i]._id + ">-</button>"
            "</tr>"

        }

        divdoar.innerHTML += strHTML

        
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removebookById(rowId)

            
                localStorage.removeItem("books")

                localStorage.setItem("books", JSON.stringify(books))

                renderTablebooks()
            })
        }
    }

    function removebookById(id) {

        for (let i = 0; i < books.length; i++) {
            if (books[i]._id == id) {
                books.splice(i, 1)
            }
        }
    }

    butdoar.addEventListener("click", function () {

        doar.style.display = "block"
        tbldoar.style.display = "block"

        butdoar.style.display = "none"

        renderTableBiblio()

    })
}