function alturaIsosceles(lado1, lado2, base) {
    
    if(lado1 === lado2 && lado1 !== base) {
        let altura = Math.sqrt(Math.pow(lado1, 2) - Math.pow((base / 2), 2))
        alert(altura);
    } else {
        alert("Este no es un triángulo Isósceles! Los dos lados deben ser iguales y la base diferente!");
    }
}

function sacarAltura() {
    const lado1 = document.getElementById('InputLado1');
    const lado2 = document.getElementById('InputLado2');
    const base = document.getElementById('InputBase');

    const valueLado1 = lado1.value;
    const valueLado2 = lado2.value;
    const valueBase = base.value;

    const altura = alturaIsosceles(valueLado1, valueLado2, valueBase);

}


