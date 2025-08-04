// Obtener elementos del DOM
const firmaIngresoCanvas = document.getElementById('firmaIngresoCanvas');
const ctxIngreso = firmaIngresoCanvas ? firmaIngresoCanvas.getContext('2d') : null;

const firmaSalidaCanvas = document.getElementById('firmaSalidaCanvas');
const ctxSalida = firmaSalidaCanvas ? firmaSalidaCanvas.getContext('2d') : null;

// Variables para la firma de ingreso
let dibujandoIngreso = false;
let xAnteriorIngreso = 0;
let yAnteriorIngreso = 0;

// Variables para la firma de salida
let dibujandoSalida = false;
let xAnteriorSalida = 0;
let yAnteriorSalida = 0;

// Configurar tamaño de los canvas y estilos
function configurarCanvasFirmas() {
    if (firmaIngresoCanvas && ctxIngreso) {
        firmaIngresoCanvas.width = firmaIngresoCanvas.offsetWidth;
        firmaIngresoCanvas.height = firmaIngresoCanvas.offsetHeight;
        ctxIngreso.lineWidth = 2;
        ctxIngreso.lineCap = 'round';
        ctxIngreso.strokeStyle = '#000';
    }

    if (firmaSalidaCanvas && ctxSalida) {
        firmaSalidaCanvas.width = firmaSalidaCanvas.offsetWidth;
        firmaSalidaCanvas.height = firmaSalidaCanvas.offsetHeight;
        ctxSalida.lineWidth = 2;
        ctxSalida.lineCap = 'round';
        ctxSalida.strokeStyle = '#000';
    }
}

// Función de dibujo general
function obtenerPosicion(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const clienteX = e.touches ? e.touches[0].clientX : e.clientX;
    const clienteY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clienteX - rect.left, y: clienteY - rect.top };
}

// Dibujo ingreso
function dibujarIngreso(e) {
    if (!dibujandoIngreso || !ctxIngreso) return;
    const { x, y } = obtenerPosicion(e, firmaIngresoCanvas);
    ctxIngreso.beginPath();
    ctxIngreso.moveTo(xAnteriorIngreso, yAnteriorIngreso);
    ctxIngreso.lineTo(x, y);
    ctxIngreso.stroke();
    [xAnteriorIngreso, yAnteriorIngreso] = [x, y];
}

// Dibujo salida
function dibujarSalida(e) {
    if (!dibujandoSalida || !ctxSalida) return;
    const { x, y } = obtenerPosicion(e, firmaSalidaCanvas);
    ctxSalida.beginPath();
    ctxSalida.moveTo(xAnteriorSalida, yAnteriorSalida);
    ctxSalida.lineTo(x, y);
    ctxSalida.stroke();
    [xAnteriorSalida, yAnteriorSalida] = [x, y];
}

// Eventos para firma ingreso
if (firmaIngresoCanvas) {
    firmaIngresoCanvas.addEventListener('mousedown', e => {
        dibujandoIngreso = true;
        const pos = obtenerPosicion(e, firmaIngresoCanvas);
        [xAnteriorIngreso, yAnteriorIngreso] = [pos.x, pos.y];
    });
    firmaIngresoCanvas.addEventListener('mousemove', dibujarIngreso);
    firmaIngresoCanvas.addEventListener('mouseup', () => dibujandoIngreso = false);
    firmaIngresoCanvas.addEventListener('mouseout', () => dibujandoIngreso = false);
    firmaIngresoCanvas.addEventListener('touchstart', e => {
        e.preventDefault();
        dibujandoIngreso = true;
        const pos = obtenerPosicion(e, firmaIngresoCanvas);
        [xAnteriorIngreso, yAnteriorIngreso] = [pos.x, pos.y];
    }, { passive: false });
    firmaIngresoCanvas.addEventListener('touchmove', e => {
        e.preventDefault();
        dibujarIngreso(e);
    }, { passive: false });
    firmaIngresoCanvas.addEventListener('touchend', () => dibujandoIngreso = false);
    firmaIngresoCanvas.addEventListener('touchcancel', () => dibujandoIngreso = false);
}

// Eventos para firma salida
if (firmaSalidaCanvas) {
    firmaSalidaCanvas.addEventListener('mousedown', e => {
        dibujandoSalida = true;
        const pos = obtenerPosicion(e, firmaSalidaCanvas);
        [xAnteriorSalida, yAnteriorSalida] = [pos.x, pos.y];
    });
    firmaSalidaCanvas.addEventListener('mousemove', dibujarSalida);
    firmaSalidaCanvas.addEventListener('mouseup', () => dibujandoSalida = false);
    firmaSalidaCanvas.addEventListener('mouseout', () => dibujandoSalida = false);
    firmaSalidaCanvas.addEventListener('touchstart', e => {
        e.preventDefault();
        dibujandoSalida = true;
        const pos = obtenerPosicion(e, firmaSalidaCanvas);
        [xAnteriorSalida, yAnteriorSalida] = [pos.x, pos.y];
    }, { passive: false });
    firmaSalidaCanvas.addEventListener('touchmove', e => {
        e.preventDefault();
        dibujarSalida(e);
    }, { passive: false });
    firmaSalidaCanvas.addEventListener('touchend', () => dibujandoSalida = false);
    firmaSalidaCanvas.addEventListener('touchcancel', () => dibujandoSalida = false);
}

