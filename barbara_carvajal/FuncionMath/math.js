/*Math.random(): La función Math.random() genera un número aleatorio entre 0 y 1. 
Es útil para generar números aleatorios para aplicaciones como juegos y simulaciones.*/

function cambiarColor() {
    // Creamos un array con distintos colores
    var colores = ["red", "purple", "orange", "black", "white","pink", "hotpink", "coral"];
    
    // Generamos un número aleatorio entre 0 y la longitud del array "colores" utilizando Math.random()
    // y Math.floor() para redondear hacia abajo y obtener un índice válido dentro del array
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    
    // Seleccionamos el elemento "body" del documento HTML y le asignamos el color aleatorio obtenido anteriormente
    document.body.style.backgroundColor = colorAleatorio;
    }
    
    // Cuando se llame a la función "cambiarColor()", el color de fondo del documento se actualizará al color aleatorio obtenido