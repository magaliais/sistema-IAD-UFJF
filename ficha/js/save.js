var possi;
var possibilidades = [];

function deslogar() {
  localStorage.clear();
}

function salvedeusS() {
  window.location.href="ficha.html";
}

function salvedeus() {
  var a;
  a = document.escolha.blankRadio;
  if (a != undefined ) {
    if (a.value > 0 && a.value < 16) {
      localStorage.setItem("GOD",a.value);
      localStorage.removeItem("VET");
      window.location.href="ficha.html";
    } else {
      $("#alerta").removeClass("d-none");
    }
  }else {
    $("#alertaopc").removeClass("d-none");
  }
}

function getPossibilidade(id) {
  var aux;
  aux = JSON.parse(possi);
  return aux[id];
}

function getlength() {
  var aux;
  aux = JSON.parse(possi);
  return aux.length;
}

function semFicha() {
  $("#mesa").removeClass("d-none");
  $("#mesa").addClass("mx-auto");
  localStorage.setItem("VET",JSON.stringify(possibilidades));
  possi = localStorage.getItem("VET");
}

function carregando() {
  localStorage.setItem("VET",JSON.stringify(possibilidades));
  possi = localStorage.getItem("VET");
  cont = getlength();
  tentativas = tentativas - cont;
  for (var i = 0 ; i < 6-tentativas; i++) {
    possibilidades[i] = getPossibilidade(i);
  }
  $("#divbtnop").removeClass("d-none")
  $("#mesa").addClass("d-none");
  $("#next").removeClass("d-none container");
  $("#next").addClass("container");
  var repb,buttongir = "<button type='button' class='btn w-100' name='button' onclick='gira()'>( %TIPO% )</button>";
  repb = buttongir.replace("%TIPO%","Rode de novo ["+tentativas+"]");
  $("#divbtn").html(repb);
  opc(1);
}
