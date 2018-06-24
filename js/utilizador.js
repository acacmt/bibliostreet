window.onload = function () {
    // document.getElementById('requisitar').addEventListener("click", function () {
    //     localStorage.setItem("bookid", id)
    //     window.location.href = "./livros.html"
    // });

    //lista dos livros
    renderListlivro();
    function renderListlivro() {
        var lstLivros = document.getElementById("listaLivros")
        console.log(lstLivros)
        if (lstLivros) {
            lstLivros.innerHTML = ""

            let strHTML = ''
            console.log(livros)
            for (let i = 0; i < livros.length; i++) {

                strHTML += `<div class="col-sm-12" style="margin-top: 3%">
                <div class="col-sm-2 text-center">
                    <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:178px;">
                </div>

                <div class="col-sm-10 text-left">
                    <h3 id="bookname">
                        <b>${livros[i]._nome}</b>
                    </h3>
                    <h4 id="bookauthor">${livros[i]._autores}</h4>
                    <button id="requisitar"><a href="./livros.html"> ver mais </a></button>
                    <h6 id="bookresume">${livros[i]._descricao}</h6>
                </div>
            </div>`


            }


            lstLivros.innerHTML = strHTML


        }

    }



}

