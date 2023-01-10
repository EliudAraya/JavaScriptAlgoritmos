const busquedaBinaria = require('./BusquedaBinaria');

test('Busqueda binaria', () => { 
    let arr = [1,2,3,4,5];
    //limite minimo
    expect(busquedaBinaria(arr, 1)).toEqual(0);
    //limite maximo
    expect(busquedaBinaria(arr, 5)).toEqual(4);
    //fuera del rango
    expect(busquedaBinaria(arr, 6)).toEqual(-1);
 });