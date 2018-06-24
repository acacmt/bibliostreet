
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
	renderCategories()
	function renderCategories() {
		console.log(categories)
		var fgenero = document.getElementById("fgenero")
		if (fgenero) {
			fgenero.innerHTML = ""
			let strHTML = ""
			for (let i = 0; i < categories.length; i++) {
				strHTML += '<option value=' + categories[i]._categoryName + '>' + categories[i]._categoryName + '</option>'
			}
			fgenero.innerHTML = strHTML
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
            <th>Tipo de Livro</th>
            </tr>`
			console.log(livros[0])
			for (let i = 0; i < livros.length; i++) {

				strHTML += `<tr><td>${livros[i]._nome}</td>
                <td>
                <button class='remove' style='background-color: lightcoral'><a id='${livros[i]._id}'>
                <i class='fas fa-trash-alt'></i></a></button>
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
}

