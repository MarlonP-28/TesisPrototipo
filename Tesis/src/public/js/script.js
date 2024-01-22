function actualizarSubArea(areaSelect) {
    var carreraSelect = document.getElementById("carrera");
    var subAreaSelect = document.getElementById("subArea");

    // Limpiar opciones anteriores
    subAreaSelect.innerHTML = "";

    // Agregar opciones según el área seleccionada
    if (areaSelect === "Decanato") {
        var opcionesSubArea = ["Secretaria de Decanato", "Secretaria de Titulación"];
    } else if (areaSelect === "Subdecanato") {
        var opcionesSubArea = ["a", "b"]; // Aquí se debe manejar los diferentes cargos de subdecanato
    } else if (areaSelect === "Jefatura de Departamento") {
        var opcionesSubArea = ["c", "d"]; // Aquí se debe manejar los diferentes cargos de jefatura
    }

    // Crear y agregar opciones al seleccionar subArea
    if (carreraSelect.value === "") {
        subAreaSelect.innerHTML = "";
    } else {
        for (var i = 0; i < opcionesSubArea.length; i++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesSubArea[i];
            opcion.text = opcionesSubArea[i];
            subAreaSelect.add(opcion);
        }
    }



    // Actualizar las opciones del departamento
    actualizarTipoDocumento(areaSelect);
}

