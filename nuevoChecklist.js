// Generar nuevo checklist
document.getElementById("btnNuevoChecklist").addEventListener("click", () => {
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    if (input.type === "checkbox" || input.type === "radio") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });

  // Limpiar canvas de firmas
  ["firmaIngresoCanvas", "firmaSalidaCanvas"].forEach(id => {
    const canvas = document.getElementById(id);
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  // Scroll al inicio
  window.scrollTo({ top: 0, behavior: "smooth" });
});
