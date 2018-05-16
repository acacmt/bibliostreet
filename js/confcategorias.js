let categories = []

class category {

    constructor(categoryName) {

        this._id = category.getLastId() + 1
        this.categoryName = categoryName

    }

    get id() {
        return this._id
    }

    get categoryName() {
        return this._categoryName
    }

    set categoryName(newcategoryName) {
        this._categoryName = newcategoryName
    }

    static getLastId() {
        let lastId = 0
        if (categories.length != 0) {
            lastId = categories[categories.length - 1].id
        }
        return lastId
    }

}

window.onload = function () {
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem("categories")) {

            categories = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }
    }

    //Formulário Categoria
    let formCat = document.getElementById("formcat")

    let fbutCat = document.getElementById("fbutCat")
    let fbutGenero = document.getElementById("genero")

    let fCat = document.getElementById("fcat")

    //Select
    let genero = document.getElementById("genero")

    //////////////////////////////
    //////////////////////////////
    //        CATEGORIAS
    //////////////////////////////
    //////////////////////////////

    fbutCat.addEventListener("click", function () {

        renderTableCat()

    })


    formCat.addEventListener("submit", function () {

        let strError = ""

        //Itera sobre o array e verifica se existe a categoria
        for (var i = 0; i < categories.length; i++) {
            if (categories[i].categoryName == fCat.value) {
                strError += "Esta categoria já existe!"
            }
        }

        if (strError == "") {

            let newCat = new category(fCat.value)
            categories.push(newCat)

            localStorage.removeItem("categories")

            localStorage.setItem("categories", JSON.stringify(categories))

            renderTableCat()

            //Adiciona ao select
            adicionarSelect()

            event.preventDefault()

        } else {

            alert(strError)

            renderTableCat()

            event.preventDefault()
        }


    })

    function adicionarSelect() {

        fbutGenero.innerHTML = ""
        for (let i = 0; i < categories.length; i++) {

            fbutGenero.innerHTML += "<option value=" + categories[i]._categoryName + ">" + categories[i]._categoryName + "</option>"

        }

    }

    // Render Tabela
    function renderTableCat() {

        tblcategories.innerHTML = ""

        tblcategories.innerHTML = "<table id='tblCat' style='width: 100 % '>" +
            "<tr>" +
            "<th>categories</th>" +
            "<th>Actions</th>" +  
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < categories.length; i++) {

            strHTML += "<tr>" +
                "<td>" + categories[i]._categoryName + "</td>" +
                "<td>" +
                "<a id='" + categories[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
                "</tr>"

        }

        tblcategories.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")

                removecatById(rowId)

                localStorage.removeItem("categories")

                localStorage.setItem("categories", JSON.stringify(categories))

                renderTableCat()
            })
        }
    }

    function removecatById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < categories.length; i++) {
            if (categories[i]._id == id) {
                categories.splice(i, 1)
            }
        }
    }
}