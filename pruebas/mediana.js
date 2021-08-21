const lista = [
    100,
    200,
    500,
    300

];

function esPar(numerito) {
    if(numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(lista) {
    lista.sort(
        function(a,b){
            return a - b;
        }
    );
    const medioLista = parseInt(lista.length / 2);    

    let media;

    if(esPar(lista.length)) {
        media = calcularPromedio([
            lista[medioLista],
            lista[medioLista - 1]
        ]);
    } else {
        media = lista[medioLista];
    }
    return media;
}

function calcularPromedio(lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}