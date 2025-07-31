document.getElementById("abrirProyectoBtn").addEventListener("click", function () {
  // Crea un input de tipo file para seleccionar un archivo JSON
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.addEventListener("change", function (e) {
    const archivo = e.target.files[0];
    const reader = new FileReader();

        reader.onload = function () {
        const datos = JSON.parse(reader.result);

        for (const clave in datos) {
            const elemento = document.getElementById(clave);
            if (elemento) {
            if (elemento.type === "checkbox") {
                elemento.checked = datos[clave];
            } else {
                elemento.value = datos[clave];
            }
            }
        }
        };


    reader.readAsText(archivo);  // Lee el archivo
  });

  input.click();  // Abre el selector de archivos
});
