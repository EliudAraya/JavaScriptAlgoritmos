const OrdenadoBurbuja = require('./OrdenadoBurbuja');

test('OrdenadoBurbuja', () => { 
    let Lista = [25,5,10,65,84,30];
    let longitud = Lista.length;
    let ListaOrdenada = OrdenadoBurbuja(Lista, longitud);

    expect(ListaOrdenada).toEqual([5,10,25,30,65,84]);
 })