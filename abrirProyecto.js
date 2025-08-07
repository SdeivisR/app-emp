document.getElementById("abrirProyectoBtn").addEventListener("click", function () {



    // 1. Crea un input de tipo 'file' dinámicamente y lo "clica"
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json'; // Acepta solo archivos .json
    input.style.display = 'none';

    window.scrollTo({ top: 0, behavior: "smooth" });

    // 2. Escucha el evento 'change' cuando el usuario selecciona un archivo
    input.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (!file) {
            return; // No se seleccionó ningún archivo
        }

        // 3. Usa FileReader para leer el archivo
        const reader = new FileReader();
        reader.onload = function (e) {
            try {
                // 4. Parsea el contenido del archivo JSON
                const datosGuardados = JSON.parse(e.target.result);

                // 5. Carga los datos en el formulario
                cargarDatosEnFormulario(datosGuardados);

                // Opcional: muestra un mensaje de éxito
                showNotification("Proyecto cargado correctamente.", "success");
                


            } catch (error) {
                // Opcional: muestra un mensaje de error si el archivo no es un JSON válido
                console.error("Error al leer el archivo JSON:", error);
                showNotification("Error: El archivo no es un formato válido.", "error");
            }
        };

        reader.readAsText(file); // Lee el archivo como texto
    });

    document.body.appendChild(input);
    input.click(); // Abre la ventana de selección de archivos
    document.body.removeChild(input); // Limpia el input del DOM
});

// Función para cargar los datos en los campos del formulario
function cargarDatosEnFormulario(datos) {
    // Itera sobre cada clave del objeto de datos
    for (const key in datos) {
        if (datos.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                // Si el elemento es un checkbox o radio button
                if (element.type === 'checkbox' || element.type === 'radio') {
                    element.checked = datos[key];
                } 
                // Si es un campo de texto, fecha, hora, etc.
                else {
                    element.value = datos[key];
                }
            }
        }
    }
}

function showNotification(mensaje) {
    console.log("[NOTIFICACIÓN] " + mensaje);
}
