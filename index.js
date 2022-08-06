    var email = document.querySelector("#email");
    var senha = document.querySelector("#senha");
    var botao = document.querySelector("#botao"); 

    botao.addEventListener("click", function(e){
            e.preventDefault();
            if(email.value == "teste@teste.com" && senha.value == "123456"){
                window.location.href = "https://www.google.com.br/";
            }
            else{
                alert("email ou senha estão errados ");
            }

    });

