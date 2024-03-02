
function actualizarSubArea(area, subArea, tipoDocumento, subTipoDocumento, periodo) {
    // Obtener el valor almacenado en la base del rol del usuario
    var areaSelect = area;
    var subAreaSelected = subArea;
    var tipoDocumentoSelected = tipoDocumento;
    var subTipoDocumentoSelected = subTipoDocumento;
    var periodoSelected = periodo;
    var subAreaSelect = document.getElementById("subArea");
    console.log(areaSelect + "  " + subAreaSelected + "  " + tipoDocumentoSelected + "  " + subTipoDocumentoSelected + "  " + periodoSelected);

    // Limpiar opciones anteriores
    subAreaSelect.innerHTML = "";

    // Agregar opciones según el área seleccionada
    if (areaSelect == "Decanato") {
        var opcionesSubArea = ["Secretaria de Decanato", "Secretaria de Titulación"];
    } else if (areaSelect === "Subdecanato") {
        var opcionesSubArea = ["Secretaría de Subdecanato", "Coordinaciones de Carrera"]; // Aquí se debe manejar los diferentes cargos de subdecanato
    } else if (areaSelect === "Jefatura de Departamento") {
        var opcionesSubArea = ["Secretaría de Departamento", "Maestrías profesionalizantes", "Maestrías de Investigación", "Comité Doctoral", "Doctorado", "Secretaría de Doctorado"]; // Aquí se debe manejar los diferentes cargos de jefatura
    }

    // Crear y agregar opciones al seleccionar subArea
    for (var i = 0; i < opcionesSubArea.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesSubArea[i];
        opcion.text = opcionesSubArea[i];
        if (opcionesSubArea[i] === subAreaSelected) {
            opcion.selected = true;
        }
        subAreaSelect.add(opcion);
    }

    // Actualizar las opciones del departamento
    actualizarTipoDocumento(areaSelect, tipoDocumentoSelected, subTipoDocumentoSelected, periodoSelected);
}

