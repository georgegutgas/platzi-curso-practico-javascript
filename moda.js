// const lista1 = [
//     1,
//     2,
//     3,
//     1,
//     2,
//     3,
//     4,
//     2,
//     2,
//     2,
//     1
// ];

function calcularModa(lista) {
    const listaCount = {};

    lista.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento]++;
            } else {
                listaCount[elemento] = 1;
            }
            
        }
    )
    const listaArray = Object.entries(listaCount).sort(
        function(elemento1, elemento2) {
        return elemento1[1] - elemento2[1];
      }
    );
    
    const moda = listaArray[listaArray.length - 1];
    return moda;
}



// Convertir objeto en Array
// const lista1Array = Object.entries(lista1Count).sort(
//     // function(valorAcumulado, nuevoValor){}
//     function(valorAcumulado, nuevoValor){

//     }

// );

