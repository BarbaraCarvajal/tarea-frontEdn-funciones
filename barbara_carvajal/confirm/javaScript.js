// Obtener el elemento a eliminar
let elemento = document.getElementById("mi-elemento");

// Mostrar una ventana de confirmación antes de eliminar el elemento
if (window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
  elemento.parentNode.removeChild(elemento);
}