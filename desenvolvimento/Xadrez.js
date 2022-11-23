var N = 8
var n1=1
var NLinhas = N;
var NColunas = N;
var CorQuadrados = ['<td class="TBrancas">','<td class="TPretas">']

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

document.write('<table class="tabela">');
for (i = 0; i < NLinhas; i++) {
  document.write("<tr>");


  for (j = 0; j < NColunas; j++) {

    //Gerador das cores das peças
    if (n1 % 2 === 0) {
      document.write(CorQuadrados[1]);
    } else {
      document.write(CorQuadrados[0]);
    }
    n1++;

    //gerador da posição das peças
    switch (i) {
      //peças pretas
      case 0:
        document.write(
            '<div id="'+(i + 1),(j + 1)+'" class="preta"> <img src="'+Pecas[j]+'"alt=""></img> </div>'
        );
        document.write("</td>");
        break;

      case 1:
        document.write(
            '<div id="'+(i + 1),(j + 1)+'" class="preta"> <img src="'+Pecas[8]+'"alt=""></img> </div>'
        );
        document.write("</td>");
        break;

      //peças brancas
      case 6:
        document.write(
            '<div id="'+(i + 1),(j + 1)+'" class="branca"> <img src="'+Pecas[8]+'"alt=""></img> </div>'
        );
        document.write("</td>");
        break;
      case 7:
        document.write(
            '<div id="'+(i + 1),(j + 1)+'" class="branca"> <img src="'+Pecas[j]+'"alt=""></img> </div>'
        );
        document.write("</td>");
        break;
      default:
        document.write('<div id="' + (i + 1), (j + 1) +'"> </div>');
        document.write("</td>");
    }
  }
  n1++;
  document.write("</tr>");
}
document.write("</table>");
