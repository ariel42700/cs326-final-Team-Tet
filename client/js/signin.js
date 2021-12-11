let userDetails = {"userName" : "random", "password" : "test"};

let login = document.getElementById('loginBtn');
if(login){
    login.addEventListener("click", () => {
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        if(userName.localeCompare(userDetails["userName"]) !== 0 && password.localeCompare(userDetails["password"]) !== 0){
            $('#loginModal').modal('show');
        }
        else{
            window.location.href = "homepage.html";
        }
    });
}

let register = document.getElementById('registerLink');
if(register){
    register.addEventListener("click", () => {
        window.location.href = "register.html";
    });
}