document.getElementById("btnComprar").addEventListener("click", calcularTotal);

function calcularTotal() {
    const precios = [1500, 8000, 20000, 500];
    const cantidades = [
        parseInt(document.getElementById('prod1').value) || 0,
        parseInt(document.getElementById('prod2').value) || 0,
        parseInt(document.getElementById('prod3').value) || 0,
        parseInt(document.getElementById('prod4').value) || 0
    ];

    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i] * cantidades[i];
    }

    const resultado = document.getElementById('resultado');
    resultado.textContent = `El total es: $${total}`;

    if (total > 0) {
        alert(`Gracias por tu compra. El total es $${total}.`);
    } else {
        alert("Por favor ingresa una cantidad válida antes de comprar.");
    }
}
