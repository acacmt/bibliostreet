// Name and Password from the register-form
var name = document.getElementById('inputName');
var email = document.getElementById('inputEmail');
var pw1 = document.getElementById('inputPassword1');

// storing input from register-form
function store(name, email, pw1) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('pw1', pw1);
    
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {


    var storedName = localStorage.getItem('name');
    var storedEmail = localStorage.getItem('email');
    var storedPw1 = localStorage.getItem('pw1');

    if (storedName != null) {
        //EXISTE ALGUEM LOGADO
        // Referências para elementos HTML
        let optLogin = document.getElementById("optLogin")
        let optLogout = document.getElementById("optLogout")
        let optHi = document.getElementById("optHi")
        optLogin.style.display = 'none'
        optLogout.style.display = 'block'
        optHi.innerHTML = "<a class='nav-link' href='#'>Olá, " +
            storedName + "</a>"
        optHi.style.display = 'block'
    } else {
        //NAO EXISTE NINGUEM LOGADO
        // Esconder opções de autenticação
        optLogout.style.display = 'none'
        optHi.style.display = 'none'
    }


}

function erase() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('pw1');
}