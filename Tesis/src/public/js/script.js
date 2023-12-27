
function actualizarArea() {
    var areaSelect = document.getElementById("area");
    var subAreaSelect = document.getElementById("subArea");

    // Limpiar opciones anteriores
    subAreaSelect.innerHTML = "";

    // Agregar opciones según el área seleccionada
    if (areaSelect.value === "Decanato") {
        var opcionesSubArea = ["Secretaria de Decanato", "Secretaria de Titulación"];
    } else if (areaSelect.value === "Subdecanato") {
        var opcionesSubArea = ["a", "b"]; // Aquí se debe manejar los diferentes cargos de subdecanato
    } else if (areaSelect.value === "Jefatura de Departamento") {
        var opcionesSubArea = ["c", "d"]; // Aquí se debe manejar los diferentes cargos de jefatura
    }

    // Crear y agregar opciones al seleccionar subArea
    for (var i = 0; i < opcionesSubArea.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesSubArea[i];
        opcion.text = opcionesSubArea[i];
        subAreaSelect.add(opcion);
    }

    // Actualizar las opciones del departamento
    actualizarTipoDocumento();
}

function actualizarTipoDocumento() {
    var areaSelect = document.getElementById("area");
    var subAreaSelect = document.getElementById("subArea");
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    
    // Limpiar opciones anteriores
    
    tipoDocumentoSelect.innerHTML = "";
      //Decanato
      if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Decanato") {
          var opcionesTipoDocumento = ["Consejo de Facultad", "Solicitud de Estudiantes", "Procesos Electorales", "Inventario FIS"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Titulación") {
          var opcionesTipoDocumento = ["Designación de Revisores Calificadores", "Expedientes de Grado", "Pensum", "Comisiones"];
      //Subdecanato
      } else if (areaSelect.value === "subdecanato") {
          var opcionesTipoDocumento = ["opciónA", "opciónB", "opciónC"];
      //Jefatura  
      } else if (areaSelect.value === "jefatura") {
          var opcionesTipoDocumento = ["opciónC1", "opciónD1", "opciónE1"];
      }

    // Crear y agregar opciones al select de tipoDocumento
    for (var i = 0; i < opcionesTipoDocumento.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesTipoDocumento[i];
        opcion.text = opcionesTipoDocumento[i];
        tipoDocumentoSelect.add(opcion);
    }

    // Crear y agregar opciones al select de subTipoDocumento
    actualizarSubtipoDocumento();

}

function actualizarSubtipoDocumento() {
    var areaSelect = document.getElementById("area");
    var subAreaSelect = document.getElementById("subArea");
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var subTipoDocumentoSelect = document.getElementById("subTipoDocumento");

    // Limpiar opciones anteriores
    
    subTipoDocumentoSelect.innerHTML = "";

    if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Consejo de Facultad") {
          var opcionesSubTipoDocumento = ["Actas/Resoluciones"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Solicitud de Estudiantes") {
          var opcionesSubTipoDocumento = ["Formularios de Autorización"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Procesos Electorales") {
          var opcionesSubTipoDocumento = ["Actas de Procesos Electorales"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Inventario FIS") {
          var opcionesSubTipoDocumento = ["Bienes"];
      }
      //Titulacion
      else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Designación de Revisores Calificadores") {
          var opcionesSubTipoDocumento = ["Pre-Grado"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Expedientes de Grado") {
          var opcionesSubTipoDocumento = ["Pre-Grado"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Pensum") {
          var opcionesSubTipoDocumento = ["Silabos", "Mallas"];
      } else if (areaSelect.value === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Comisiones") {
          var opcionesSubTipoDocumento = ["Practicas Pre-Profesionales"];
      }

    // Crear y agregar opciones al select de SubTipoDocumento
    for (var j = 0; j < opcionesSubTipoDocumento.length; j++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesSubTipoDocumento[j];
        opcion.text = opcionesSubTipoDocumento[j];
        subTipoDocumentoSelect.add(opcion);
    }
    actualizarPeriodo()
}

  function actualizarPeriodo(){
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var periodoSelect = document.getElementById("periodo");

    // Limpiar opciones anteriores
    
    periodoSelect.innerHTML = "";
		//Secretaria de Decanato
    if (tipoDocumentoSelect.value === "Consejo de Facultad"){
          var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
      } else if (tipoDocumentoSelect.value === "Solicitud de Estudiantes") {
          var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
      } else if (tipoDocumentoSelect.value === "Procesos Electorales") {
          var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
      } else if (tipoDocumentoSelect.value === "Inventario FIS") {
          var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
      }
      //Secretaria de Titulacion
      else if (tipoDocumentoSelect.value === "Designación de Revisores Calificadores") {
          var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
      } else if (tipoDocumentoSelect.value === "Expedientes de Grado") {
          var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
      } else if (tipoDocumentoSelect.value === "Pensum") {
          var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
      } else if (tipoDocumentoSelect.value === "Comisiones") {
          var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
      }

    // Crear y agregar opciones al select de subTipoDocumento
    for (var j = 0; j < opcionesPerido.length; j++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesPerido[j];
        opcion.text = opcionesPerido[j];
        periodoSelect.add(opcion);
    }
}

function confirmarEliminacion() {
    // Muestra una ventana de confirmación
    var confirmacion = confirm("¿Está seguro que desea eliminar este archivo?");

    // Si el usuario hace clic en "Aceptar", envía el formulario para eliminar
    if (confirmacion) {
        var deleteForm = document.getElementById('deleteForm');
        deleteForm.submit();
    }
}
// Llamar a actualizarArea al cargar la página para establecer las opciones iniciales
actualizarArea();