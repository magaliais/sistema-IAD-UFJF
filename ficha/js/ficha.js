function verificar() {
  localStorage.removeItem("VET");
  var text='<span class="subtex">%TIPO%:</span>&nbsp&nbsp<span class="text-monospace" style="text-decoration: underline;">';
  var deus, escolha;
  var poderes = [];
  deus = localStorage.getItem("GOD");
  escolha ="#Erro";
  var poderes,idealismo,radicalismo;
  var img1,repimg1,img3,repimg3;
  img1 = '<img class="img-fluid d-flex" src="img/logos/%NONE%.jpeg" alt="Erro">';
  img3 = '<img class="img-fluid d-flex" src="img/logos/%NONE%.jpeg" alt="Erro">';
  $("#out55").html("PM:6");
  $("#idealismo").html("");
  // -->
  switch (deus) {
    case "1":
    escolha = "Exú";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Conjuração, Sincronicidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "2":
    escolha = "Ogum";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Transmutação, Empatia";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "3":
    escolha = "Omulu";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Esconjuração, Vitalidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "4":
    escolha = "Oxóssi";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Transmutação, Sincronicidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "5":
    escolha = "Oxum";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Vitalidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "6":
    escolha = "Logun-Edê";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Sincronicidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "7":
    escolha = "Oxumarê";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Cognição, Ilusão";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "8":
    escolha = "Oxaguiã";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Esconjuração";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "9":
    escolha = "Yemanjá";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Esconjuração";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "10":
    escolha = "Oxalufã";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Cognição";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "11":
    escolha = "Oyá-Iansã";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Esconjuração, Psicocinese";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "12":
    escolha = "Xangô";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Psicocinese";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "13":
    escolha = "Nanã";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Conjuração, Cognição";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "14":
    escolha = "Ossãe";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Transmutação, Vitalidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "15":
    escolha = "Ewa";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Conjuração, Sincronicidade";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "16":
    escolha = "Obá";
    $("#GODescolhido").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"Projeção astral, Empatia, Psicocinese";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "0":

    break;
    }
    radicalismo = text.replace("%TIPO%","Radicalismo") + " - ";
    $("#poder").html(poderes+'</span>');
    $("#idealismo").html(idealismo+'</span>');
    $("#radicalismo").html(radicalismo+'</span>');
    $("#img1").html(repimg1);
    $("#img3").html(repimg3);
}

function mudar(id) {
  var text='<span class="subtex">Nome:</span>&nbsp&nbsp<span class="text-monospace text-justify" style="text-decoration: underline;">';
  var aux;
  aux = document.getElementById("in"+id);
  $("#out"+id).html(text+aux.value+'</span>');
}

function mucdaropc() {
  document.getElementById('alertopcin').className = "alert alert-danger d-none";
  document.getElementById('alertopcines').className = "alert alert-danger d-none";
  document.getElementById('alertopcinesreb').className = "alert alert-danger d-none";
  document.getElementById('alertnome').className = "alert alert-danger d-none";
  var text = '<div class="textoDeD col-12">'+
                'Opções de conhecimento adicional'+
              '</div>'+
              '<form name="opcad" action="ficha.html" id="fichaopcad">'+
                '<div class="row">';
      var input = '<div class="col-6 mt-2">'+
                    '<input onchange="mudaropc2(%NOME%);" class="form-check-input" type="radio" name="OPC" id="%NOME%" value="%NOME%" check>'+
                    '<label class="form-check-label" for="%NOME%">%NOME%</label>'+
                  '</div>';
  var textf =  '</div>'+
            '</form>';
  var repinput,repinput2,conhecimentos;
  conhecimentos = "Religião";
  if (document.getElementById('opcin').value == "#") {
    $("#alertopcin").removeClass("d-none");
    $("#opcadicional").addClass("d-none");
    $("#opc").html("");
  }else {
    $("#alertopcin").addClass("d-none");
    switch (document.getElementById('opcin').value) {
      case "Competitivo":
        $("#out7").html("");
        $("#opcrebelde").addClass("d-none");
        $("#out11").html("FIS:"+2);
        $("#out00").html("INT:"+1);
        $("#out33").html("SOC:"+1);
        $("#out44").html("MAG:"+2);
        $("#out22").html("PS:"+12);
        repinput = input.replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança");
        $("#opcadicional").removeClass("d-none");
        repinput2 = input.replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência");
        $("#opcadicional").html(text+repinput+repinput2+textf);
        break;
      case "Cooperativo":
      $("#out7").html("");
      $("#opcrebelde").addClass("d-none");
      $("#out11").html("FIS:"+1);
      $("#out00").html("INT:"+1);
      $("#out33").html("SOC:"+2);
      $("#out44").html("MAG:"+2);
      $("#out22").html("PS:"+11);
      repinput = input.replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão");
      $("#opcadicional").removeClass("d-none");
      repinput2 = input.replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório");
      $("#opcadicional").html(text+repinput+repinput2+textf);
        break;
        case "Isolacionista":
        $("#out7").html("");
        $("#opcrebelde").addClass("d-none");
        $("#out11").html("FIS:"+1);
        $("#out00").html("INT:"+2);
        $("#out33").html("SOC:"+1);
        $("#out44").html("MAG:"+2);
        $("#out22").html("PS:"+11);
        repinput = input.replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa");
        $("#opcadicional").removeClass("d-none");
        repinput2 = input.replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação");
        $("#opcadicional").html(text+repinput+repinput2+textf);
          break;
        case "Rebelde":
        $("#out7").html("");
        $("#opcrebelde").removeClass("d-none");
        var repinput3,repinput4,repinput5,repinput6;
        $("#out33").html("SOC:"+0);
        $("#out00").html("INT:"+0);
        $("#out11").html("FIS:"+1);
        $("#out44").html("MAG:"+2);
        $("#out22").html("PS:"+11);
        $("#opcadicional").removeClass("d-none");
        repinput = input.replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa").replace("%NOME%","Pesquisa");
        repinput2 = input.replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação").replace("%NOME%","Investigação");
        repinput3 = input.replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança").replace("%NOME%","Segurança");
        repinput4 = input.replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência").replace("%NOME%","Sobrevivência");
        repinput5 = input.replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório").replace("%NOME%","Interrogatório");
        repinput6 = input.replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão").replace("%NOME%","Persuasão");
        $("#opcadicional").html(text+repinput+repinput2+repinput3+repinput4+repinput5+repinput6+textf);
          break;
      default:

    }
    $("#opc").html(document.getElementById('opcin').value);
  }
}

function mudaropc2(nome) {
  var b = '<span class="subtex">Conhecimentos:</span>&nbsp&nbsp<span class="text-monospace" style="text-decoration: underline;">';
  $("#out7").html(b + "Religião, " + nome.value +"</span>");
}

function valores(valor){
  if (valor == '1') {
    $("#out33").html("SOC:"+1);
    $("#out00").html("INT:"+2);
  }else{
    $("#out33").html("SOC:"+2);
    $("#out00").html("INT:"+1);
  }
}
$('#imagem').change(
    function teste(){
    var img,caminho;
    caminho = document.getElementById('imagem').value;
    img = '<img src="%SCR%" class="img-thumbnail" alt="Erro">';
    img = img.replace("%SCR%",caminho);
    alert(img);
});
