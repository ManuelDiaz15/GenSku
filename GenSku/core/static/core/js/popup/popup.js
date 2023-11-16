document.addEventListener('DOMContentLoaded', function () {
    // Muestra el mensaje
    var procedimientoDiv = document.getElementById('procedimientoDiv');
    procedimientoDiv.style.display = 'block';

    // Oculta el mensaje después de 5 segundos
    setTimeout(function () {
        procedimientoDiv.style.display = 'none';
    }, 5000); // 5000 milisegundos = 5 segundos
});
