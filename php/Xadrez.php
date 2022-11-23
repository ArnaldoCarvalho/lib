<?php
$N = 8;
$n1 = 1;
$NLinhas = $N;
$NColunas = $N;
$CorQuadrados = ['TBrancas','TPretas'];

$NameP=[
    'torre',
    'cavalo',
    'bispo',
    'rainha',
    'rei',
    'bispo',
    'cavalo',
    'torre',
    'pião',
];

$Pecas=[
    'imgs/Torre.png',
    'imgs/Cavalo.png',
    'imgs/bispo.png',
    'imgs/Rainha.png',
    'imgs/Rei.png',
    'imgs/bispo.png',
    'imgs/Cavalo.png',
    'imgs/Torre.png',
    'imgs/pião.png'
];


echo ('<table class="tabela">');

for ($i = 0; $i < $NLinhas; $i++) {
  echo ('<tr>');

  for ($j = 0; $j < $NColunas; $j++) {
    $td = "";
    if ($n1 % 2 === 0) {
        $td ='<td class="'.$CorQuadrados[1];
    } else {
        $td ='<td class="'.$CorQuadrados[0];
    }

        $img = "";
        if ($i === 0 || $i === 1 || $i === 6 || $i === 7) {
            switch ($i) {
                //peças pretas
                case 0:
                    $td = $td .' preta';
                    $img = '<img src='.$Pecas[$j].'>';
                    break;

                case 1:
                    $td = $td .' preta';
                    $img = '<img src='.$Pecas[8].'>';
                    break;

                //peças brancas
                case 6:
                    $td = $td .' branca';
                    $img = '<img src='.$Pecas[8].'>';
                    break;

                case 7:
                    $td = $td .' branca';
                    $img = '<img src='.$Pecas[$j].'>';
                    break;

                default:    
            };
            
        };
        echo $td .'">' . $img;
        echo '</td>';
        $n1++;

    };
    $n1++;
    echo '</tr>';

};

echo '</table>';
?>