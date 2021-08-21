function onClickCoupons() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("InputCoupons");
    const couponsValue = inputCoupons.value;

    let descuentoCupon;

    // PRIMERO CON UN SWITCH 
    // switch(couponsValue) {
    //     case "georgegutgas":
    //         descuentoCupon = 15;
    //         break;
        
    //     case "juanDC":
    //         descuentoCupon = 30;
    //         break;

    //     case "GNDX":
    //         descuentoCupon = 50;
    //         break;
    // }


    // SEGUNDO CON UN .INCLUDES() AL ARRAY 
    // const coupons = [
    //     "georgegutgas",
    //     "juanDC",
    //     "GNDX",
    // ];

    // if(!coupons.includes(couponsValue)) {
    //     alert("Andas valiendo madres! El cupon " + couponsValue + " no es valido");
    // } else if(couponsValue === "georgegutgas") {
    //         descuentoCupon = 15;
    // } else if(couponsValue === "juanDC") {
    //         descuentoCupon = 30;
    // } else if(couponsValue === "GNDX") {
    //         descuentoCupon = 50;
    // }


    // CON UN OBJETO
    const coupons = [
        {
            name: "georgegutgas",
            discount: 15
        },
        {
            name: "juanDC",
            discount: 30
        },
        {
            name: "GNDX",
            discount: 50
        }
    ];

    const isCouponValueValid = function(coupons) {
        return coupons.name === couponsValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if(!userCoupon) {
        alert("Andas valiendo madres! El cupon " + couponsValue + " no es valido")
    } else {
        const descuentoCupon = userCoupon.discount;

        const precioConDescuento = sacarPrecioDescuento(priceValue, descuentoCupon);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "Pase a pagar: $" + precioConDescuento;
    } 

    

}

function sacarPrecioDescuento(precio, descuento) {
    return (precio * (100 - descuento)) / 100;
}

















