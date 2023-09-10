

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#username").value;
    password =  document.querySelector("#password").value;

    if (username == "Admin123" && password == "admin123") {
    
        window.location.href = "student.html";
    } else {
        alert("Invalid email or password");
        document.querySelector("#form").reset();
    }

}



