//conversão de km para milhas e milhas para km
function kmParaMilha(km){
    return km*0.621371
}

function milhaPraKm(milhas){
    return milhas / 0.621371
}

//conversão de pés para metros e metros para pés
function pesParaMetros(pes){
    return pes * 0.3048
}
function metrosParaPes(metros){
    return metros / 0.3048
}

//conversão de polegadas para centímetros e centímetros para polegadas
function polegadasParaCm(polegadas){
    return polegadas * 2.54
}
function cmParaPolegadas(cm){
    return cm / 2.54
}
module.exports ={
    kmParaMilha,
    milhaPraKm,
    pesParaMetros,
    metrosParaPes,
    polegadasParaCm,
    cmParaPolegadas
}

export default{
    kmParaMilha,
    milhaPraKm,
    pesParaMetros,
    metrosParaPes,
    polegadasParaCm,
    cmParaPolegadas
}