function actualizarTipoDocumento(areaSelect) {
    var subAreaSelect = document.getElementById("subArea");
    console.log('tipoDoc ' + areaSelect + ' ' + subAreaSelect.value);
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");

    // Limpiar opciones anteriores

    tipoDocumentoSelect.innerHTML = "";
    //Decanato
    if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato") {
        var opcionesTipoDocumento = ["Consejo de Facultad", "Solicitud de Estudiantes", "Procesos Electorales", "Inventario FIS"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación") {
        var opcionesTipoDocumento = ["Designación de Revisores Calificadores", "Expedientes de Grado", "Pensum", "Comisiones"];

    }
    //Subdecanato
    else if (areaSelect === "Subdecanato" && subAreaSelect.value === "a") {
        var opcionesTipoDocumento = ["opciónA1", "opciónB1", "opciónC1"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "b") {
        var opcionesTipoDocumento = ["opciónA2", "opciónB2", "opciónC2"];

    }
    //Jefatura de Departamento
    else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "c") {
        var opcionesTipoDocumento = ["opciónA3", "opciónB3", "opciónC3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "d") {
        var opcionesTipoDocumento = ["opciónA4", "opciónB4", "opciónC4"];
    }

    console.log(opcionesTipoDocumento);
    // Crear y agregar opciones al select de tipoDocumento
    if (subAreaSelect.value === "") {
        tipoDocumentoSelect.innerHTML = "";
    } else {
        for (var i = 0; i < opcionesTipoDocumento.length; i++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesTipoDocumento[i];
            opcion.text = opcionesTipoDocumento[i];
            tipoDocumentoSelect.add(opcion);
        }
    }




    // Crear y agregar opciones al select de subTipoDocumento
    actualizarSubtipoDocumento(areaSelect);

}

function actualizarSubtipoDocumento(areaSelect) {
    var subAreaSelect = document.getElementById("subArea");
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var subTipoDocumentoSelect = document.getElementById("subTipoDocumento");

    // Limpiar opciones anteriores

    subTipoDocumentoSelect.innerHTML = "";

    if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Consejo de Facultad") {
        var opcionesSubTipoDocumento = ["Actas/Resoluciones"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Solicitud de Estudiantes") {
        var opcionesSubTipoDocumento = ["Formularios de Autorización"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Procesos Electorales") {
        var opcionesSubTipoDocumento = ["Actas de Proceos Electoral"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato" && tipoDocumentoSelect.value === "Inventario FIS") {
        var opcionesSubTipoDocumento = ["Bienes"];
    }
    //Titulacion
    else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Designación de Revisores Calificadores") {
        var opcionesSubTipoDocumento = ["Pre-Grado"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Expedientes de Grado") {
        var opcionesSubTipoDocumento = ["Pre-Grado"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Pensum") {
        var opcionesSubTipoDocumento = ["Silabos", "Mallas"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación" && tipoDocumentoSelect.value === "Comisiones") {
        var opcionesSubTipoDocumento = ["Practicas Pre-Profesionales", "Practicas de Vinculación", "Convalidación Pre-Profesional", "Convalidación de Vinculación"];
    }

    //opciones subdecanato
    else if (areaSelect === "Subdecanato" && subAreaSelect.value === "a" && tipoDocumentoSelect.value === "opciónA1") {
        var opcionesSubTipoDocumento = ["opciónA1.1", "opciónA1.2", "opciónA1.3"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "a" && tipoDocumentoSelect.value === "opciónB1") {
        var opcionesSubTipoDocumento = ["opciónB1.1", "opciónB1.2", "opciónB1.3"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "a" && tipoDocumentoSelect.value === "opciónC1") {
        var opcionesSubTipoDocumento = ["opciónC1.1", "opciónC1.2", "opciónC1.3"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "b" && tipoDocumentoSelect.value === "opciónA2") {
        var opcionesSubTipoDocumento = ["opciónA2.1", "opciónA2.2", "opciónA2.3"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "b" && tipoDocumentoSelect.value === "opciónB2") {
        var opcionesSubTipoDocumento = ["opciónB2.1", "opciónB2.2", "opciónB2.3"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "b" && tipoDocumentoSelect.value === "opciónC2") {
        var opcionesSubTipoDocumento = ["opciónC2.1", "opciónC2.2", "opciónC2.3"];
    }
    //opciones jefatura
    else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "c" && tipoDocumentoSelect.value === "opciónA3") {
        var opcionesSubTipoDocumento = ["opciónA3.1", "opciónA3.2", "opciónA3.3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "c" && tipoDocumentoSelect.value === "opciónB3") {
        var opcionesSubTipoDocumento = ["opciónB3.1", "opciónB3.2", "opciónB3.3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "c" && tipoDocumentoSelect.value === "opciónC3") {
        var opcionesSubTipoDocumento = ["opciónC3.1", "opciónC3.2", "opciónC3.3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "d" && tipoDocumentoSelect.value === "opciónA4") {
        var opcionesSubTipoDocumento = ["opciónA4.1", "opciónA4.2", "opciónA4.3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "d" && tipoDocumentoSelect.value === "opciónB4") {
        var opcionesSubTipoDocumento = ["opciónB4.1", "opciónB4.2", "opciónB4.3"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "d" && tipoDocumentoSelect.value === "opciónC4") {
        var opcionesSubTipoDocumento = ["opciónC4.1", "opciónC4.2", "opciónC4.3"];
    }

    // Crear y agregar opciones al select de SubTipoDocumento
    if (tipoDocumentoSelect.value === "") {
        subTipoDocumentoSelect.innerHTML = "";
    } else {
        for (var j = 0; j < opcionesSubTipoDocumento.length; j++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesSubTipoDocumento[j];
            opcion.text = opcionesSubTipoDocumento[j];
            subTipoDocumentoSelect.add(opcion);
        }
    }

    actualizarPeriodo(areaSelect)
}

function actualizarPeriodo(areaSelect) {

    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var periodoSelect = document.getElementById("periodo");
    var codigoCodificacionInput = document.getElementById("codigoCodificacion");

    // Limpiar opciones anteriores
    periodoSelect.innerHTML = "";

    //Secretaria de Decanato
    if (tipoDocumentoSelect.value === "Consejo de Facultad") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "Solicitud de Estudiantes") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (tipoDocumentoSelect.value === "Procesos Electorales") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "Inventario FIS") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    }
    //Secretaria de Titulacion
    else if (tipoDocumentoSelect.value === "Designación de Revisores Calificadores") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (tipoDocumentoSelect.value === "Expedientes de Grado") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "Pensum") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "Comisiones") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    }

    //periodos para decanato y jefatura de departament
    else if (tipoDocumentoSelect.value === "opciónA1") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (tipoDocumentoSelect.value === "opciónB1") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "opciónC1") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "opciónA2") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (tipoDocumentoSelect.value === "opciónB2") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "opciónC2") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "opciónA3") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (tipoDocumentoSelect.value === "opciónB3") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    } else if (tipoDocumentoSelect.value === "opciónC3") {
        var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
    }


    // Crear y agregar opciones al select de subTipoDocumento
    if (tipoDocumentoSelect.value === "") {
        periodoSelect.innerHTML = "";
    } else {
        for (var j = 0; j < opcionesPerido.length; j++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesPerido[j];
            opcion.text = opcionesPerido[j];
            periodoSelect.add(opcion);
        }
    }
    actualizarCodigoCodificacion(areaSelect);

}

function obtenerCodigoArea(areaSelect) {
    var codigoArea = areaSelect.toUpperCase().slice(0, 0);

    // Agregar sufijo según la selección en areaSelect
    if (areaSelect === "Decanato") {
        codigoArea += "DEC";
    } else if (areaSelect === "Subdecanato") {
        codigoArea += "SBD";
    } else if (areaSelect === "Jefatura de Departamento") {
        codigoArea += "JDD";
    }
    return codigoArea;
}

function obtenerCodigoPeriodo() {
    var periodoSelect = document.getElementById("periodo");
    var codigoPeriodo = periodoSelect.value.slice(0, 4);
    return codigoPeriodo;
}

// Función para generar un número único de 4 dígitos
function generarNumeroUnico() {
    return Math.floor(Math.random() * 9000) + 1000;
}

// Función para actualizar el campo de codificación
function actualizarCodigoCodificacion(areaSelect) {
    var carreraSelect = document.getElementById("carrera");
    if (carreraSelect.value === "") {
        document.getElementById("codigoCodificacion").value = "";
    } else {
        var codigoArea = obtenerCodigoArea(areaSelect);
        var codigoPeriodo = obtenerCodigoPeriodo();
        var numeroUnico = generarNumeroUnico();
        var codigoBase = `FIS-${codigoArea}-${codigoPeriodo}-${numeroUnico.toString().padStart(4, '0')}`;

        // Actualizar el valor del campo de codificación
        document.getElementById("codigoCodificacion").value = codigoBase;
    }
}

// Evento change para el elemento periodo
//document.getElementById("periodo").addEventListener("change", function () {
//    actualizarCodigoCodificacion();
//});

// Llama a la función inicialmente para establecer el valor inicial
//actualizarCodigoCodificacion();