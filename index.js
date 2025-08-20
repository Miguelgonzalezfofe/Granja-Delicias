document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
    })

    

})
function mensajeWhatsapp(producto) {
        let mensaje = "Hola quiero realizar un pedido de " + producto
        window.location.href = `https://wa.me/+541167554915?text=${mensaje}`
    }


