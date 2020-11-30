const cookie = require('./cookie')

document.getElementById("register").addEventListener("click", function(e){
    e.preventDefault();
    window.open('https://sub.vayvonthechap.com:8080/account/register', '_blank');
});

document.getElementById("loginBtn").addEventListener("click", function(e){
    e.preventDefault();
    var checkLogin; 
    var url = "https://sub.vayvonthechap.com:8080/api/authenticate";

    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;
    console.log(username);
    if (username == null || username == "") {
        alert("Username can't be blank");
        return false;
    } else if (password.length < 4) {
        alert("Password must be at least 4 characters.");
        return false;
    }

        var request = new XMLHttpRequest();

        localStorage.setItem("EMAIL",username);
        var data = {
            "password": password,
            "rememberMe": "true",
            "username": username
        };
        // console.log(data);
    
        var json = JSON.stringify(data);
    //     console.log(json);
        request.open("POST",url , true);
        request.setRequestHeader("Content-type", "application/json");
        request.send(json); // specify the credentials to receive the token on request
        request.onreadystatechange = function () {
             if (request.readyState == request.DONE) {
                 if(request.status==200){
                    var response = request.responseText;
                    var obj = JSON.parse(response);
                    cookie.setCookie('user',obj.id_token,1)
                    // console.log(username);
                    localStorage.setItem("TOKEN",obj.id_token);     
                    window.location.replace('main.html');
                 }else if (request.status==401){
                alert("Wrong username or password!");
            }
        }
        
        }
   
});






