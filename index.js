function imprimir(){
    const texto = document.getElementById(`nombre`).value;
    localStorage.setItem(`texto`,texto)
    window.location.href = 'print.html';
}