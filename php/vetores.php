<?php

function index($array){
    $key=array(count($array));  
    $i = 0;
    echo count($array);
    foreach($array as $x=>$val) { 
        $key[$i]=$x;
        $i = $i+1;
    }

    return $key;
}


function VerificaVazio($array,$Ncampos,$location = null){ 
    $Ncampos = $Ncampos == null ? count($array) :$Ncampos;
    $location = $location == null ? 'Location: ../index.php' : 'Location: '.$location;
    $key=index($array);

    for($i=0;$i<count($key);$i++)
    {
        if($array[$key[$i]]===""){
            header($location.'?ERRO=1');
            exit();
        }
    }

    if(count($array)!= $Ncampos){
        header($location.'?ERRO=1');
        exit();
    }

}



function pr($arr)
{
    //echo '<h1>' . $arr . '</h1>';
    echo '<pre>';
    print_r($arr);
    echo '</pre>';
}




