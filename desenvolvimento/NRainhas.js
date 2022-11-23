var N = 8
var NLinhas = N;
var NColunas = N;
var CorQuadrados = ['TBrancas','TPretas']
var FirstR = ""
var mat;
const Sid = 100



// tamnho do tabuleiro
TTabuleiro();

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
var n1=1
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
      div.setAttribute("id", (i + Sid) + "" + (j + Sid));
      n1++;
      btn.setAttribute("onclick", "PosicaoRainha()");
      btn.classList.add("btn");
      btn.setAttribute("id", (i + Sid) + "" + (j + Sid));
      div.appendChild(btn);
      td.appendChild(div);
      tr.appendChild(td);
    }

    if (NColunas % 2 === 0) {
      n1++;
    }
    table.appendChild(tr);

  }

  document.body.appendChild(table)






function PosicaoRainha(){

  document.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function (event) {
      const el = event.target
      const id = el.id;
      if(FirstR != "")
      {document.getElementById(FirstR).classList.remove("imagemPeca");}
      document.getElementById(id).classList.add("imagemPeca");

      FirstR=id;

      DesativarBTN()

      mat = GeradorM(NLinhas,NColunas)
      mat = GerarIdM(NLinhas,NColunas,mat)

      mat = CalculadorPosicao( NLinhas,NColunas,mat,FirstR);

      
    });
  });
}

function DesativarBTN(){
  for (i = 0; i < NLinhas; i++) {
    for (j = 0; j < NColunas; j++) {
      document.getElementById((i + Sid) + "" + (j + Sid)).classList.add('btnoff');
    }
  }
}

function GeradorM(lin,col){
  var matriz = new Array (lin);

  for(var i=0; i<lin ;i++)
  {
    matriz[i]=new Array (col)
  }

  return matriz;
}


function GerarIdM(lin,col,matriz){

  for(var i=0; i<lin ;i++)
  {
      for(var j=0; j<col ;j++)
      {
         matriz[i][j] = (i + Sid) + "" + (j + Sid)
      }
  }

  //controlar a matriz pela consola
  for(var i=0; i<lin ;i++)
  {
      for(var j=0; j<col ;j++)
      {
         console.log(matriz[i][j])
      }
  }

  return matriz;
}



function CalculadorPosicao(lin,col,matriz,id){
  for (var i = 0; i < lin; i++) {
    for (var j = 0; j < col; j++) {
      if (matriz[i][j] === id) {
        matriz[i][j] = 1
        console.log(matriz[i][j])

        for (var k = 0; k < lin; k++) {
          for (var l = 0; l < col; l++) {
            console.log(matriz[k][l]);
          }
        }
        PosicaoImpos(i,j,lin,col,matriz)
        
        for (var k = 0; k < lin; k++) {
          for (var l = 0; l < col; l++) {
            
            if (matriz[k][l] != 0) {
              if (matriz[k][l] != 1){
                document.getElementById(matriz[k][l]).classList.add('imagemPeca')
                matriz[k][l] = 1                
                PosicaoImpos(k,l,lin,col,matriz)
              }
            }
          }
        }

      }
    }
  }
  return matriz
}


function PosicaoImpos(PosX,PosY,lin,col,matriz) {

  var PosXsave = PosX
  var PosYsave = PosY

  //esquerda
  do {
    PosY--
    if (PosY >= 0) {
      matriz[PosX][PosY]= 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosY >= 0);

  PosX = PosXsave
  PosY = PosYsave

  //para cima
  do {
    PosX--;
    if (PosX >= 0) {
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX >= 0);
  
  PosX = PosXsave
  PosY = PosYsave


  //direita
  do {
    PosY++
    if (PosY < col) {
      matriz[PosX][PosY]= 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosY <= col);

  PosX = PosXsave
  PosY = PosYsave

  //para baixo
  do {
    PosX++;
    if (PosX < lin) {
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX <= lin);

  PosX = PosXsave
  PosY = PosYsave

  //para cima e direita
  do {
    PosX--;
    PosY++;
    if (PosX >=0 ) if(PosY < col){
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX >= 0);

  PosX = PosXsave
  PosY = PosYsave

  //para cima e esquerda
  do {
    PosX--;
    PosY--;
    if (PosX >=0 ) if(PosY >= 0){
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX >= 0);

  PosX = PosXsave
  PosY = PosYsave

  //para baixo e direita
  do {
    PosX++;
    PosY++;
    if (PosX < lin) if(PosY < col){
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX <= lin);

  PosX = PosXsave
  PosY = PosYsave

  //para baixo e esquerda
  do {
    PosX++;
    PosY--;
    if (PosX < lin) if(PosY >= 0){
      matriz[PosX][PosY] = 0;
      console.log(matriz[PosX][PosY])
    }
    
  } while (PosX <= lin);

}



