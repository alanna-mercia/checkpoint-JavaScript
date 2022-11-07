function microondas(tempo,comida){
if(comida==='pipoca'){
        if (tempo>20 ){
        return 'queimou'
    }else if(tempo <10){
        return 'tempo insuficiente'

    } else if(tempo >30){
        return 'kabuum'
    } else{

        return 'Comida pronta,bom apetite!'
    }
}
if(comida==='macarrão'){
    if (tempo>16 ){
    return 'queimou'
}else if(tempo <8){
    return 'tempo insuficiente'

} else if(tempo >24){
    return 'kabuum'
} else{

    return 'Comida pronta,bom apetite!'
}
}
if(comida==='carne'){
    if (tempo>30 ){
    return 'queimou'
}else if(tempo <15){
    return 'tempo insuficiente'

} else if(tempo >45){
    return 'kabuum'
} else{

    return 'Comida pronta,bom apetite!'
}

}
if(comida==='feijão'){
    if (tempo>24 ){
    return 'queimou'
}else if(tempo <12){
    return 'tempo insuficiente'

} else if(tempo >36){
    return 'kabuum'
} else{

    return 'Comida pronta,bom apetite!'
}
}
if(comida==='brigadeiro'){
    if (tempo>16 ){
    return 'queimou'
}else if(tempo <8){
    return 'tempo insuficiente'

} else if(tempo >24){
    return 'kabuum'
} else{

    return 'Comida pronta,bom apetite!'
}
} else{
    return 'prato inexistente'
}
}
console.log(microondas(27, 'beijinho'));