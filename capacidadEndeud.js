let ingresos = [];
let gastos = [];

function agregarIngresos() {
    const inputIngresos = document.getElementById("InputIngresos");
    const ingresosValue = Number(inputIngresos.value);

    const inputTiposIngresos = document.getElementById("InputTiposIngresos")
    const tiposIngresosValue = inputTiposIngresos.value;

    ingresos.push({ingresosValue, tiposIngresosValue});
}

function agregarGastos() {
    const inputGastos = document.getElementById("InputGastos");
    const gastosValue = Number(inputGastos.value);

    const inputTiposGastos = document.getElementById("InputTiposGastos")
    const tiposGastosValue = inputTiposGastos.value;

    gastos.push({gastosValue, tiposGastosValue});
}


function sumarIngresos(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i].ingresosValue;
    }
    return suma;
}

function sumarGastos(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i].gastosValue;
    }
    return suma;
}

function calcularCapacidadEndeud() {

    const sumaIngresos = sumarIngresos(ingresos);
    const sumaGastos = sumarGastos(gastos);


    

    const h2ResultIngresos = document.getElementById("h2ResultIngresos");
    h2ResultIngresos.innerText = "Ingresos totales: $" + sumaIngresos;

    const resultIngresos = document.getElementById("resultIngresos");
    resultIngresos.innerText = "";

    const imprimirIngreso = ingresos.forEach(ingreso => {
        resultIngresos.innerText = `${resultIngresos.innerText} 
        ${ingreso.tiposIngresosValue} | ${ingreso.ingresosValue}`;
    });

    
    const h2ResultGastos = document.getElementById("h2ResultGastos");
    h2ResultGastos.innerText = "Gastos totales: $" + sumaGastos;

    const resultGastos = document.getElementById("resultGastos");
    resultGastos.innerText = "";

    const imprimirGasto = gastos.forEach(gasto => {
        resultGastos.innerText = `${resultGastos.innerText} 
        ${gasto.tiposGastosValue} | ${gasto.gastosValue}`;
    });


    const capacidadEndeudamiento = (sumaIngresos - sumaGastos) * 0.35;
    const inputH1 = document.getElementById("inputH1");
    inputH1.innerText = "";
    inputH1.innerText = `$${inputH1.innerText} ${capacidadEndeudamiento.toFixed(2)}`;
}