function actualizarTipoDocumento(area, tipoDocumento, subTipoDocumento, periodo) {
    var areaSelect = area;
    var tipoDocumentoSelected = tipoDocumento;
    var subTipoDocumentoSelected = subTipoDocumento;
    var periodoSelected = periodo;
    var subAreaSelect = document.getElementById("subArea");
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    console.log(areaSelect + "  " + tipoDocumentoSelected + "  " + subTipoDocumentoSelected + "  " + periodoSelected);

    // Limpiar opciones anteriores

    tipoDocumentoSelect.innerHTML = "";

    if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Decanato") {
        var opcionesTipoDocumento = ["Consejo de Facultad", "Solicitud de Estudiantes", "Procesos Electorales", "Inventario FIS"];
    } else if (areaSelect === "Decanato" && subAreaSelect.value === "Secretaria de Titulación") {
        var opcionesTipoDocumento = ["Designación de Revisores Calificadores", "Expedientes de Grado", "Pensum", "Comisiones"];

    }

    //Subdecanato
    else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato") {
        var opcionesTipoDocumento = ["Memorandos", "Oficios Enviados", "Certificados", "Actas", "Formularios recibidos", "Control docente", "Notas", "Solicitudes"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Coordinaciones de Carrera") {
        var opcionesTipoDocumento = ["Memorando"];
    }

    //Jefatura de Departamento
    else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Departamento") {
        var opcionesTipoDocumento = ["Memorando", "Informe"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes") {
        var opcionesTipoDocumento = ["Solicitudes", "Informe", "Memorando", "Reporte", "Exámenes"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías de Investigación") {
        var opcionesTipoDocumento = ["Informe", "Memorando", "Reporte", "Exámenes"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Comité Doctoral") {
        var opcionesTipoDocumento = ["Acta", "Convocatoria", "Curriculum Vitae", "Resolución"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Doctorado") {
        var opcionesTipoDocumento = ["Rúbrica", "Solicitud"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Doctorado") {
        var opcionesTipoDocumento = ["Memorando", "Oficios"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Laboratorios de Investigación") {
        var opcionesTipoDocumento = ["Informe", "Memorando", "Contrataciones", "Solicitudes"];
    }

    // Crear y agregar opciones al select de tipoDocumento
    for (var i = 0; i < opcionesTipoDocumento.length; i++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesTipoDocumento[i];
        opcion.text = opcionesTipoDocumento[i];
        if (opcionesTipoDocumento[i] === tipoDocumentoSelected) {
            opcion.selected = true;
        }
        tipoDocumentoSelect.add(opcion);
    }

    // Crear y agregar opciones al select de subTipoDocumento
    actualizarSubtipoDocumento(areaSelect, subTipoDocumentoSelected, periodoSelected);

}

function actualizarSubtipoDocumento(area, subTipoDocumento, periodo) {
    var areaSelect = area;
    var subTipoDocumentoSelected = subTipoDocumento;
    var periodoSelected = periodo;

    var subAreaSelect = document.getElementById("subArea");
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var subTipoDocumentoSelect = document.getElementById("subTipoDocumento");
    console.log(areaSelect + "  " + subTipoDocumentoSelected);

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
        var opcionesSubTipoDocumento = ["Practicas Pre-Profesionales"];
    }

    //opciones subdecanato
    else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Memorandos") {
        var opcionesSubTipoDocumento = ["Memorandos Recibidos", "Memorandos Enviados", "Memorandos de Designación", "Memorandos de Rectificación de Notas", "Memorandos de Solicitudes"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Oficios Enviados") {
        var opcionesSubTipoDocumento = ["Oficios de Solicitud de Prácticas Profesionales"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Certificados") {
        var opcionesSubTipoDocumento = ["Matriculas Legalizada", "Horarios", "Unidad de Titulación", "Trabajo de Integración Curricular", "No Impedimento", "Sanciones", "No Tener Tercera Matrícula", "Duración Docente"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Actas") {
        var opcionesSubTipoDocumento = ["Actas de las coordinaciones de carreras y subdecanato", "Actas de reuniones con diferentes dependencias", "Actas de reuniones internas del subdecanato"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Formularios recibidos") {
        var opcionesSubTipoDocumento = ["Formularios de prórroga de unidad de titulación", "Reinscripciones", "Extensión de matrícula", "Extensión de créditos", "Restitución de estudiante regular", "Inscripción de asignaturas en otras unidades", "Registro de notas atrasadas", "Recalificación de notas", "Rectificación de notas"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Control docente") {
        var opcionesSubTipoDocumento = ["Registro de Asistencia a Clases"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Notas") {
        var opcionesSubTipoDocumento = ["Registro de notas ingresadas en el sistema"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Secretaría de Subdecanato" && tipoDocumentoSelect.value === "Solicitudes") {
        var opcionesSubTipoDocumento = ["Cambios de Carrera", "Cambios de Universidad"];
    } else if (areaSelect === "Subdecanato" && subAreaSelect.value === "Coordinaciones de Carrera" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviador", "Memorando recibido"];
    }
    //opciones jefatura
    else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Departamento" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviado", "Memorando recibido"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Departamento" && tipoDocumentoSelect.value === "Informe") {
        var opcionesSubTipoDocumento = ["Informe técnico"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes" && tipoDocumentoSelect.value === "Solicitudes") {
        var opcionesSubTipoDocumento = ["Documentos de postulación de becas"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes" && tipoDocumentoSelect.value === "Informe") {
        var opcionesSubTipoDocumento = ["Concesión de Becas", "Renoación de Becas"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviado", "Memorando recibido"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes" && tipoDocumentoSelect.value === "Reporte") {
        var opcionesSubTipoDocumento = ["Planificación académica"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías profesionalizantes" && tipoDocumentoSelect.value === "Exámenes") {
        var opcionesSubTipoDocumento = ["Exámenes complexivos"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías de Investigación" && tipoDocumentoSelect.value === "Informe") {
        var opcionesSubTipoDocumento = ["Renovación de becas"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías de Investigación" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviado", "Memorando recibido"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías de Investigación" && tipoDocumentoSelect.value === "Reporte") {
        var opcionesSubTipoDocumento = ["Planificación académica"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Maestrías de Investigación" && tipoDocumentoSelect.value === "Exámenes") {
        var opcionesSubTipoDocumento = ["Exámenes complexivos"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Comité Doctoral" && tipoDocumentoSelect.value === "Acta") {
        var opcionesSubTipoDocumento = ["Actas de desión del comité doctoral"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Comité Doctoral" && tipoDocumentoSelect.value === "Convocatoria") {
        var opcionesSubTipoDocumento = ["Convocatoria de sesion comité doctoral"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Comité Doctoral" && tipoDocumentoSelect.value === "Curriculum Vitae") {
        var opcionesSubTipoDocumento = ["Curriculum vitae de los miembros del comité doctoral"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Comité Doctoral" && tipoDocumentoSelect.value === "Resolución") {
        var opcionesSubTipoDocumento = ["Resoluciones especificas"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Doctorado" && tipoDocumentoSelect.value === "Rúbrica") {
        var opcionesSubTipoDocumento = ["Evaluación del estado de arte", "Evaluación de seminario 1", "Evaluación de seminario 2", "Evaluación de tesis doctoral"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Doctorado" && tipoDocumentoSelect.value === "Solicitud") {
        var opcionesSubTipoDocumento = ["Solicitud para apoyo económico para artículo científico", "Solicitud para matrícula"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Doctorado" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviado", "Memorando recibido"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Secretaría de Doctorado" && tipoDocumentoSelect.value === "Oficios") {
        var opcionesSubTipoDocumento = ["Oficios enviados", "Oficios recibidos"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Laboratorios de Investigación" && tipoDocumentoSelect.value === "Informe") {
        var opcionesSubTipoDocumento = ["Informe de actividades"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Laboratorios de Investigación" && tipoDocumentoSelect.value === "Memorando") {
        var opcionesSubTipoDocumento = ["Memorando enviado", "Memorando recibido"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Laboratorios de Investigación" && tipoDocumentoSelect.value === "Contrataciones") {
        var opcionesSubTipoDocumento = ["Pedidos de contratación"];
    } else if (areaSelect === "Jefatura de Departamento" && subAreaSelect.value === "Laboratorios de Investigación" && tipoDocumentoSelect.value === "Solicitudes") {
        var opcionesSubTipoDocumento = ["Pedidos de materiales", "Pedidos de insumos"];
    }

    // Crear y agregar opciones al select de SubTipoDocumento
    for (var j = 0; j < opcionesSubTipoDocumento.length; j++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesSubTipoDocumento[j];
        opcion.text = opcionesSubTipoDocumento[j];
        if (opcionesSubTipoDocumento[j] === subTipoDocumentoSelected) {
            opcion.selected = true;
        }
        subTipoDocumentoSelect.add(opcion);
    }
    actualizarPeriodo(area, periodoSelected)

}

function actualizarPeriodo(area, periodo) {
    var periodoSelected = periodo;
    console.log(periodoSelected);
    var tipoDocumentoSelect = document.getElementById("tipoDocumento");
    var subAreaSelect = document.getElementById("subArea");
    var periodoSelect = document.getElementById("periodo");

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
    else if (subAreaSelect.value === "Secretaría de Subdecanato" || subAreaSelect.value === "Coordinaciones de Carrera") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    } else if (subAreaSelect.value === "Secretaría de Departamento" || subAreaSelect.value === "Maestrías profesionalizantes" || subAreaSelect.value === "Maestrías de Investigación" || subAreaSelect.value === "Comité Doctoral" || subAreaSelect.value === "Doctorado" || subAreaSelect.value === "Secretaría de Doctorado" || subAreaSelect.value === "Laboratorios de Investigación") {
        var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B", "2023-A"];
    }


    // Crear y agregar opciones al select de subTipoDocumento
    for (var j = 0; j < opcionesPerido.length; j++) {
        var opcion = document.createElement("option");
        opcion.value = opcionesPerido[j];
        opcion.text = opcionesPerido[j];
        if (opcionesPerido[j] == periodoSelected) {
            opcion.selected = true;
        }
        periodoSelect.add(opcion);
    }
    actualizarCodigoCodificacion(area);
}


function obtenerCodigoArea(areaSelect) {
    var codigoArea = areaSelect.toUpperCase().slice(0, 0);

    // Agregar sufijo según la selección en areaSelect
    if (areaSelect === "Decanato") {
        codigoArea += "DC";
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

// Función para actualizar el campo de codificación
function actualizarCodigoCodificacion(areaSelect) {
    var carreraSelect = document.getElementById("carrera");
    if (carreraSelect.value === "") {
        document.getElementById("codigoCodificacion").value = "";
    } else {
        var codigoArea = obtenerCodigoArea(areaSelect);
        var codigoPeriodo = obtenerCodigoPeriodo();

        var codigoBase = `FIS-${codigoArea}-${codigoPeriodo}`;

        // Actualizar el valor del campo de codificación
        document.getElementById("codigoCodificacion").value = codigoBase;
    }
}


window.addEventListener('load', function () {
    // Simular un clic en el enlace al cargar la página
    document.getElementById('cargarCampos').click();
});

