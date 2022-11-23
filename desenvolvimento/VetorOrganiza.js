var VetTamanho = TamanhoVet();

function TamanhoVet() {
  var TVet;
  var n2;
  do {
    n2 = 1;
    TVet = prompt("Indique qual o tamnho do vetor");
    if (TVet > 0) {
        return TVet;
    }
    alert("O valor têm que ser um número maior que 0");
  } while (n2 != 0);
}


var Vet = GeradorV(VetTamanho)

function GeradorV(TVet) {
  var Vetor = new Array(TVet);
  return Vetor;
}

Vet = SetValorR(Vet,VetTamanho)

function SetValorR(Vetor,TVet){
    /*
    var max = ValorG("valor maximo")
    var min = ValorG("valor mínimo")
    */
    /**/
    var max = 10000
    var min = 1
    
    for (var i = 0; i < TVet; i++ ){
        Vetor[i] = RandomInt(min, max)
        console.log(Vetor[i])
    }
    return Vetor;
}

function SetValorV(Vetor,TVet){    
    for (var i = 0; i < TVet; i++ ){
        Vetor[i] = ""
        console.log(Vetor[i])
    }
    return Vetor;
}


function RandomInt(min,max) {
    return Math.floor (Math.random() * (max - min) + min);
}

function ValorG(text) {
    do {
      n2 = 1;
      var V = prompt("Indique qual o " + text + " que pode ser gerado");
      if (V >= 0 || V <= 0) {
        return V;
      }
  
      alert("O valor têm que ser um número");
    } while (n2 != 0);
}


/*function OrganizaVet(vetor, TVet) {
    var aux=0
    for (var i = 0; i < TVet; i++){
        for (var j = 0; j < TVet; j++){
            if (vetor[i] < vetor[j]){
                aux = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = aux;
            }
        }
    }
}*/

const Vet2 = OrganizaVet(Vet,VetTamanho)
function OrganizaVet(vetor, TVet) {
    var vetaux = GeradorV(TVet)
    var aux
    

    for(var i = 0; i<TVet;i++){
        vetaux[i]=vetor[i]
    }

    for(var i = 0; i<TVet;i++){
        for(var j = 0; j<TVet;j++)
        {
            if(vetaux[i]<vetaux[j])
            {   
                aux=vetaux[i]
                vetaux[i]=vetaux[j]
                vetaux[j]=aux

            }
        }
    }
    return vetaux
    
}


/*document.write('<p> Vetor gerado </p>')*/
document.body.appendChild(geradorTable(Vet))

/*document.write('<p> Vetor organizado </p>')*/
document.body.appendChild(geradorTable(Vet2))

function geradorTable(Vetor) {
    const table = document.createElement("table");
    table.classList.add("tabela");
    const tr = document.createElement("tr");

    for (var j = 0; j < VetTamanho; j++) {
        const td = document.createElement("td");
        const p = document.createElement("p")
        p.textContent = Vetor[j]
        td.appendChild(p);
        tr.appendChild(td);
    }

    table.appendChild(tr);
    return table
}
