document.addEventListener('DOMContentLoaded', function () {
    // Muestra el mensaje
    var procedimientoDiv = document.getElementById('procedimientoDiv');
    procedimientoDiv.style.display = 'block';

    // Oculta el mensaje después de 5 segundos
    setTimeout(function () {
        procedimientoDiv.style.display = 'none';
    }, 5000); // 5000 milisegundos = 5 segundos
});
function toggleCheckbox(checkboxId, otherCheckboxId, inputId, otherInputId) {
    var checkbox = document.getElementById(checkboxId);
    var otherCheckbox = document.getElementById(otherCheckboxId);
    var input = document.getElementById(inputId);
    var otherInput = document.getElementById(otherInputId);

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            otherCheckbox.checked = false;
            input.disabled = false;
            otherInput.disabled = true;
        } else {
            input.disabled = true;
            otherInput.disabled = false;
            otherInput.value = '';
        }
    });
}



