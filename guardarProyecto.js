// Función para convertir un canvas (firma) a base64
function getSignatureDataURL(canvasId) {
  const canvas = document.getElementById(canvasId);
  return canvas ? canvas.toDataURL() : null;
}

// Guardar
document.getElementById("guardarProyectoBtn").addEventListener("click", () => {
  const data = {
    vehiculo: document.getElementById("vehiculoInput")?.value || "",
    seguridad: document.getElementById("seguridadInput")?.value || "",
    observaciones: document.getElementById("observacionesInput")?.value || "",
    combustible: document.getElementById("combustibleInput")?.value || "",
    firmaIngreso: getSignatureDataURL("firmaCanvasIngreso"),
    firmaSalida: getSignatureDataURL("firmaCanvasSalida")
  };

  const blob = new Blob([JSON.stringify(data)], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "proyecto_guardado.txt";
  link.click();
});

// Abrir
document.getElementById("abrirProyectoBtn").addEventListener("click", () => {
  document.getElementById("abrirProyectoInput").click();
});

document.getElementById("abrirProyectoInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = JSON.parse(e.target.result);
    document.getElementById("vehiculoInput").value = data.vehiculo;
    document.getElementById("seguridadInput").value = data.seguridad;
    document.getElementById("observacionesInput").value = data.observaciones;
    document.getElementById("combustibleInput").value = data.combustible;

    const ingresoCanvas = document.getElementById("firmaCanvasIngreso");
    const salidaCanvas = document.getElementById("firmaCanvasSalida");
    const ingresoCtx = ingresoCanvas.getContext("2d");
    const salidaCtx = salidaCanvas.getContext("2d");

    const img1 = new Image();
    img1.onload = () => ingresoCtx.drawImage(img1, 0, 0);
    img1.src = data.firmaIngreso;

    const img2 = new Image();
    img2.onload = () => salidaCtx.drawImage(img2, 0, 0);
    img2.src = data.firmaSalida;
  };
  reader.readAsText(file);
});

// Generar nuevo checklist
document.getElementById("nuevoChecklistBtn").addEventListener("click", () => {
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });

  // Limpiar canvas de firmas
  ["firmaCanvasIngreso", "firmaCanvasSalida"].forEach(id => {
    const canvas = document.getElementById(id);
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" });
});
