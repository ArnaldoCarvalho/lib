const Calcula = require('./math')

//
function Create (T){
    var vet = new Array [T];
    return vet;
}

//
function SetInt (T,vet){
    for(var i=0; i<T ;i++)
    {
        vet[i]=0
    }
    return vet;
}

//
function SetString (T,vet){
    for(var i=0; i<T ;i++)
    {
        vet[i]=""
    }
    return vet;
}

//
function SetRadom (T,vet,max,min){
    for(var i=0; i<T ;i++)
    {
        vet[i]=Calcula.RandomInt(min,max)
    }
    return vet;
}

//
function DuplicateVet (T,vet){
    var Vet2 = Create(T)
    for(var i = 0; i<T;i++){
        Vet2[i]=vet[i]
    }
    return Vet2;
}

//
function OrganizaVet(vet, T) {
    var Vet2 = Create(T)
    var aux = 0;

    Vet2 = DuplicateVet(T,vet)

    for(var i = 0; i<T;i++){
        for(var j = 0; j<T;j++)
        {
            if(Vet2[i]<Vet2[j])
            {   
                aux=Vet2[i]
                Vet2[i]=Vet2[j]
                Vet2[j]=aux

            }
        }
    }
    return Vet2;
     
}

function AdicionaOne(nome,vet,N){
    for (i = 0; i < N; i++) {
        if(vet[i] = '')
        {
            vet[i] = nome
        }
    }
    return vet
}

function RemoveOne(nome,vet,N){
    for (i = 0; i < N; i++) {
        if(vet[i] = nome)
        {
            vet[i]= ''
        }
    }
    return matriz
}

module.exports = {
    Create:Create,
    SetInt:SetInt,
    SetString:SetString,
    SetRadom:SetRadom,
    DuplicateVet:DuplicateVet,
    OrganizaVet:OrganizaVet,
    AdicionaOne:AdicionaOne,
    RemoveOne:RemoveOne,
}