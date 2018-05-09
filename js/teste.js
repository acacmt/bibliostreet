let bibliotecas = []
let categorias = []
let tags = []
let utilizadores = []
let livros = []
let requisicoes = []
let markers = []

class Biblioteca {

    constructor(freguesia, morada, gps, capacidade) {

        this._id = Biblioteca.getLastId() + 1
        this.freguesia = freguesia
        this.morada = morada
        this.gps = gps
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

    get gps() {
        return this._gps
    }

    set gps(newGps) {
        this._gps = newGps
    }

    get capacidade() {
        return this._capacidade
    }

    set capacidade(newCapacidade) {
        this._capacidade = newCapacidade
    }

    static getLastId() {
        let lastId = 0
        if (bibliotecas.length != 0) {
            lastId = bibliotecas[bibliotecas.length - 1].id
        }
        return lastId
    }

}

class Categoria {

    constructor(categoriaNome) {

        this._id = Categoria.getLastId() + 1
        this.categoriaNome = categoriaNome

    }

    get id() {
        return this._id
    }

    get categoriaNome() {
        return this._categoriaNome
    }

    set categoriaNome(newCategoriaNome) {
        this._categoriaNome = newCategoriaNome
    }

    static getLastId() {
        let lastId = 0
        if (categorias.length != 0) {
            lastId = categorias[categorias.length - 1].id
        }
        return lastId
    }

}

class Tag {

    constructor(tagNome) {

        this._id = Tag.getLastId() + 1
        this.tagNome = tagNome

    }

    get id() {
        return this._id
    }

    get tagNome() {
        return this._tagNome
    }

    set tagNome(newTagNome) {
        this._tagNome = newTagNome
    }

    static getLastId() {
        let lastId = 0
        if (tags.length != 0) {
            lastId = tags[tags.length - 1].id
        }
        return lastId
    }

}

class Utilizador {

    constructor(nome, tipo, email, pass, multa, foto, id) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        if (id == null) {
            this._id = Utilizador.getLastId() + 1
        }
        else {
            this.id = id
        }

        this.nome = nome
        this.tipo = tipo
        this.email = email
        this.pass = pass
        this.multa = multa
        this.foto = foto

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get nome() {
        return this._nome
    }

    set nome(newNome) {
        this._nome = newNome
    }

    get email() {
        return this._email
    }

    set email(newEmail) {
        this._email = newEmail
    }

    get tipo() {
        return this._tipo
    }

    set tipo(newTipo) {
        this._tipo = newTipo
    }

    get pass() {
        return this._pass
    }

    set pass(newPass) {
        this._pass = newPass
    }

    get multa() {
        return this._multa
    }

    set multa(newMulta) {
        this._multa = newMulta
    }

    get foto() {
        return this._foto
    }

    set foto(newFoto) {
        this._foto = newFoto
    }

    static getLastId() {
        let lastId = 0
        if (utilizadores.length != 0) {
            lastId = utilizadores[utilizadores.length - 1].id
        }
        return lastId
    }

}

class Livro {

