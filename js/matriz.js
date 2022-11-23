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

module.exports={
    Create:Create,
    SetInt:SetInt,
    SetString:SetString,
}

