
    function actualizarArea() {
        var areaSelect = document.getElementById("area");
        var cargoSelect = document.getElementById("cargo");

        // Limpiar opciones anteriores
        cargoSelect.innerHTML = "";

        // Agregar opciones según el área seleccionada
        if (areaSelect.value === "Decanato") {
            var opcionesCargo = ["Decanato", "Titulación"];
        } else if (areaSelect.value === "subdecanato") {
            var opcionesCargo = ["a", "b"]; // Aquí se debe manejar los diferentes cargos de subdecanato
        } else if (areaSelect.value === "jefatura") {
            var opcionesCargo = ["c", "d"]; // Aquí se debe manejar los diferentes cargos de jefatura
        }

        // Crear y agregar opciones al select de cargo
        for (var i = 0; i < opcionesCargo.length; i++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesCargo[i];
            opcion.text = opcionesCargo[i];
            cargoSelect.add(opcion);
        }

        // Actualizar las opciones del departamento
        actualizarDepartamento();
    }

    function actualizarDepartamento() {
        var areaSelect = document.getElementById("area");
        var cargoSelect = document.getElementById("cargo");
        var departamentoSelect = document.getElementById("departamento");
        
        // Limpiar opciones anteriores
        
        departamentoSelect.innerHTML = "";
          //Decanato
          if (areaSelect.value === "Decanato" && cargoSelect.value === "Decanato") {
              var opcionesDepartamento = ["Consejo de Facultad", "Solicitud de Estudiantes", "Procesos Electorales", "Inventario FIS"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Titulación") {
              var opcionesDepartamento = ["Designación de Revisores Calificadores", "Expedientes de Grado", "Pensum", "Comisiones"];
          //Subdecanato
          } else if (areaSelect.value === "subdecanato") {
              var opcionesDepartamento = ["opciónA", "opciónB", "opciónC"];
          //Jefatura  
          } else if (areaSelect.value === "jefatura") {
              var opcionesDepartamento = ["opciónC1", "opciónD1", "opciónE1"];
          }

        // Crear y agregar opciones al select de departamento
        for (var i = 0; i < opcionesDepartamento.length; i++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesDepartamento[i];
            opcion.text = opcionesDepartamento[i];
            departamentoSelect.add(opcion);
        }

        // Crear y agregar opciones al select de subdepartamento
        actualizarSubtipoDocumento();

    }

    function actualizarSubtipoDocumento() {
        var areaSelect = document.getElementById("area");
        var cargoSelect = document.getElementById("cargo");
        var departamentoSelect = document.getElementById("departamento");
        var subdepartamentoSelect = document.getElementById("subdepartamento");

        // Limpiar opciones anteriores
        
        subdepartamentoSelect.innerHTML = "";

        if (areaSelect.value === "Decanato" && cargoSelect.value === "Decanato" && departamentoSelect.value === "Consejo de Facultad") {
              var opcionesSubdepartamento = ["Convocatorias", "Actas/Resoluciones"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Decanato" && departamentoSelect.value === "Solicitud de Estudiantes") {
              var opcionesSubdepartamento = ["Formularios de Autorización"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Decanato" && departamentoSelect.value === "Procesos Electorales") {
              var opcionesSubdepartamento = ["Actas de Proceos Electoral"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Decanato" && departamentoSelect.value === "Inventario FIS") {
              var opcionesSubdepartamento = ["Bienes"];
          }
          //Titulacion
          else if (areaSelect.value === "Decanato" && cargoSelect.value === "Titulación" && departamentoSelect.value === "Designación de Revisores Calificadores") {
              var opcionesSubdepartamento = ["Pre-Grado"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Titulación" && departamentoSelect.value === "Expedientes de Grado") {
              var opcionesSubdepartamento = ["Pre-Grado"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Titulación" && departamentoSelect.value === "Pensum") {
              var opcionesSubdepartamento = ["Silabos", "Mallas"];
          } else if (areaSelect.value === "Decanato" && cargoSelect.value === "Titulación" && departamentoSelect.value === "Comisiones") {
              var opcionesSubdepartamento = ["Practicas Pre-Profesionales"];
          }

        // Crear y agregar opciones al select de subdepartamento
        for (var j = 0; j < opcionesSubdepartamento.length; j++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesSubdepartamento[j];
            opcion.text = opcionesSubdepartamento[j];
            subdepartamentoSelect.add(opcion);
        }
        actualizarPeriodo()
    }

      function actualizarPeriodo(){
        var departamentoSelect = document.getElementById("departamento");
        var periodoSelect = document.getElementById("periodo");

        // Limpiar opciones anteriores
        
        periodoSelect.innerHTML = "";

        if (departamentoSelect.value === "Consejo de Facultad"){
              var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
          } else if (departamentoSelect.value === "Solicitud de Estudiantes") {
              var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
          } else if (departamentoSelect.value === "Procesos Electorales") {
              var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
          } else if (departamentoSelect.value === "Inventario FIS") {
              var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
          }
          //Titulacion
          else if (departamentoSelect.value === "Designación de Revisores Calificadores") {
              var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
          } else if (departamentoSelect.value === "Expedientes de Grado") {
              var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
          } else if (departamentoSelect.value === "Pensum") {
              var opcionesPerido = ["2018", "2019", "2020", "2021", "2022", "2023"];
          } else if (departamentoSelect.value === "Comisiones") {
              var opcionesPerido = ["2018-A", "2018-B", "2019-A", "2019-B", "2020-A", "2020-B", "2021-A", "2021-B", "2022-A", "2022-B","2023-A"];
          }

        // Crear y agregar opciones al select de subdepartamento
        for (var j = 0; j < opcionesPerido.length; j++) {
            var opcion = document.createElement("option");
            opcion.value = opcionesPerido[j];
            opcion.text = opcionesPerido[j];
            periodoSelect.add(opcion);
        }
    }
    // Llamar a actualizarArea al cargar la página para establecer las opciones iniciales
    actualizarArea();
    
