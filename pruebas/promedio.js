const lista = [
    100,
    200,
    500,
    300
];


// function calcularPromedio(lista) {
//     let sumaLista = 0;

//     for(let i = 0; i < lista.length; i++) {
//         sumaLista += lista[i];
//     }

//     const promedio = sumaLista / lista.length;
//     return promedio;
// }

// Con el metodo reduce

function calcularPromedio(lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}