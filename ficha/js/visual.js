function caregamentoVisual() {
  var usuarioid = localStorage.getItem("coresvivas.LDSAFASDADWQdqdsadqeQEWQDADqwdqwdasdqDQWDADSA");
  var usuario = JSON.parse(localStorage.getItem("coresvivas.USUARIOS"));
  usuario = usuario[usuarioid];
  var text='<span class="subtex">%TIPO%:</span>&nbsp&nbsp<span class="text-monospace" style="text-decoration: underline;">';
  var img1,repimg1,img3,repimg3,deus;
  img1 = '<img class="rounded mx-auto d-block" src="img/logos/%NONE%.jpeg" alt="Erro">';
  img3 = '<img class="rounded mx-auto d-block" src="img/logos/%NONE%.jpeg" alt="Erro">';
  switch (usuario[2]) {
    case "1":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Exú";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Conjuração:</span> detecção e quebra de outros efeitos mágicos.</p> <p><span class='subtex2'>Sincronicidade:</span> manipulação de eventos, sorte e azar, causa e feito.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "2":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Ogum";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Transmutação:</span> manipulação de alimentos.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "3":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Omulu";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Esconjuração:</span> detecção e quebra de outros efeitos mágicos.</p> <p><span class='subtex2'>Vitalidade:</span> diagnóstico e tratamento de ferimentos e doenças agudas e infecto-contagiosas.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "4":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oxóssi";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Transmutação:</span> manipulação de alimentos.</p> <p><span class='subtex2'>Sincronicidade:</span> manipulação de eventos, sorte e azar, causa e feito.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "5":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oxum";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Vitalidade:</span> diagnóstico e tratamento de ferimentos e doenças agudas e infecto-contagiosas.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "6":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Logun-Edê";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Sincronicidade:</span> manipulação de eventos, sorte e azar, causa e feito.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "7":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oxumarê";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Cognição:</span> clarividências, sonhos, clauriaudiências, psicografia.</p> <p><span class='subtex2'>Ilusão:</span> manipulação de sentidos.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "8":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oxaguiã";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Esconjuração:</span> detecção e quebra de outros efeitos mágicos.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "9":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Yemanjá";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Esconjuração:</span> detecção e quebra de outros efeitos mágicos.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","mascara");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "10":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oxalufã";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Cognição:</span> clarividências, sonhos, clauriaudiências, psicografia.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "11":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Oyá-Iansã";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Esconjuração:</span> detecção e quebra de outros efeitos mágicos.</p> <p><span class='subtex2'>Psicocinese:</span> manipulação de eletricidade e deslocamento de ar.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "12":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Xangô";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Psicocinese:</span> manipulação de eletricidade e deslocamento de ar.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Justiça";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "13":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Nanã";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Conjuração:</span> detecção e quebra de outros efeitos mágicos.</p> <p><span class='subtex2'>Cognição:</span> clarividências, sonhos, clauriaudiências, psicografia.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "14":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Ossãe";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Transmutação:</span> manipulação de alimentos.</p> <p><span class='subtex2'>Vitalidade:</span> diagnóstico e tratamento de ferimentos e doenças agudas e infecto-contagiosas.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Tolerância";
    repimg1 = img1.replace("%NONE%","bule");
    repimg3 = img3.replace("%NONE%","teatro");
    break;
    case "15":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Ewá";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Conjuração:</span> detecção e quebra de outros efeitos mágicos.</p> <p><span class='subtex2'>Sincronicidade:</span> manipulação de eventos, sorte e azar, causa e feito.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Preservação";
    repimg1 = img1.replace("%NONE%","tocha");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "16":
    escolha = "<span class='subtex'>Mensageiro de: </span>" + "Obá";
    $("#mensageiro").html(escolha);
    poderes = text.replace("%TIPO%","Poderes")+"<p><span class='subtex2'>Projeção astral:</span> comunicação psíquica com outros espíritos e pessoas vivas e viagem por outros planos de existência.</p> <p><span class='subtex2'>Empatia:</span> manipulação de emoções.</p> <p><span class='subtex2'>Psicocinese:</span> manipulação de eletricidade e deslocamento de ar.</p>";
    idealismo = text.replace("%TIPO%","Idealismo")+"+1 Compaixão";
    repimg1 = img1.replace("%NONE%","alvo");
    repimg3 = img3.replace("%NONE%","balanca");
    break;
    case "0":

    break;
    }
    switch (usuario[4]) {
      case "Competitivo":
        $("#fis").html("<span class='subtex'>FIS: </span>"+2);
        $("#int").html("<span class='subtex'>INT: </span>"+1);
        $("#soc").html("<span class='subtex'>SOC: </span>"+1);
        $("#mag").html("<span class='subtex'>MAG: </span>"+2);
        $("#ps").html("<span class='subtex'>PS: </span>"+12);
        break;
      case "Cooperativo":
      $("#fis").html("<span class='subtex'>FIS: </span>"+1);
      $("#int").html("<span class='subtex'>INT: </span>"+1);
      $("#soc").html("<span class='subtex'>SOC: </span>"+2);
      $("#mag").html("<span class='subtex'>MAG: </span>"+2);
      $("#ps").html("<span class='subtex'>PS: </span>"+11);
        break;
        case "Isolacionista":
        $("#fis").html("<span class='subtex'>FIS: </span>"+1);
        $("#int").html("<span class='subtex'>INT: </span>"+2);
        $("#soc").html("<span class='subtex'>SOC: </span>"+1);
        $("#mag").html("<span class='subtex'>MAG: </span>"+2);
        $("#ps").html("<span class='subtex'>PS: </span>"+11);
          break;
        case "Rebelde":
          if (usuario[1]) {
            $("#soc").html("<span class='subtex'>SOC: </span>"+1);
            $("#int").html("<span class='subtex'>INT: </span>"+2);
          }else{
            $("#soc").html("<span class='subtex'>SOC: </span>"+2);
            $("#int").html("<span class='subtex'>INT: </span>"+1);
          }
        $("#fis").html("<span class='subtex'>FIS: </span>"+1);
        $("#mag").html("<span class='subtex'>MAG: </span>"+2);
        $("#ps").html("<span class='subtex'>PS: </span>"+11);
          break;
      default:

    }
    $("#opção").html("<span class='subtex'>Opção: </span>"+usuario[4]);
    $("#conhecimento").html("<span class='subtex'>Conhecimentos: </span> <span class='linhab'>Religião," + usuario[5] + "</span>")
    $("#pm").html("<span class='subtex'>PM: </span>"+6);
    var nome = "<span class='subtex'>Nome:  </span><span style='text-decoration: underline;'>"
    $("#nome").html(nome + usuario[3] + "</span>")
    radicalismo = text.replace("%TIPO%","Radicalismo") + " - ";
    $("#poderes").html(poderes+'</span>');
    $("#idealismo").html(idealismo+'</span>');
    $("#radicalismo").html(radicalismo+'</span>');
    $("#1img").html(repimg1);
    $("#3img").html(repimg3);
}
