const OrdenadoBurbuja = (Lista, Longitud) => {

    if(Longitud == 0 || Longitud == 1)
        return Lista;

    let valorAuxiliar;
    for (let indice = 0; indice < Lista.length - 1; indice++) {
        if(Lista[indice] > Lista[indice + 1]){
            valorAuxiliar = Lista[indice];
            Lista[indice] = Lista[indice + 1];
            Lista[indice + 1] = valorAuxiliar;
        }
    }
    OrdenadoBurbuja(Lista, Longitud - 1);
    return Lista;
}
module.exports = OrdenadoBurbuja;