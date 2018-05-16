let tags = []
class tag {

    constructor(tagName) {

        this._id = tag.getLastId() + 1
        this.tagName = tagName

    }

    get id() {
        return this._id
    }

    get tagName() {
        return this._tagName
    }

    set tagName(newtagName) {
        this._tagName = newtagName
    }

    static getLastId() {
        let lastId = 0
        if (tags.length != 0) {
            lastId = tags[tags.length - 1].id
        }
        return lastId
    }

}


window.onload = function () {

    // Itera sobre todos os arrys em localStorage
    for (let i = 0; i < localStorage.length; i++) {

        if (localStorage.getItem("tags")) {

            tags = (JSON.parse(localStorage.getItem(localStorage.key(i))))

        }

    }

    //Formulário Tag
    let formTag = document.getElementById("formtag")

    let fbutTag = document.getElementById("ffbutTag")

    let ftag = document.getElementById("ftag")

    let tag = document.getElementById("tag")
    let divTag = document.getElementById("divTag")
    let tblTag = document.getElementById("tblTag")


    //////////////////////////////
    //////////////////////////////
    //          TAGS
    //////////////////////////////
    //////////////////////////////

    fbutTag.addEventListener("click", function () {

        renderTabletag()

    })


    formTag.addEventListener("submit", function () {

        let strError = ""

        //Iterar sobre o array para verificar se existe a tag
        for (var i = 0; i < tags.length; i++) {
            if (tags[i]._tagName == ftag.value) {
                strError += "tag já existente"
            }
        }

        if (strError == "") {

            let newtag = new tag(ftag.value)
            tags.push(newtag)

            localStorage.removeItem("tags")

            localStorage.setItem("tags", JSON.stringify(tags))

            renderTabletag()

            event.preventDefault()

        } else {

            alert(strError)

            renderTabletag()

            event.preventDefault()
        }


    })

    function renderTabletag() {

        tblTag.innerHTML = ""

        tblTag.innerHTML = "<table id='tabelatag' style='width: 100 % '>" +
            "<tr>" +
            "<th>tags</th>" +
            "<th>Actions</th>" + 
            "</tr>" +
            "</table>"

        let strHTML = ""

        for (var i = 0; i < tags.length; i++) {

            strHTML += "<tr>" +
                "<td>" + tags[i]._tagName + "</td>" +
                "<td>" +
                "<a id='" + tags[i]._id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "</td>" +
            "</tr>"

        }

        tblTag.innerHTML += strHTML

        let btnRemove = document.getElementsByClassName("remove")
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function () {
                // By clicking in a specific game, remove it from the array
                let rowId = btnRemove[i].getAttribute("id")
                removeRowtagById(rowId)
                renderTabletag()
            })
        }
    }

    function removeRowtagById(id) {
        console.log("ID: " + id)
        for (let i = 0; i < tags.length; i++) {
            if (tags[i]._id == id) {
                tags.splice(i, 1)
            }
        }

        localStorage.removeItem("tags")

        localStorage.setItem("tags", JSON.stringify(tags))
    }
}