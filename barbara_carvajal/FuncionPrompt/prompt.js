/*La función prompt() muestra una ventana emergente que solicita al usuario que ingrese un valor. 
Es útil para solicitar información al usuario, como una entrada de texto o un valor numérico, 
y luego usar ese valor en el código.*/
let nombre = prompt("Hola! ¿cómo te llamas?");

// Obtener el elemento <h1> del HTML utilizando document.getElementsByTagName()
let mensajeBienvenida = document.getElementsByTagName("p")[0];

// Cambiar el contenido del elemento <h1> utilizando la propiedad innerHTML
mensajeBienvenida.innerHTML = "Mucho gusto " + nombre + "! Te doy la bienvenida :D";
