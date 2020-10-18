function caregamentoFichas() {
  localStorage.removeItem("GOD");
  var div = '<div class="col-1 invimin-md"></div>'+
  '<div class="col-4" id="%ID%" style="background-color:#%COR%;">'+
    '<div class="row mt-3" onclick="redirecionamento(%ID%);">'+
      '<div class="col-12">'+
        '<img class="img-thumbnail d-flex" class="w-100 my-2" src="img/%CAMINHO%.jpeg" alt="Erro">'+
      '</div>'+
      '<div class="col-12">'+
        '<span class="ml-3">Nome: %NOME%</span>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<div class="col-1 invimin-md"></div>';
  var divrep = [];
  var vetcontas = [];
  vetcontas = JSON.parse(localStorage.getItem("coresvivas.USUARIOS"));
  var aux2, aux;
  for (var i = 0; i < vetcontas.length; i++) {
    aux2 = div;
    if (i%2==0) {
      aux = aux2.replace("%COR%","6d6262");
    }else{
      aux = aux2.replace("%COR%","989898");
    }
    // IMAGEM
    if (vetcontas[i][6] == undefined ) {
      switch (vetcontas[i][2]) {
        case "1":
        aux = aux.replace("%CAMINHO%","exu");
        break;
        case "2":
        aux = aux.replace("%CAMINHO%","ogum");
        break;
        case "3":
        aux = aux.replace("%CAMINHO%","omulu");
        break;
        case "4":
        aux = aux.replace("%CAMINHO%","oxossi");
        break;
        case "5":
        aux = aux.replace("%CAMINHO%","oxum");
        break;
        case "6":
        aux = aux.replace("%CAMINHO%","logunede");
        break;
        case "7":
        aux = aux.replace("%CAMINHO%","oxumare");
        break;
        case "8":
        aux = aux.replace("%CAMINHO%","oxaguia");
        break;
        case "9":
        aux = aux.replace("%CAMINHO%","yemanja");
        break;
        case "10":
        aux = aux.replace("%CAMINHO%","oxalufa");
        break;
        case "11":
        aux = aux.replace("%CAMINHO%","oya");
        break;
        case "12":
        aux = aux.replace("%CAMINHO%","xango");
        break;
        case "13":
        aux = aux.replace("%CAMINHO%","nana");
        break;
        case "14":
        aux = aux.replace("%CAMINHO%","ossae");
        break;
        case "15":
        aux = aux.replace("%CAMINHO%","ewa");
        break;
        case "16":
        aux = aux.replace("%CAMINHO%","oba");
        break;
        case "0":

        break;
        }
      }
    divrep[i] = aux.replace("%ID%",vetcontas[i][0]).replace("%ID%",vetcontas[i][0]).replace("%NOME%",vetcontas[i][3]);

  }
  var plus;
  var reppuls;
  plus = '<div class="media mt-4 ml-2 noprint">'+
    '<div class="media-body align-self-center" onclick="window.location.href=%CAMINHO%">'+
      '<i class="text-center %TIPO%" style="font-size:50px;"></i>'+
    '</div>'+
  '</div>';
  if (i%2==0) {
    reppuls = plus.replace("%CAMINHO%","'index.html'").replace("%TIPO%","fas fa-plus-square");
  }else {
    reppuls = plus.replace("%CAMINHO%","'index.html'").replace("%TIPO%","far fa-plus-square");
  }
  divrep[i+1] = reppuls;
  $("#fichasFeitas").html(divrep);
}

function redirecionamento(id) {
  localStorage.setItem("coresvivas.LDSAFASDADWQdqdsadqeQEWQDADqwdqwdasdqDQWDADSA",id);
  window.location.href = "visual.html";
}
