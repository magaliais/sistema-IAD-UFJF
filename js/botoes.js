function botao(id) {
  var tipo;
  if (id == 2) {
      $("#btn"+id).html("<button class='btn texto my-1 link-bottom' type='button' name='button'>Cadastro</button>");
      $("#btn1").html("<button class='btn texto my-1' type='button' onclick='botao("+1+");' name='button'>Login</button>");
      document.getElementById('logar').className="d-none";
      document.getElementById('cadastrar').className="d-flex";
    }else {
      limpaErro();
      $("#btn"+id).html("<button class='btn texto my-1 link-bottom' type='button' name='button'>Login</button>");
      $("#btn2").html("<button class='btn texto my-1' type='button' onclick='botao("+2+");' name='button'>Cadastro</button>");
      document.getElementById('logar').className="d-flex";
      document.getElementById('cadastrar').className="d-none";
  }

  conteudo(id);
}

function conteudo(identif) {
  for (var i = 1; i <= 6; i++) {
    document.getElementById('con'+i).className="d-none";
  }
  if (identif==1) {
    for (var i = 1; i <= 2; i++) {
      document.getElementById('con'+i).className="texto my-1";
    }
  }else {
    for (var i = 3; i <= 6; i++) {
      document.getElementById('con'+i).className="texto my-1";
    }
  }
}
