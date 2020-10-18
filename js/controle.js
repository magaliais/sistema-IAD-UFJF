var auxlogado = [];

function cadastro() {
  for (var i = 0; i <= 2; i++) {
    document.getElementById("alert"+i).className = "d-none mt-1";
  }
  var nome ,senha ,resenha ,email;
  nome = document.getElementById("con3");
  senha = document.getElementById("con4");
  resenha = document.getElementById("con5");
  email = document.getElementById("con6");
  var emailstr = email.value;
  if (verificanome()) {
    if (senha.value != resenha.value || senha.value == "" || resenha.value == "") {
      erro(1);
    }else{
      if (emailstr.indexOf("@hotmail.") == -1  ? true : false) {
        erro(2);
      }else {
        /* Criar vet para armazenar inf do usuario
           Criar arquivo para salvar inf dos usuarios
        */
      }
    }
  }else {
    erro(0);
  }
}
function limpaErro() {
  for (var i = 0; i <= 2; i++) {
    document.getElementById("alert"+i).className = "d-none mt-1";
  }
}

function erro(ident) {
  document.getElementById("alert"+ident).className = "mt-1";
}

function verificanome() {
  return 1;
}
