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
        optLogin.style.display = 'none'
    } 

}

function erase() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('pw1');
}