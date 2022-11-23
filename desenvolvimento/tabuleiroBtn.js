
// Pergunta o tamnho do tabuleiro
function TTabuleiro() {
  var n2;
  do {
    n2 = 0;
    NLinhas = prompt("Indique quantos quadrados para cima");
    NColunas = prompt("Indique quantos quadrados para lado");

    if (NLinhas <= 1) {
      alert("Um dos valores introduzidos é menor ou igual a 1!");
      n2 = 1;
      continue;
    }
    if (NColunas <= 1) {
      alert("Um dos valores introduzidos é menor ou igual a 1!");
      n2 = 1;
    }
  } while (n2 != 0);
}


//  Gerar Tabuleiro com butões
function TabuleiroBtn() {
  const table = document.createElement("table");
  table.classList.add("tabela");

  for (i = 0; i < NLinhas; i++) {
    const tr = document.createElement("tr");

    for (j = 0; j < NColunas; j++) {
      const td = document.createElement("td");
      const btn = document.createElement("button");
      //Gerador das cores das dos quadrados
      if (n1 % 2 === 0) {
        td.classList.add(CorQuadrados[1]);
      } else {
        td.classList.add(CorQuadrados[0]);
      }

      const div = document.createElement("div");
      div.setAttribute("id", (i + 1) + "" + (j + 1));
      n1++;
      btn.setAttribute("onclick", "PosicaoRainha()");
      btn.classList.add("btn");
      btn.setAttribute("id", (i + 1) + "" + (j + 1));
      div.appendChild(btn);
      td.appendChild(div);
      tr.appendChild(td);
    }

    if (NColunas % 2 === 0) {
      n1++;
    }
    table.appendChild(tr);
    return table;
  }
}


// desliga os botões dentro da div
function DesativarBTN(){
    for (i = 0; i < NLinhas; i++) {
      matriz[i] = new Array(NColunas);
      for (j = 0; j < NColunas; j++) {
        document.getElementById(i + 1 + "" + (j + 1)).classList.add("btnoff");
      }
    }
}