// Botones de limpieza
const botonLimpiarIngreso = document.getElementById('clearSignatureIngreso');
if (botonLimpiarIngreso && ctxIngreso) {
    botonLimpiarIngreso.addEventListener('click', () => {
        ctxIngreso.clearRect(0, 0, firmaIngresoCanvas.width, firmaIngresoCanvas.height);
    });
}

const botonLimpiarSalida = document.getElementById('clearSignatureSalida');
if (botonLimpiarSalida && ctxSalida) {
    botonLimpiarSalida.addEventListener('click', () => {
        ctxSalida.clearRect(0, 0, firmaSalidaCanvas.width, firmaSalidaCanvas.height);
    });
}

// Inicializar al cargar y redimensionar
window.addEventListener('load', configurarCanvasFirmas);
window.addEventListener('resize', configurarCanvasFirmas);

  function toggleCantidad(item, mostrar) {
    const cantidadInput = document.getElementById(`cantidad_${item}`);
    if (cantidadInput) {
      cantidadInput.classList.toggle('hidden', !mostrar);
    }
  }

document.getElementById('mainFabBtn').addEventListener('click', function() {
  const container = document.querySelector('.fab-container');
  container.classList.toggle('open');
});

    const fechaIngresoInput = document.getElementById("fecha_ingreso");
    const fechaSalidaInput = document.getElementById("fecha_salida");

    fechaIngresoInput.addEventListener("change", () => {
        const fechaIngreso = fechaIngresoInput.value;
        fechaSalidaInput.min = fechaIngreso; // No se podrá elegir una fecha anterior
        if (fechaSalidaInput.value < fechaIngreso) {
            fechaSalidaInput.value = ""; // Limpia si ya estaba una fecha inválida
        }
    });

    const clearSignatureSalidaBtn = document.getElementById("clearSignatureSalida");

    fechaSalidaInput.addEventListener("change", () => {
        if (fechaSalidaInput.value) {
            firmaSalidaCanvas.style.pointerEvents = "auto";
            firmaSalidaCanvas.style.opacity = "1";
            clearSignatureSalidaBtn.disabled = false;
        } else {
            firmaSalidaCanvas.style.pointerEvents = "none";
            firmaSalidaCanvas.style.opacity = "0.5";
            clearSignatureSalidaBtn.disabled = true;
        }
    });
document.getElementById('btnGenerarPDF').addEventListener('click', function() {
    const btn = this;
    const btnText = document.getElementById('btn-text');
    const spinner = document.getElementById('loading-spinner');

    // Paso 1: Antes de generar el PDF, muestra el spinner
    btnText.style.display = 'none';
    spinner.style.display = 'block';
    btn.disabled = true; // Deshabilita el botón para evitar clics múltiples

    // Simulación de una tarea que tarda 2 segundos
    setTimeout(() => {
        // Paso 2: Después de generar el PDF, oculta el spinner
        btnText.style.display = 'block';
        spinner.style.display = 'none';
        btn.disabled = false; // Vuelve a habilitar el botón

        // Llama a la función que muestra el mensaje de éxito o error
        // Aquí deberías poner la condición de si fue exitoso o no
        const pdfGeneradoExitosamente = true; // Cambia esto con tu lógica real

        if (pdfGeneradoExitosamente) {
            mostrarMensaje('success', '¡PDF generado con éxito!');
        } else {
            mostrarMensaje('error', 'Ocurrió un error al generar el PDF. Inténtalo de nuevo.');
        }
    }, 2000); // 2 segundos
});

// Función para mostrar mensajes de feedback
function mostrarMensaje(tipo, texto) {
    const mensajeFeedback = document.getElementById('mensaje-feedback');

    // Limpia las clases previas
    mensajeFeedback.classList.remove('success', 'error', 'info');

    // Asigna la clase y el texto correctos
    mensajeFeedback.classList.add(tipo);
    mensajeFeedback.textContent = texto;

    // Asegúrate de que el mensaje se muestre
    mensajeFeedback.style.display = 'block';
    // Reinicia la animación para que se active cada vez
    mensajeFeedback.style.animation = 'none';
    // Pequeño truco para reiniciar la animación
    mensajeFeedback.offsetHeight; 
    mensajeFeedback.style.animation = 'fadeInOut 5s forwards';

    // Oculta el mensaje después de la animación (5 segundos)
    setTimeout(() => {
        mensajeFeedback.style.display = 'none';
    }, 5000);
}