    constructor(titulo, capaImagem, descricao, autores, dataLancamento, genero, tags, editora, nPaginas, estado, id) {

        /*Verificar se mando o Id(na parte do edit) ou se tou a criar um novo*/
        if (id == null) {
            this._id = Livro.getLastId() + 1
        }
        else {
            this.id = id
        }

        this.titulo = titulo
        this.capaImagem = capaImagem
        this.descricao = descricao
        this.autores = autores
        this.dataLancamento = dataLancamento
        this.genero = genero
        this.tags = tags
        this.editora = editora
        this.nPaginas = nPaginas
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

    get capaImagem() {
        return this._capaImagem
    }

    set capaImagem(newCapaImagem) {
        this._capaImagem = newCapaImagem
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

    get multa() {
        return this._multa
    }

    set dataLancamento(newDataLancamento) {
        this._dataLancamento = newDataLancamento
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

    set tags(newTags) {
        this._tags = newTags
    }

    get editora() {
        return this._editora
    }

    set editora(newEditora) {
        this._editora = newEditora
    }

    get nPaginas() {
        return this._nPaginas
    }

    set nPaginas(newNPaginas) {
        this._nPaginas = newNPaginas
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

class Requisicao {

    constructor(diasRequi, valorMulta, limiMulta) {

        if (id == null) {
            this._id = Requisicao.getLastId() + 1
        }
        else {
            this.id = id
        }

        this.diasRequi = diasRequi
        this.valorMulta = valorMulta
        this.limiMulta = limiMulta
        this.tempoSemPagar = Requisicao.tempoSemPagar()

    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }

    get diasRequi() {
        return this._diasRequi
    }

    set diasRequi(newDiasRequi) {
        this._diasRequi = newDiasRequi
    }

    get valorMulta() {
        return this._valorMulta
    }

    set valorMulta(newValorMulta) {
        this._valorMulta = newValorMulta
    }

    get limiMulta() {
        return this._limiMulta
    }

    set limiMulta(newLimiMulta) {
        this._limiMulta = newLimiMulta
    }

    static getLastId() {
        let lastId = 0
        if (categorias.length != 0) {
            lastId = categorias[categorias.length - 1].id
        }
        return lastId
    }

    static tempoSemPagar() {

        /*VEr melhor isto*/
        let millisec = Math.abs(dataAtual() - limiMulta)

        var seconds = (millisec / 1000).toFixed(1);

        var minutes = (millisec / (1000 * 60)).toFixed(1);

        var hours = (millisec / (1000 * 60 * 60)).toFixed(1);

        var days = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);

        if (seconds < 60) {
            return seconds + " Sec";
        } else if (minutes < 60) {
            return minutes + " Min";
        } else if (hours < 24) {
            return hours + " Hrs";
        } else {
            return days + " Days"
        }

    }

}


window.onload = function () {

    /*Iniciar Mapa*/
    initialize()

    /*Ir buscar todos os array ao LocalStorage*/
    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("utilizadores")) {
            /*VAi buscar todos os utilizadores*/
            utilizadores = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }

        if (localStorage.getItem("bibliotecas")) {

            
            bibliotecas = (JSON.parse(localStorage.getItem("bibliotecas")))
            alert(bibliotecas.length)

            for (let i=0; i<bibliotecas.length;i++) {
                alert(bibliotecas[i]._freguesia)
                alert(bibliotecas[i]._morada)
            }

        }

        if (localStorage.getItem("categorias")) {

            categorias = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }


        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }
        /*
        if(localStorage.getItem("requisicoes")) {
            requisicoes.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
        }*/

    }

    console.log(bibliotecas)

    /*forms*/
    let formAddBibliot = document.getElementById("addBiblio")
    let formAddCat = document.getElementById("addCat")
    let formAddTag = document.getElementById("addTag")
    let formAddUti = document.getElementById("addUtilizador")
    let formEditUti = document.getElementById("editUtilizador")
    let formAddLivro = document.getElementById("addLivro")
    let formAddRequisicao = document.getElementById("addRequisicao")

    /*Butoes*/
    let butBiblio = document.getElementById("butBiblio")
    let butRegressar = document.getElementById("butRegressar")
    let butCat = document.getElementById("butCategorias")
    let butTag = document.getElementById("butTags")
    let butMenuUti = document.getElementById("butUtili")
    let butAddUti = document.getElementById("addUti")
    let butEditUti = document.getElementById("editUti")
    let butRemUti = document.getElementById("remUti")
    let butRegressarUti = document.getElementById("regressarMenuUti")
    let butRegressarAddUti = document.getElementById("regressarAddUti")
    let butRegressarEditUti = document.getElementById("regressarEditUti")
    let butRegressarRemUti = document.getElementById("regressarRemUti")
    let butGuardarEdicao = document.getElementById("guardarEditUti")
    let butLivros = document.getElementById("butLivros")
    let butRequisicao = document.getElementById("butRequisicoes")

    /*Butoes Opcoes(categorias e tags)*/
    let opcaoCategorias = document.getElementById("generoLivro")

    /*Campos preenchimento*/
    let novaFreguesiaBiblio = document.getElementById("freguesiaBiblioteca")
    let novaMoradaBiblio = document.getElementById("moradaBiblioteca")
    let novaCoordBiblio = document.getElementById("coordBiblioteca")
    let novaCapacidadeBiblio = document.getElementById("capacidadeBiblioteca")

    let novaCategoria = document.getElementById("novaCategoria")

    let novaTag = document.getElementById("novaTag")

    let novoUtiNome = document.getElementById("utiNome")
    let novoUtiEmail = document.getElementById("utiEmail")
    let novoUtiPass = document.getElementById("utiPassword")
    let novoUtiMulta = document.getElementById("utiMulta")
    let novoUtiFoto = document.getElementById("utiFoto")
    let checkAdmin = document.getElementById("utiTipoAdmin")
    let checkUser = document.getElementById("utiTipoUser")
    let checkOper = document.getElementById("utiTipoOper")

    let novoUtiNome1 = document.getElementById("utiNome1")
    let novoUtiEmail1 = document.getElementById("utiEmail1")
    let novoUtiPass1 = document.getElementById("utiPassword1")
    let novoUtiMulta1 = document.getElementById("utiMulta1")
    let novoUtiFoto1 = document.getElementById("utiFoto1")
    let checkAdmin1 = document.getElementById("utiTipoAdmin1")
    let checkUser1 = document.getElementById("utiTipoUser1")
    let checkOper1 = document.getElementById("utiTipoOper1")

    let tituloLivro = document.getElementById("tituloLivro")
    let capaLivro = document.getElementById("capaLivro")
    let descLivro = document.getElementById("descLivro")
    let autoresLivro = document.getElementById("autoresLivro")
    let dataLivro = document.getElementById("dataLivro")
    let generoLivro = document.getElementById("generoLivro")
    let tagsLivro = document.getElementById("tagsLivro")
    let editoraLivro = document.getElementById("editoraLivro")
    let nPagLivro = document.getElementById("nPagLivro")
    let estadoBom = document.getElementById("estadoBom")
    let estadoAceitavel = document.getElementById("estadoAceitavel")
    let estadoFraco = document.getElementById("estadoFraco")

    let diasRequi = document.getElementById("diasRequi")
    let valorMulta = document.getElementById("valorMulta")
    let limiteMulta = document.getElementById("limiteMulta")
    let tempoPas = document.getElementById("tempoPas")

    /*Divs e tabelas*/
    let divInserirBiblio = document.getElementById("bibliotecas")
    let divTblBiblio = document.getElementById("tblBiblio")
    let tblBiblioteca = document.getElementById("tabelaBiblio")


    let divInserirCat = document.getElementById("categorias")
    let divTblCat = document.getElementById("tblCat")
    let tblCategorias = document.getElementById("tabelaCat")


    let divInserirTag = document.getElementById("tags")
    let divTblTag = document.getElementById("tblTag")
    let tblTags = document.getElementById("tabelaTag")

    let divUti = document.getElementById("utilizadores")
    let divMenuUti = document.getElementById("menuUtilizadores")
    let divTblAddUti = document.getElementById("tblAddUti")
    let divTblRemUti = document.getElementById("tblRemUti")
    let divTblEditUti = document.getElementById("tblEditUti")
    let tblAddUti = document.getElementById("tabelaAddUti")
    let tblRemUti = document.getElementById("tabelaRemUti")
    let tblEditUti = document.getElementById("tabelaEditUti")
    let divFormAddUti = document.getElementById("formAddUti")
    let divFormEditUti = document.getElementById("formEditUti")
    let divMostrarRegressarRemBut = document.getElementById("mostrarRegButRem")

    let divInserirLivro = document.getElementById("livros")
    let tblLivros = document.getElementById("tabelaLivro")
    let divTblLivro = document.getElementById("tblLivro")

    let divRequisicoes = document.getElementById("requisicoes")
    let tblRequisicoes = document.getElementById("tabelaRequisicao")
    let divTblRequisicao = document.getElementById("tblRequisicao")

    /*Se houver alguma categoria, adicionar ao select*/
    adicionarCatNoSelect()


    /*Ir buscar a data atual(preciso para ver o tempo de multa*/
    function dataAtual() {

        let hoje = new Date()
        var dd = hoje.getDate()
        var mm = hoje.getMonth() + 1 //January is 0!
        var yyyy = hoje.getFullYear()

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        hoje = dd + '/' + mm + '/' + yyyy

        return (hoje)

    }

    /*#########################################BIBLIOTECAS########################################*/

    /*Adicionar Nova Bilioteca*/
    formAddBibliot.addEventListener("submit", function (event) {

        let strError = ""

        /*Verificar se já existe essa Categoria*/
        for (var i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i].morada == novaMoradaBiblio.value) {
                strError += "Biblioteca com morada já existente"
            }
        }

        if (strError == "") {

            let newBiblio = new Biblioteca(novaFreguesiaBiblio.value, novaMoradaBiblio.value, novaCoordBiblio.value, novaCapacidadeBiblio.value)
            bibliotecas.push(newBiblio)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("bibliotecas")

            localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))

