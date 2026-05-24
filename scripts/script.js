function obtenerFibonacci(posicion) {
  let a = 0;
  let b = 1;
  let c = 0;

  if (posicion === 1) {
    return 1;
  }

  if (posicion === 2) {
    return 1;
  }

  for (let i = 3; i <= posicion; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

function calcularTarea() {
  let nombre = document.getElementById("nombreTarea").value;
  let horas = parseInt(document.getElementById("horasTarea").value);
  let complejidad = parseInt(document.getElementById("complejidadTarea").value);

  if (nombre === "") {
    document.getElementById("resultadoTarea").innerHTML =
      "Por favor, ingresa el nombre de la tarea.";
    return;
  }

  if (isNaN(horas) || isNaN(complejidad)) {
    document.getElementById("resultadoTarea").innerHTML =
      "Por favor, completa todos los campos numéricos.";
    return;
  }

  if (horas <= 0) {
    document.getElementById("resultadoTarea").innerHTML =
      "Las horas estimadas deben ser mayores a 0.";
    return;
  }

  if (complejidad < 1 || complejidad > 8) {
    document.getElementById("resultadoTarea").innerHTML =
      "La complejidad debe estar entre 1 y 8.";
    return;
  }

  let dificultadFibonacci = obtenerFibonacci(complejidad);
  let carga = horas * dificultadFibonacci;
  let prioridad = "";
  let recomendacion = "";

  if (carga <= 10) {
    prioridad = "Baja";
    recomendacion = "La tarea es ligera. Puedes realizarla sin dividirla demasiado.";
  } else if (carga <= 30) {
    prioridad = "Media";
    recomendacion = "La tarea requiere organización. Conviene asignarle un horario específico.";
  } else if (carga <= 60) {
    prioridad = "Alta";
    recomendacion = "La tarea es pesada. Se recomienda dividirla en partes pequeñas.";
  } else {
    prioridad = "Crítica";
    recomendacion = "La tarea tiene una carga muy alta. Es mejor separarla en varias sesiones.";
  }

  document.getElementById("resultadoTarea").innerHTML =
    "Tarea: " + nombre +
    "<br>Horas estimadas: " + horas +
    "<br>Nivel de complejidad: " + complejidad +
    "<br>Valor Fibonacci asignado: " + dificultadFibonacci +
    "<br>Carga académica: " + carga + " puntos" +
    "<br>Prioridad: " + prioridad +
    "<br>Recomendación: " + recomendacion;
}

function verificarCodigo() {
  let numero = parseInt(document.getElementById("codigoPrimo").value);
  let contador = 0;
  let divisores = "";

  if (isNaN(numero)) {
    document.getElementById("resultadoPrimo").innerHTML =
      "Por favor, ingresa un código numérico.";
    return;
  }

  if (numero <= 1) {
    document.getElementById("resultadoPrimo").innerHTML =
      "El código debe ser mayor que 1 para poder analizarlo como número primo.";
    return;
  }

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
      divisores = divisores + i + " ";
    }
  }

  if (contador === 2) {
    let seguridad = "";

    if (numero < 50) {
      seguridad = "Media";
    } else if (numero < 1000) {
      seguridad = "Alta";
    } else {
      seguridad = "Muy alta";
    }

    document.getElementById("resultadoPrimo").innerHTML =
      "El código " + numero + " es primo." +
      "<br>Divisores encontrados: " + divisores +
      "<br>Nivel de seguridad básica: " + seguridad +
      "<br>Conclusión: puede considerarse un código numérico más seguro.";
  } else {
    document.getElementById("resultadoPrimo").innerHTML =
      "El código " + numero + " no es primo." +
      "<br>Divisores encontrados: " + divisores +
      "<br>Nivel de seguridad básica: Baja" +
      "<br>Conclusión: no se recomienda como código especial de seguridad.";
  }
}