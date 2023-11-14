document.addEventListener('DOMContentLoaded', function () {
    // Muestra el mensaje
    var procedimientoDiv = document.getElementById('procedimientoDiv');
    procedimientoDiv.style.display = 'block';

    // Oculta el mensaje después de 5 segundos
    setTimeout(function () {
        procedimientoDiv.style.display = 'none';
    }, 5000); // 5000 milisegundos = 5 segundos
});


function generarSKU() {
    // Implementa la lógica de generación de SKU en JavaScript si es necesario
    // ...

    // Puedes utilizar AJAX para manejar la respuesta del servidor y mostrar el SKU en el formulario
    $.ajax({
        type: 'POST',
        url: '{% url "generar_sku" %}',
        data: $('#skuForm').serialize(),
        success: function(response) {
            $('#skugen').val(response.sku);
        },
        error: function(error) {
            console.log(error);
        }
    });
}


