const resultado = document.getElementById('nombre');

const texto = localStorage.getItem('texto');

resultado.innerHTML = "Usted escribio: " + texto;