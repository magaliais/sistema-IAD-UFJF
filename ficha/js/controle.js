var contascriadas = 0,id = 0;
var vetorcontas = new Array();
function salvaFicha() {
  document.getElementById('alertopcin').className = "alert alert-danger d-none";
  document.getElementById('alertopcines').className = "alert alert-danger d-none";
  document.getElementById('alertopcinesreb').className = "alert alert-danger d-none";
  document.getElementById('alertnome').className = "alert alert-danger d-none";

  var opcin = document.getElementById('opcin').value;
  var opcad = document.getElementById('fichaopcad');

  var pes = document.getElementById('Pesquisa');
  var inv = document.getElementById('Investigação');
  var seg = document.getElementById('Segurança');
  var sob = document.getElementById('Sobrevivência');
  var int = document.getElementById('Interrogatório');
  var per = document.getElementById('Persuasão');
  var nome = document.getElementById('in6');
  var vetopc = [];
  //true => contem erro//
  if (nome.value == "") {
    $("#alertnome").removeClass("d-none");
  }else if (opcin == "#") {
    $("#alertopcin").removeClass("d-none");
  }else if (pes != null && inv != null && seg != null && sob != null && int != null && per != null) {
      if (pes.checked == false && inv.checked == false && seg.checked == false &&
          sob.checked == false && int.checked == false && per.checked == false ||
          soc1.checked == false && soc2.checked == false) {
        $("#alertopcinesreb").removeClass("d-none");
      }else{
        var aux;
        if (soc1!= null) {
          aux=soc1;
        }else {
          aux=soc2;
        }
        salvaFichaCom(nome.value,aux);
      }
  }else if (seg != null && sob != null) {
      if (seg.checked == false && sob.checked == false) {
        $("#alertopcines").removeClass("d-none");
      }else{
        salvaFichaCom(nome.value,-1);
      }
  }else if (per != null && int != null) {
      if (per.checked == false && int.checked == false) {
        $("#alertopcines").removeClass("d-none");
      }else{
        salvaFichaCom(nome.value,-1);
      }
  }else if (pes != null && inv != null) {
      if (pes.checked == false && inv.checked == false) {
        $("#alertopcines").removeClass("d-none");
      }else{
        salvaFichaCom(nome.value,-1);
      }
  }
}

function salvaFichaCom(nome,opcrb) {
  var vetorcont = [];
  var escolhido;
  var opcin = document.getElementById('opcin').value
  var pes = document.getElementById('Pesquisa');
  var inv = document.getElementById('Investigação');
  var seg = document.getElementById('Segurança');
  var sob = document.getElementById('Sobrevivência');
  var int = document.getElementById('Interrogatório');
  var per = document.getElementById('Persuasão');
  if (opcrb != -1) {
      if (opcrb.id == "soc1") {
        opcrb = 1;
      }else {
        opcrb = 2;
      }
  }
  if (pes!= null) {
    if (pes.checked == true) {
      escolhido = pes.value;
    }
  }
  if (inv!= null) {
    if (inv.checked == true) {
      escolhido = inv.value;
    }
  }
  if (seg!= null) {
    if (seg.checked == true) {
      escolhido = seg.value;
    }
  }
  if (sob!= null) {
    if (sob.checked == true) {
      escolhido = sob.value;
    }
  }
  if (int!= null) {
    if (int.checked == true) {
      escolhido = int.value;
    }
  }
  if (per != null) {
    if (per.checked == true) {
      escolhido = per.value;
    }
  }
  var contas;
  contas = JSON.parse(localStorage.getItem("coresvivas.USUARIOS"));
  if (contas != null) {
    id = contas.length;
  }
  var god = localStorage.getItem("GOD");
  vetorcont = [id,opcrb,god,nome,opcin,escolhido];
  localStorage.setItem("CONTA",JSON.stringify(vetorcont));
  $("#siteC").removeClass("disabled");
}

function addContaaux() {
  var aux = JSON.parse(localStorage.getItem("CONTA"));
  if (aux == null) {
  }else {
    addConta(aux);
    localStorage.removeItem("CONTA");
  }
}

function addConta(cont) {
  var aux = [];
  aux = JSON.parse(localStorage.getItem("coresvivas.USUARIOS"));
  if (aux != null) {
    for (var i = 0; i < aux.length; i++) {
      vetorcontas[i] = aux[i];
    }
  }else {
  }
  vetorcontas[id] = cont;
  contascriadas++;
  id++;
  localStorage.setItem("coresvivas.USUARIOS",JSON.stringify(vetorcontas));
  window.location.href = "fichas.html";
}
