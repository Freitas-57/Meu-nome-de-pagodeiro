mes.onchange = ()=> {
    switch(mes.value.toLowercase()){
        case "janeiro":
            nome.innerHTML = "Rei"
        break;
        case "fevereiro":
            nome.innerHTML = "Mô"
        break;
            
    }
}