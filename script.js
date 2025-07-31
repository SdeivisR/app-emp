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

