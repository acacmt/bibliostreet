
window.onload = function () {
	var formdoar = document.getElementById("formdoar");
	if (formdoar) {
		formdoar.onsubmit = function (e) {
			e.preventDefault();



			let fnome = document.getElementById("fnome").value;
			let fcapa = document.getElementById("fcapa").value;
			let fdescricao = document.getElementById("fdescricao").value;
			let fautores = document.getElementById("fautores").value;
			let fdata = document.getElementById("fdata").value;
			let fgenero = document.getElementById("fgenero").value;
			let ftag = document.getElementById("ftag").value;
			let feditora = document.getElementById("feditora").value;
			let fpaginas = document.getElementById("fpaginas").value;
			let festado = document.getElementById("festado").value;
			let fnomedoador = document.getElementById("fnomedoador").value;
			let fdataDoacao = document.getElementById("fdataDoacao").value;
			let fcodigo = document.getElementById("fcodigo").value;
			console.log(livros)




			let livro = new Livro(fnome, fcapa, fdescricao, fautores, fdata, fgenero, ftag, feditora, fpaginas, festado, fnomedoador, fdataDoacao, fcodigo)
			livros.push(livro)
			localStorage.setItem("livros", JSON.stringify(livros))


			console.log(livros)


		}
	}

	//tabela dos livros
	renderTablelivro();
	function renderTablelivro() {
		var tblLivros = document.getElementById("tblLivro")
		if (tblLivros) {
			tblLivros.innerHTML = ""

			let strHTML = `<table id='tabelatag' style='width: 100%; border: 1px solid'>
            <tr>
            <th>Livros</th>
            <th>Género</th>
            </tr>`
			console.log(livros[0])
			for (let i = 0; i < livros.length; i++) {

				strHTML += `<tr><td>${livros[i]._nome}</td>
                <td>
                ${livros[i]._genero}
                </td> 
            </tr>`


			}
			strHTML += `</table>`

			tblLivros.innerHTML += strHTML

			/*let btnRemove = document.getElementsByClassName("remove")
		    
			for (let i = 0; i < btnRemove.length; i++) {
				btnRemove[i].addEventListener("click", function () {
					let rowId = btnRemove[i].firstChild.getAttribute("id")
					removetagByIdd(rowId)
					renderTablelivro()
				})
			}*/
		}

	}

	 renderCategories()
    function renderCategories() {
        console.log(categories)
        var fgenero = document.getElementById("fgenero")
        if (fgenero) {
            fgenero.innerHTML = ""
            let strHTML = "<option value=null>Todas</option>"
            for (let i = 0; i < categories.length; i++) {
                strHTML += '<option value=' + categories[i]._categoryName + '>' + categories[i]._categoryName + '</option>'
            }
            fgenero.innerHTML = strHTML
        }
    }

    renderBibli()
    function renderBibli() {
        var fcodigo = document.getElementById("fcodigo")
        if (fcodigo) {
            fcodigo.innerHTML = ""
            let strHTML = "<option value=null>Todas</option>"
            for (let i = 0; i < libraries.length; i++) {
                strHTML += '<option value=' + libraries[i]._id + '>' + libraries[i]._freguesia + '</option>'
            }
            fcodigo.innerHTML = strHTML
        }
    }

    document.getElementById("fgenero").addEventListener("change", filtrar);
    document.getElementById("fcodigo").addEventListener("change", filtrar);

    function filtrar() {

        var lstLivros = document.getElementById("listaLivros")

        var fgenero = document.getElementById("fgenero")
        var genero = fgenero.options[fgenero.selectedIndex].value
        var fcodigo = document.getElementById("fcodigo")
        var biblioteca = fcodigo.options[fcodigo.selectedIndex].value
        let strHTML = ''
        console.log(genero, biblioteca)
        for (let i = 0; i < livros.length; i++) {

            if (genero != 'null') {
                console.log(genero, livros[i]._genero)
                if (genero == livros[i]._genero) {
                    if (biblioteca != 'null') {
                        if (biblioteca == livros[i]._codigo) {
                            strHTML += `<div class="col-sm-12" style="margin-top: 3%">
                            <div class="col-sm-2 text-center">
                                <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
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
                    }
                    else {
                        strHTML += `<div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-2 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
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
                }
            }
            else if (biblioteca != 'null') {
                if (biblioteca == livros[i]._codigo) {
                    strHTML += `<div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-2 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
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
            }
            if(genero == 'null' && biblioteca  == 'null') {
                console.log("OI")
                strHTML += `<div class="col-sm-12" style="margin-top: 3%">
                    <div class="col-sm-2 text-center">
                        <img src=${livros[i]._capa} alt="Norway" style="width:178px; height:270px;">
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
        }

        lstLivros.innerHTML = strHTML



    }

}

