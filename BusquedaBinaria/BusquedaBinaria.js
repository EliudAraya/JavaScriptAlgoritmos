const busquedaBinaria = (lista, valorDeBusqueda) => {
    let indice = 0,
        rango = lista.length - 1;
    
    while(indice <= rango){
        const mitadDeLista = Math.floor((indice + rango) / 2);
        const valor = lista[mitadDeLista];

        if(valor === valorDeBusqueda) return mitadDeLista;
        if(valor > valorDeBusqueda) rango = mitadDeLista - 1;
        else indice = mitadDeLista + 1;
    }
    return -1;
};

module.exports = busquedaBinaria;