precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidad = 0

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad

function sumar() {
    cantidad = cantidad + 1
    document.querySelector(".cantidad").innerHTML = cantidad
}

function restar() {
    if (Number(cantidad) == 0) {
        return
    }
    cantidad = cantidad - 1
    document.querySelector(".cantidad").innerHTML = cantidad
}

function calcular() {
    if (Number(cantidad) == 0) {
        document.querySelector(".valor-total").innerHTML = 0
        return
    }
    total = Number(total) - Number(precio)
    document.querySelector(".valor-total").innerHTML = total
}

function multiplicar() {
    total = Number(precio) * Number(cantidad)
    document.querySelector(".valor-total").innerHTML = total
}