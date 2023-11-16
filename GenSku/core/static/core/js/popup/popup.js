document.addEventListener('DOMContentLoaded', function () {
    // Muestra el mensaje
    var procedimientoDiv = document.getElementById('procedimientoDiv');
    procedimientoDiv.style.display = 'block';

    // Oculta el mensaje después de 5 segundos
    setTimeout(function () {
        procedimientoDiv.style.display = 'none';
    }, 5000); // 5000 milisegundos = 5 segundos
});
function validarNumero(input) {
    // Eliminar cualquier carácter no numérico
    input.value = input.value.replace(/[^0-9]/g, '');

    // Mostrar un mensaje de error si no se ingresa un número
    var mensajeError = document.getElementById("mensajeError");
    if (isNaN(input.value)) {
        mensajeError.innerHTML = "Por favor, ingresa solo valores numéricos.";
    } else {
        mensajeError.innerHTML = "";
    }
}

function validarFormulario() {
    var marca = document.getElementById("marca").value;
    var nombre = document.getElementById("nombre").value;
    var categoria = document.getElementById("categoria").value;
    var opcionUnidades = document.getElementById("opcionUnidades").checked;
    var opcionPeso = document.getElementById("opcionPeso").checked;
    var unikg = document.getElementById("unikg").value;

    if (marca === "" || nombre === "" || categoria === "" || (!opcionUnidades && !opcionPeso) || unikg === "") {
      alert("Por favor, completa todos los campos.");
    } else {
      document.getElementById("skuForm").submit();
    }
  }

  function validarNumero(input) {
    // Puedes agregar lógica de validación específica para el campo numérico si es necesario.
  }