function mostrarCalendario(anio, mes) {
    // Obtener el elemento HTML donde se mostrará el calendario
    var calendario = document.getElementById("calendario");
  
    // Crear una tabla para mostrar el calendario
    var tabla = document.createElement("table");
  
    // Crear una fila para los nombres de los días de la semana
    var filaDiasSemana = document.createElement("tr");
    var diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    for (var i = 0; i < diasSemana.length; i++) {
      var celda = document.createElement("th");
      var textoCelda = document.createTextNode(diasSemana[i]);
      celda.appendChild(textoCelda);
      filaDiasSemana.appendChild(celda);
    }
    tabla.appendChild(filaDiasSemana);
  
    // Crear una fecha para el primer día del mes
    var fecha = new Date(anio, mes - 1, 1);
  
    // Obtener el número de días del mes
    var numDiasMes = new Date(anio, mes, 0).getDate();
  
    // Crear filas para cada semana del mes
    var fila = document.createElement("tr");
    for (var i = 0; i < fecha.getDay(); i++) {
      var celda = document.createElement("td");
      fila.appendChild(celda);
    }
    for (var i = 1; i <= numDiasMes; i++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(i);
      celda.appendChild(textoCelda);
      fila.appendChild(celda);
      // Si es el último día de la semana o el último día del mes, crear una nueva fila
      if (fecha.getDay() == 6 && i != numDiasMes) {
        tabla.appendChild(fila);
        fila = document.createElement("tr");
      }
      fecha.setDate(fecha.getDate() + 1);
    }
    // Agregar celdas vacías para completar la última semana
    for (var i = fecha.getDay(); i < 7; i++) {
      var celda = document.createElement("td");
      fila.appendChild(celda);
    }
    tabla.appendChild(fila);
  
    // Agregar la tabla al elemento HTML
    calendario.appendChild(tabla);
  }
