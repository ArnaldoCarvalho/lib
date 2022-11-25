//
function Create (lin,col){
    var matriz = new Array [lin];

    for(var i=0; i<lin ;i++)
    {
        matriz[i]=new Array[col]
    }

    return matriz;
}

//
function SetInt (lin,col,matriz){

    for(var i=0; i<lin ;i++)
    {
        for(var j=0; j<col ;j++)
        {
           matriz[i,j] = 0
        }
    }

    return matriz;
}

//
function SetString (lin,col,matriz){

    for(var i=0; i<lin ;i++)
    {
        for(var j=0; j<col ;j++)
        {
           matriz[i,j] = ""
        }
    }

    return matriz;
}

//
function AdicionaOne(nome,matriz,lin,col){
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if(matriz[i][j] = '')
            {
                matriz[i][j] = nome
    
            }
        }
    }
    return matriz
}

//
function RemoveOne(nome,matriz){
    for (i = 0; i < N; i++) {
        if(matriz[i][j] = nome)
        {
            matriz[i][j]= ''
        }
        
    }
    return matriz
}

module.exports={
    Create:Create,
    SetInt:SetInt,
    SetString:SetString,
    AdicionaOne:AdicionaOne,
    RemoveOne:RemoveOne,
}

