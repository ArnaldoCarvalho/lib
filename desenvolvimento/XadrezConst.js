var N = 8
var n1=1
var NLinhas = N;
var NColunas = N;
var CorQuadrados = ['TBrancas','TPretas']

const NameP=[
    'torre',
    'cavalo',
    'bispo',
    'rainha',
    'rei',
    'bispo',
    'cavalo',
    'torre',
    'pião',
]

const Pecas=[
    'imgs/Torre.png',
    'imgs/Cavalo.png',
    'imgs/bispo.png',
    'imgs/Rainha.png',
    'imgs/Rei.png',
    'imgs/bispo.png',
    'imgs/Cavalo.png',
    'imgs/Torre.png',
    'imgs/pião.png'
]


const table = document.createElement('table')
table.classList.add('tabela')

for (i = 0; i < NLinhas; i++) {
  const tr = document.createElement('tr')

  for (j = 0; j < NColunas; j++) {

    const td = document.createElement('td')
    //Gerador das cores das peças
    if (n1 % 2 === 0) {
      td.classList.add(CorQuadrados[1])
    } else {
      td.classList.add(CorQuadrados[0])
    }

    const div = document.createElement('div')
    if (i === 0 || i === 1 || i === 6 || i === 7) {

      const img = document.createElement("img");

      switch (i) {
        //peças pretas
        case 0:
          div.classList.add("preta");
          img.src = Pecas[j];
          break;

        case 1:
          div.classList.add("preta");
          img.src = Pecas[8];
          break;

        //peças brancas
        case 6:
          div.classList.add("branca");
          img.src = Pecas[8];
          break;

        case 7:
          div.classList.add("branca");
          img.src = Pecas[j];
          break;

        default:
      }
      div.appendChild(img)
    }

    td.appendChild(div)
    tr.appendChild(td)
    n1++;
    
  }
  n1++;
  table.appendChild(tr)

}

document.body.appendChild(table)