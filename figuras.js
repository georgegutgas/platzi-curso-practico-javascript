// CUADRADO
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");


// const perimetroCuadrado = ladoCuadrado * 4;
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
function perimetroCuadrado(lado) {
    return lado * 4;
}


// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

// TRIANGULO
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " 
//     + ladoTriangulo1 + "cm, " 
//     + ladoTriangulo2 + "cm, " 
//     + baseTriangulo 
//     + "cm."
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");


// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


// CIRCULO
console.group("Circulo");

// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("El PI equivale: " + PI + "cm");

// const circunferenciaCirculo = diametroCirculo * PI;
// console.log("La circunferencia del circulo es: " + circunferenciaCirculo + "cm");
function circunferenciaCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del circulo es: " + areaCirculo + "cm");
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const inputLado1 =   document.getElementById("InputLado1Triangulo");
    const inputLado2 =   document.getElementById("InputLado2Triangulo");
    const inputBase =   document.getElementById("InputBaseTriangulo");
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const inputBase =   document.getElementById("InputBaseTriangulo");
    const inputAltura =   document.getElementById("InputAlturaTriangulo");

    const valueBase = Number(inputBase.value);
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const inputRadio =   document.getElementById("InputCirculo");
    const valueRadio = Number(inputRadio.value);

    const perimetro = circunferenciaCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio =   document.getElementById("InputCirculo");
    const valueRadio = Number(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}