            renderTableBiblio()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableBiblio()

            event.preventDefault()
        }

    })

    /*Renderizar Tabela*/
    function renderTableBiblio() {

        tblBiblioteca.innerHTML = ""

        tblBiblioteca.innerHTML = "<table id='tabelaBiblio' style='width: 100 % '>"
            + "<tr>"
            + "<th>Freguesia</th>"
            + "<th>Morada</th>"
            + "<th>GPS</th>"
            + "<th>Capacidade</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < bibliotecas.length; i++) {

            strHTML += "<tr>" +
                "<td>" + bibliotecas[i]._freguesia + "</td>" +
                "<td>" + bibliotecas[i]._morada + "</td>" +
                "<td>" + bibliotecas[i]._gps + "</td>" +
                "<td>" + bibliotecas[i]._capacidade + "</td>" +
                "<td><button type='button' class='remove' id=" + bibliotecas[i]._id + ">-</button>"
            "</tr>"

        }

        tblBiblioteca.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowBiblioById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("bibliotecas")

                localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))

                renderTableBiblio()
            })
        }
    }

    function removeRowBiblioById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < bibliotecas.length; i++) {
            if (bibliotecas[i]._id == id) {
                bibliotecas.splice(i, 1)
            }
        }
    }

    /*Abrir parametros biblioteca*/
    butBiblio.addEventListener("click", function () {

        divInserirBiblio.style.display = "block"
        divTblBiblio.style.display = "block"

        butBiblio.style.display = "none"
        butCat.style.display = "none"
        butTag.style.display = "none"
        butRegressar.style.display = "block"
        butMenuUti.style.display = "none"
        butRequisicao.style.display = "none"
        butLivros.style.display = "none"

        renderTableBiblio()

    })

    /*Regressar*/
    butRegressar.addEventListener("click", function () {

        divInserirBiblio.style.display = "none"
        divTblBiblio.style.display = "none"
        divInserirCat.style.display = "none"
        divTblCat.style.display = "none"
        divTblTag.style.display = "none"
        divInserirTag.style.display = "none"
        divTblLivro.style.display = "none"
        divInserirLivro.style.display = "none"
        divTblRequisicao.style.display = "none"
        divRequisicoes.style.display = "none"
        butMenuUti.style.display = "block"

        butBiblio.style.display = "block"
        butCat.style.display = "block"
        butTag.style.display = "block"
        butRegressar.style.display = "none"
        butRequisicao.style.display = "block"
        butLivros.style.display = "block"

    })

    /*##########################################CATEGORIAS########################################*/

    butCat.addEventListener("click", function () {

        divInserirCat.style.display = "block"
        divTblCat.style.display = "block"

        butBiblio.style.display = "none"
        butCat.style.display = "none"
        butTag.style.display = "none"
        butRegressar.style.display = "block"
        butMenuUti.style.display = "none"
        butRequisicao.style.display = "none"
        butLivros.style.display = "none"

        renderTableCat()

    })

    /*Adicionar Categoria*/
    formAddCat.addEventListener("submit", function () {

        let strError = ""

        /*Verificar se já existe essa Categoria*/
        for (var i = 0; i < categorias.length; i++) {
            if (categorias[i].categoriaNome == novaCategoria.value) {
                strError += "Categoria já existente"
            }
        }

        if (strError == "") {

            let newCat = new Categoria(novaCategoria.value)
            categorias.push(newCat)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("categorias")

            localStorage.setItem("categorias", JSON.stringify(categorias))

            renderTableCat()

            /*Adiciona no select(opcoes)*/
            adicionarCatNoSelect()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableCat()

            event.preventDefault()
        }


    })

    function adicionarCatNoSelect() {

        opcaoCategorias.innerHTML = ""
        /*Mter todos os generos e tags nas opceos*/
        for (let i = 0; i < categorias.length; i++) {

            opcaoCategorias.innerHTML += "<option value=" + categorias[i]._categoriaNome + ">" + categorias[i]._categoriaNome + "</option>"

        }

    }

    /*Renderizar Tabela*/
    function renderTableCat() {

        tblCategorias.innerHTML = ""

        tblCategorias.innerHTML = "<table id='tabelaCat' style='width: 100 % '>"
            + "<tr>"
            + "<th>Categorias</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < categorias.length; i++) {

            strHTML += "<tr>" +
                "<td>" + categorias[i]._categoriaNome + "</td>" +
                "<td><button type='button' class='remove' id=" + categorias[i]._id + ">-</button>"
            "</tr>"

        }

        tblCategorias.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")

                removeRowCatById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("categorias")

                localStorage.setItem("categorias", JSON.stringify(categorias))

                renderTableCat()
            })
        }
    }

    function removeRowCatById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < categorias.length; i++) {
            if (categorias[i]._id == id) {
                categorias.splice(i, 1)
            }
        }
    }

    /*##########################################TAGS########################################*/

    butTag.addEventListener("click", function () {

        divInserirTag.style.display = "block"
        divTblTag.style.display = "block"

        butBiblio.style.display = "none"
        butCat.style.display = "none"
        butTag.style.display = "none"
        butRegressar.style.display = "block"
        butMenuUti.style.display = "none"
        butRequisicao.style.display = "none"
        butLivros.style.display = "none"

        renderTableTag()

    })

    /*Adicionar Categoria*/
    formAddTag.addEventListener("submit", function () {

        let strError = ""

        /*Verificar se já existe essa Categoria*/
        for (var i = 0; i < tags.length; i++) {
            if (tags[i]._tagNome == novaTag.value) {
                strError += "Tag já existente"
            }
        }

        if (strError == "") {

            let newTag = new Tag(novaTag.value)
            tags.push(newTag)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("tags")

            localStorage.setItem("tags", JSON.stringify(tags))


            renderTableTag()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableTag()

            event.preventDefault()
        }


    })

    /*Renderizar Tabela*/
    function renderTableTag() {

        tblTags.innerHTML = ""

        tblTags.innerHTML = "<table id='tabelaTag' style='width: 100 % '>"
            + "<tr>"
            + "<th>Tags</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < tags.length; i++) {

            strHTML += "<tr>" +
                "<td>" + tags[i]._tagNome + "</td>" +
                "<td><button type='button' class='remove' id=" + tags[i]._id + ">-</button>"
            "</tr>"

        }

        tblTags.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowTagById(rowId)
                renderTableTag()
            })
        }
    }

    function removeRowTagById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < tags.length; i++) {
            if (tags[i]._id == id) {
                tags.splice(i, 1)
            }
        }
        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("tags")

        localStorage.setItem("tags", JSON.stringify(tags))
    }

    /*#########################################UTILIZADORES########################################*/

    /*Abrir Menu Utilizadores*/
    butMenuUti.addEventListener("click", function () {

        butBiblio.style.display = "none"
        butCat.style.display = "none"
        butTag.style.display = "none"
        butMenuUti.style.display = "none"
        butRequisicao.style.display = "none"
        butLivros.style.display = "none"

        divUti.style.display = "block"

    })

    butRegressarUti.addEventListener("click", function () {

        divUti.style.display = "none"

        butBiblio.style.display = "block"
        butCat.style.display = "block"
        butTag.style.display = "block"
        butMenuUti.style.display = "block"
        butRequisicao.style.display = "block"
        butLivros.style.display = "block"

    })

    /*Butao Adicionar Utilizadores*/
    butAddUti.addEventListener("click", function () {

        divMenuUti.style.display = "none"
        divTblAddUti.style.display = "block"
        tblAddUti.style.display = "block"
        divFormAddUti.style.display = "block"

        renderTableAddUti()

    })

    /*Renderizar Tabela, sem a possibilidade de Remover utilizadores*/
    function renderTableAddUti() {

        tblAddUti.innerHTML = ""

        tblAddUti.innerHTML = "<table id='tabelaAddUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Foto</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "</tr>"

        }

        tblAddUti.innerHTML += strHTML

    }

    /*Adicionar Utilizador*/
    formAddUti.addEventListener("submit", function () {

        let strError = ""
        let checked = 0
        let tipoUti = ""

        /*Verificar se já existe essa Email*/
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == novoUtiEmail.value) {
                strError += "Email já existente"
            }
        }

        /*Verificar se estao checkadas as combo box, ficando com o valor do tipo de utilisador*/
        if (checkAdmin.checked) {
            checked++
            tipoUti = checkAdmin.value
        }
        if (checkUser.checked) {
            checked++
            tipoUti = checkUser.value
        }
        if (checkOper.checked) {
            checked++
            tipoUti = checkOper.value
        }

        if (checked != 1) {
            strError += "\n Tem de escolher um e só um tipo de utilizador"
        }

        if (strError == "") {

            let newUtilizador = new Utilizador(novoUtiNome.value, tipoUti, novoUtiEmail.value, novoUtiPass.value, novoUtiMulta.value, novoUtiFoto.value)
            utilizadores.push(newUtilizador)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("utilizadores")

            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))


            console.log(utilizadores)

            renderTableAddUti()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableAddUti()

            event.preventDefault()

        }


    })

    /*Butao regressar do form adicionar utilizadores*/
    butRegressarAddUti.addEventListener("click", function () {

        divMenuUti.style.display = "block"
        divTblAddUti.style.display = "none"
        tblAddUti.style.display = "none"
        divFormAddUti.style.display = "none"

    })

    /*Butao Editar Utilizadores*/
    butEditUti.addEventListener("click", function () {



        divMenuUti.style.display = "none"
        divTblEditUti.style.display = "block"
        tblEditUti.style.display = "block"
        divFormEditUti.style.display = "block"

        renderTableEditUti()

    })

    function renderTableEditUti() {

        tblEditUti.innerHTML = ""

        tblEditUti.innerHTML = "<table id='tabelaEditUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Foto</th>"
            + "<th>Editar</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "<td><button type='button' class='edit' id=" + utilizadores[i]._id + ">+</button>"
            "</tr>"

        }

        tblEditUti.innerHTML += strHTML

        /*Botoes Editar*/
        let btnEdit = document.getElementsByClassName("edit")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", function () {

                let rowId = btnEdit[i].getAttribute("id")
                /*Funcao para editar o utilizador*/
                editRowUtiById(rowId)
                /*funcao para remover o utilizador, onde depois é adicionado (com o mesmo id)*/
                removeRowUtiById(rowId)
                renderTableEditUti()
            })
        }

    }

    let novoId = 0
    let tipoUti = 0

    function editRowUtiById(id) {

        console.log("ID: " + id)
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == id) {

                /*guardar o id para o utilizador ficar com o msm id*/
                novoId = utilizadores[i]._id

                let checked = 0
                let strError = ""


                if (checkAdmin.checked) {
                    checked++
                    tipoUti = checkAdmin.value
                }
                if (checkUser.checked) {
                    checked++
                    tipoUti = checkUser.value
                }
                if (checkOper.checked) {
                    checked++
                    tipoUti = checkOper.value
                }

                if (checked != 1) {
                    strError += "\n Tem de escolher um e só um tipo de utilizador"
                }

                if (strError == "") {

                    novoUtiNome1.value = utilizadores[i]._nome
                    novoUtiEmail1.value = utilizadores[i]._email
                    novoUtiPass1.value = utilizadores[i]._pass
                    novoUtiMulta1.value = utilizadores[i]._multa
                    novoUtiFoto1.value = utilizadores[i]._foto

                }
                else {

                    alert(strError)

                    event.preventDefault()

                }
            }
        }
    }

    /*adicionar o utilizador editado ao array e à tabela*/
    function addEditedRow() {

        let editedUtilizador = new Utilizador(novoUtiNome1.value, tipoUti, novoUtiEmail1.value, novoUtiPass1.value, novoUtiMulta1.value, novoUtiFoto1.value, novoId)
        utilizadores.push(editedUtilizador)

        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("utilizadores")

        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))


    }

    function removeRowUtiById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i]._id == id) {
                utilizadores.splice(i, 1)
            }
        }

        /*Eliminar todo o conteudo do item Biblioteca*/
        localStorage.removeItem("utilizadores")

        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    }

    /*butao para guradar a edicao, adicionando o utilizador ao arrya*/
    butGuardarEdicao.addEventListener("click", function () {

        addEditedRow()
        renderTableEditUti()

    })

    butRegressarEditUti.addEventListener("click", function () {

        divMenuUti.style.display = "block"
        divTblEditUti.style.display = "none"
        tblEditUti.style.display = "none"
        divFormEditUti.style.display = "none"

    })

    /*Butao Remover Utilizadores*/
    butRemUti.addEventListener("click", function () {

        divMenuUti.style.display = "none"
        divTblRemUti.style.display = "block"
        tblRemUti.style.display = "block"
        divMostrarRegressarRemBut.style.display = "block"

        renderTableRemUti()

        event.preventDefault()

    })

    function renderTableRemUti() {

        tblRemUti.innerHTML = ""

        tblRemUti.innerHTML = "<table id='tabelaRemUti' style='width: 100 % '>"
            + "<tr>"
            + "<th>Id</th>"
            + "<th>Nome</th>"
            + "<th>Tipo</th>"
            + "<th>Email</th>"
            + "<th>Password</th>"
            + "<th>Multa</th>"
            + "<th>Foto</th>"
            + "<th>Editar</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < utilizadores.length; i++) {

            strHTML += "<tr>" +
                "<td>" + utilizadores[i]._id + "</td>" +
                "<td>" + utilizadores[i]._nome + "</td>" +
                "<td>" + utilizadores[i]._tipo + "</td>" +
                "<td>" + utilizadores[i]._email + "</td>" +
                "<td>" + utilizadores[i]._pass + "</td>" +
                "<td>" + utilizadores[i]._multa + "</td>" +
                "<td>" + utilizadores[i]._foto + "</td>" +
                "<td><button type='button' class='remove' id=" + utilizadores[i]._id + ">-</button>"
            "</tr>"

        }

        tblRemUti.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {

                let rowId = btnRemove[i].getAttribute("id")
                removeRowUtiById(rowId)

                renderTableRemUti()
            })
        }

    }

    butRegressarRemUti.addEventListener("click", function () {

        divMenuUti.style.display = "block"
        divTblRemUti.style.display = "none"
        tblRemUti.style.display = "none"
        divMostrarRegressarRemBut.style.display = "none"

    })




    /*#########################################LIVROS########################################*/

    /*Adicionar Nova lIVRO*/
    formAddLivro.addEventListener("submit", function (event) {

        let strError = ""
        let checkadas = 0
        let estadoLivro = ""

        /*Verificar se já existe essa Livro*/
        for (var i = 0; i < livros.length; i++) {
            if (livros[i]._tituloLivro == tituloLivro.value) {
                strError += "Esse livro já existe"
            }
        }

        if (estadoAceitavel.checked) {

            checkadas++
            estadoLivro = estadoAceitavel.value

        }

        if (estadoBom.checked) {

            checkadas++
            estadoLivro = estadoBom.value

        }


        if (estadoFraco.checked) {

            checkadas++
            estadoLivro = estadoFraco.value

        }

        if (checkadas != 0) {

            strError += "O livro só pode ter um estado atual"

        }

        if (strError == "") {

            let newLivro = new Livro(tituloLivro.value, capaLivro.value, descLivro.value, autoresLivro.value, dataLivro.value, generoLivro.value, tagsLivro.value, editoraLivro.value, nPagLivro.value, estadoLivro)
            livros.push(newLiblio)

            /*Eliminar todo o conteudo do item Biblioteca*/
            localStorage.removeItem("livros")

            localStorage.setItem("livros", JSON.stringify(livros))

            renderTableLivros()

            event.preventDefault()

        }
        else {

            alert(strError)

            renderTableLivros()

            event.preventDefault()
        }

    })

    /*Renderizar Tabela*/
    function renderTableLivros() {

        tblLivros.innerHTML = ""

        tblLivros.innerHTML = "<table id='tabelaLivro' style='width: 100 % '>"
            + "<tr>"
            + "<th>Codigo</th>"
            + "<th>Titulo</th>"
            + "<th>Capa</th>"
            + "<th>Descricao</th>"
            + "<th>Autores</th>"
            + "<th>Data Lançamento</th>"
            + "<th>Género</th>"
            + "<th>Tags</th>"
            + "<th>Editora</th>"
            + "<th>Nº de Páginas</th>"
            + "<th>Estado</th>"
            + "</tr>"
            + "</table>"

        let strHTML = ""

        for (var i = 0; i < livros.length; i++) {

            let descricao = livros[i].descLivro
            livros[i].descLivro.length = 5 
            livros[i].descLivro += "..."

            strHTML += "<tr>" +
                "<td>" + livros[i]._id + "</td>" +
                "<td>" + livros[i]._capaLivro + "</td>" +
                "<td>" + descricao + "</td>" +
                "<td>" + livros[i]._autoresLivro + "</td>" +
                "<td>" + livros[i]._dataLivro + "</td>" +
                "<td>" + livros[i]._generoLivro + "</td>" +
                "<td>" + livros[i]._tagsLivro + "</td>" +
                "<td>" + livros[i]._editoraLivro + "</td>" +
                "<td>" + livros[i]._nPagLivro + "</td>" +
                "<td>" + livros[i]._estadoLivro + "</td>" +
                "<td><button type='button' class='remove' id=" + livros[i]._id + ">-</button>"
                "<td><button type='button' class='edit' id=" + livros[i]._id + ">-</button>"
            "</tr>"

        }

        tblLivros.innerHTML += strHTML

        /*Botoes Remover*/
        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowLivroById(rowId)

                /*Eliminar todo o conteudo do item Biblioteca*/
                localStorage.removeItem("livros")

                localStorage.setItem("livros", JSON.stringify(livros))

                renderTableLivros()
            })
        }
    }

    function removeRowLivroById(id) {

        for (let i = 0; i < livros.length; i++) {
            if (livros[i]._id == id) {
                livros.splice(i, 1)
            }
        }
    }

    butLivros.addEventListener("click", function () {

        divInserirLivro.style.display = "block"
        divTblLivro.style.display = "block"

        butBiblio.style.display = "none"
        butCat.style.display = "none"
        butTag.style.display = "none"
        butRegressar.style.display = "block"
        butMenuUti.style.display = "none"
        butRequisicao.style.display = "none"
        butLivros.style.display = "none"

        renderTableBiblio()

    })


    /*Mapa*/
    var myCenter = new google.maps.LatLng(51.528308, -0.3817765);

    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapProp);

        var marker = new google.maps.Marker({
            position: myCenter,
            icon: {
                url: '/images/marker.png',
                size: new google.maps.Size(70, 86), //marker image size
                origin: new google.maps.Point(0, 0), // marker origin
                anchor: new google.maps.Point(35, 86) // X-axis value (35, half of marker width) and 86 is Y-axis value (height of the marker).
            }
        });

        marker.setMap(map);

    }
    /*
        google.maps.event.addDomListener(window, 'load', initialize());
        
            ------geoCoding
            document.getElementById("OLA").addEventListener("click", function (event) {
                alert("OLA")
                var Ireland = "Dublin";
        
                function initialize() {
                    geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(53.3496, -6.3263);
                    var mapOptions =
                        {
                            zoom: 8,
                            center: latlng
                        }
                    map = new google.maps.Map(document.getElementById('map'), mapOptions);
                    codeAddress(Ireland);//call the function
                }
        
                function codeAddress(address) {
                    geocoder.geocode({ address: address }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            map.setCenter(results[0].geometry.location);//center the map over the result
                            //place a marker at the location
                            var marker = new google.maps.Marker(
                                {
                                    map: map,
                                    position: results[0].geometry.location
                                });
                        } else {
                            alert('Geocode was not successful for the following reason: ' + status);
                        }
                    });
                }
            })*/

}