window.onload = function () {
    console.log(123)



    //lista dos livros
    renderReqlivros();
    function renderReqlivros() {
        var reqLivros = document.getElementById("requesitarLivro")
        console.log(reqLivros)
        if (reqLivros) {
            reqLivros.innerHTML = ""

            let strHTML = ''
            console.log(livros)

            // var livro;
            //             if (localStorage.getItem("bookid")) {
            //                 for (let i = 0; i < livros.length; i++) {
            //                     if (livros[i]._id == localStorage.getItem("bookid")) {
            //                         livro = livros[i]
            //                     }
            //                 }
            //             }


            for (let i = 0; i < livros.length; i++) {

                strHTML += ` <div class="col-sm-3 text-center">
                <img id="image" src=${livros[i]._capa} alt="Norway" style=" height:178px;">
            </div>

            <div class="col-sm-9 text-left">
                <h3 id="bookname">
                    <b>${livros[i]._nome}</b>
                </h3>
                <h4 id="bookauthor">${livros[i]._autores}</h4>
                <p id="demo"></p>
                <button id="requisitar" onclick="document.getElementById('comentarios').style.display = 'block'"> Requisitar </button>
            </div>
            <div class="col-sm-12" style="margin-top: 1%">
                <h4>
                    <b>DESCRIÇÃO</b>
                </h4>
                <h6 id="bookresume">${livros[i]._descricao} </div>`


            }


            reqLivros.innerHTML = strHTML


        }

    }

    // lista de comentarios
    renderlistcoment();
    function renderlistcoment() {
        var reqcoment = document.getElementById("listcoment")
         var comment = document.getElementById('comentario'),updateInterval;

        console.log(reqcoment)
        if (reqcoment) {
            reqcoment.innerHTML = ""

            let strHTML = ''
            console.log(livros)
            for (let i = 0; i < users.length; i++) {
               
                strHTML += ` <!--<div class="w3-panel w3-card">
                <p> ${comment} </p>
                    <h6 class="text-right">
                        <b>${users[i]._nome}</b>
                    </h6>
                </div>--> `


            }


            reqcoment.innerHTML = strHTML


        }

    }

}

function Pontuar() {
    var txt;
    var pontuacao = prompt("Por favor de a sua pontuação a este livro de 1 a 5");
    if (pontuacao == 0 || pontuacao >= 6) {
        txt = "Pontuação não permitida";
    } else {
        txt = ((2.5 + pontuacao) / 2);//pontuação inicial igual para todos os livros 
    }
    document.getElementById("demo").innerHTML = txt;
}