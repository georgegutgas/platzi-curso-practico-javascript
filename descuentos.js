// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeAPagar = 100 - descuento;
    const precioConDescuento = (precio * porcentajeAPagar) / 100;
    return precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeAPagar,
//     precioConDescuento
// });


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

