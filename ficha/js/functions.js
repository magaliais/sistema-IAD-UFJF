var cont = 0, tentativas = 6;

function buzios(id) {
  var img,imgrep;

  $("#mesa").html(id);
}

function giraP() {
  tentativas-=1;
  var aux = rodar();
  buzios(aux);
  localStorage.setItem("GOD",aux);
  cartao(aux);
  $("#btnpasaux").html('<button class="btn w-100" id="btnpas" type="button" name="button" onclick="salvedeusS();">Passe<i class="fa fa-arrow-right"></i></button>');
}

function rodar() {
  var aberta=0,fechado=0;
  var vet = [];
  for(var i=0;i<16;i++){
    vet[i]=Math.floor(Math.random() * 2);
    if(vet[i]==0)
      aberta++;
  }
  return aberta;
}

function gira() {
  tentativas-=1;
  var repb,buttongir = "<button type='button' class='btn w-100 %NONE%' id='btnrol' name='button' %FUN% >( %TIPO% )</button>";
  if (tentativas!=6) {
    $("#gods").removeClass("d-none");
    if (tentativas <= 0) {
      repb = buttongir.replace("%TIPO%","Rode de novo [-]").replace("%NONE%","disabled").replace("%FUN%","");
    }else {
      repb = buttongir.replace("%TIPO%","Rode de novo ["+tentativas+"]").replace("%NONE%","").replace("%FUN%","onclick='gira()'");
    }
    $("#divbtn").html(repb);
  }
  if (tentativas>=0) {
    cartao(rodar());
  }
  $("#btnpasaux").html('<button class="btn w-100" id="btnpas" type="button" name="button" onclick="salvedeus();">Passe<i class="fa fa-arrow-right"></i></button>');
  var repbopc, buttonopc = "<button type='button' class='btn w-100' name='button' onclick='opc(%ID%);'>Opções </button>";
  repbopc = buttonopc.replace("%ID%","1");
  $("#divbtnop").html(repbopc);
  var vet = [];
  $("#mesa").addClass("d-none");
  $("#next").removeClass("d-none container");
  $("#next").addClass("container");
  document.getElementById('opcoes').className = "d-none";
}

function cartao(id) {
  $("#mesas").addClass("d-none");
  if (tentativas !=5) {
    $("#espa").addClass("d-none");
    $("#divbtnop").removeClass("d-none");
  }
    if (id != 0 && id !=17) {
      $("#mesa").addClass("d-none");
      $("#next").removeClass("d-none container");
      $("#next").addClass("container");
      imag(id);
      possibilidades[cont]=verifica(cont,id);
      cont++;
  }else{
    $("#fechada").removeClass("d-none");
  }

}

function imag(id) {
  for (var i = 1; i <= 16; i++) {
    document.getElementById('deus'+i).className = "d-none";
  }
  $("#deus"+id).removeClass("d-none");
  $("#deus"+id).addClass("col-12");
}

function opc(id) {
  var repb,button ="<button type='button' class='btn w-100' name='button' onclick='opc(%ID%);'>Opções </button>";
  if (id==1) {
    $("#alertaopc").addClass("d-none");
    var deus;
    document.getElementById('opcoes').className = "container";
    document.getElementById('gods').className = "d-none";
    for (var i = 0; i < possibilidades.length; i++) {
      deus = "<img img-fluid class='w-100 my-2' src='img/%IMG%.jpeg' alt='Erro'><div class='row'><div class='col-1'></div><div class='col-5 texto2'>%NOME%</div><div class='col-5 form-check'><input class='form-check-input position-static' type='radio' name='blankRadio' id='opcao%VALOR%' value='%VALOR%' aria-label='...'></div><div class='col-1'></div>";
      var repd;
      switch (possibilidades[i]) {
        case 1:
        repd = deus.replace("%IMG%","exu").replace("%NOME%","Exú").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 2:
        repd = deus.replace("%IMG%","ogum").replace("%NOME%","Ogum").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 3:
        repd = deus.replace("%IMG%","omulu").replace("%NOME%","Omulu").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 4:
        repd = deus.replace("%IMG%","oxossi").replace("%NOME%","Oxóssi").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 5:
        repd = deus.replace("%IMG%","oxum").replace("%NOME%","Oxum").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 6:
        repd = deus.replace("%IMG%","logunede").replace("%NOME%","Logun-Edê").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 7:
        repd = deus.replace("%IMG%","oxumare").replace("%NOME%","Oxumarê").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 8:
        repd = deus.replace("%IMG%","oxaguia").replace("%NOME%","Oxaguiã").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 9:
        repd = deus.replace("%IMG%","yemanja").replace("%NOME%","Yemanjá").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 10:
        repd = deus.replace("%IMG%","oxalufa").replace("%NOME%","Oxalufã").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 11:
        repd = deus.replace("%IMG%","oya").replace("%NOME%","Oyá-Iansã").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 12:
        repd = deus.replace("%IMG%","xango").replace("%NOME%","Xangô").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 13:
        repd = deus.replace("%IMG%","nana").replace("%NOME%","Nanã").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 14:
        repd = deus.replace("%IMG%","ossae").replace("%NOME%","Ossãe").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 15:
        repd = deus.replace("%IMG%","ewa").replace("%NOME%","Ewá").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;

        case 16:
        repd = deus.replace("%IMG%","oba").replace("%NOME%","Obá").replace("%VALOR%",possibilidades[i]).replace("%VALOR%",possibilidades[i]);
        break;
        case 0:
        tentativas+=1;
        break;
        }
        $("#op"+i).html(repd);
    }
    repb = button.replace("%ID%", 2);
    $("#divbtnop").html(repb);
  }else {
    $("#alerta").addClass("d-none");
    document.getElementById('opcoes').className = "d-none";
    $("#gods").removeClass("d-none");
    $("#deus"+getPossibilidade(possibilidades.length-1)).removeClass("d-none");
    $("#deus"+getPossibilidade(possibilidades.length-1)).addClass("col-12");
    repb = button.replace("%ID%",1);
    $("#divbtnop").html(repb);
  }
}

function verifica(num,deus) {
  for (var i = 0; i <= num; i++) {
    if (possibilidades[i]==deus) {
      var no = rodar();
      imag(no);
      return verifica(num,no);
    }
  }
  return deus;
}
