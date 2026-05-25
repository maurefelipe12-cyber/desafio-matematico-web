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

function esPrimo(numero) {
  let contador = 0;

  if (numero <= 1) {
    return false;
  }

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      contador++;
    }
  }

  return contador === 2;
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
      "Por favor, completa todos los campos.";
    return;
  }

  if (horas <= 0) {
    document.getElementById("resultadoTarea").innerHTML =
      "Las horas deben ser mayores a 0.";
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
    recomendacion = "La tarea es ligera.";
  }

  else if (carga <= 30) {
    prioridad = "Media";
    recomendacion = "La tarea requiere organización.";
  }

  else if (carga <= 60) {
    prioridad = "Alta";
    recomendacion = "Conviene dividir la tarea en partes pequeñas.";
  }

  else {
    prioridad = "Crítica";
    recomendacion = "La tarea tiene una carga muy alta.";
  }

  document.getElementById("resultadoTarea").innerHTML =
    "Tarea: " + nombre +
    "<br>Horas estimadas: " + horas +
    "<br>Complejidad: " + complejidad +
    "<br>Fibonacci(" + complejidad + ") = " + dificultadFibonacci +
    "<br>Carga académica: " + carga +
    "<br>Prioridad: " + prioridad +
    "<br>Recomendación: " + recomendacion;
}

function cifrarMensaje(mensaje, clave) {

  let resultado = "";

  let desplazamiento = clave % 26;

  for (let i = 0; i < mensaje.length; i++) {

    let codigo = mensaje.charCodeAt(i);

    if (codigo >= 65 && codigo <= 90) {

      let nuevoCodigo =
        ((codigo - 65 + desplazamiento) % 26) + 65;

      resultado =
        resultado + String.fromCharCode(nuevoCodigo);
    }

    else if (codigo >= 97 && codigo <= 122) {

      let nuevoCodigo =
        ((codigo - 97 + desplazamiento) % 26) + 97;

      resultado =
        resultado + String.fromCharCode(nuevoCodigo);
    }

    else {

      resultado =
        resultado + mensaje[i];
    }
  }

  return resultado;
}

function verificarCodigo() {

  let mensaje =
    document.getElementById("mensajeSecreto").value;

  let numero =
    parseInt(document.getElementById("codigoPrimo").value);

  let divisores = "";

  if (mensaje === "") {

    document.getElementById("resultadoPrimo").innerHTML =
      "Por favor, ingresa un mensaje.";

    return;
  }

  if (isNaN(numero)) {

    document.getElementById("resultadoPrimo").innerHTML =
      "Por favor, ingresa un código.";

    return;
  }

  if (numero <= 1) {

    document.getElementById("resultadoPrimo").innerHTML =
      "El código debe ser mayor que 1.";

    return;
  }

  for (let i = 1; i <= numero; i++) {

    if (numero % i === 0) {

      divisores = divisores + i + " ";
    }
  }

  if (esPrimo(numero)) {

    let mensajeCifrado =
      cifrarMensaje(mensaje, numero);

    document.getElementById("resultadoPrimo").innerHTML =
      "El código " + numero + " es primo." +
      "<br>Divisores encontrados: " + divisores +
      "<br>Clave utilizada: " + numero +
      "<br>Mensaje original: " + mensaje +
      "<br>Mensaje cifrado: " + mensajeCifrado +
      "<br>Conclusión: el mensaje fue protegido usando una clave prima.";
  }

  else {

    document.getElementById("resultadoPrimo").innerHTML =
      "El código " + numero + " no es primo." +
      "<br>Divisores encontrados: " + divisores +
      "<br>No se realizó el cifrado." +
      "<br>Conclusión: se recomienda usar un número primo.";
  }
}

function detectarFibonacciPrimos() {

  let cantidad =
    parseInt(document.getElementById("terminosFibonacci").value);

  if (isNaN(cantidad)) {

    document.getElementById("resultadoFibonacciPrimo").innerHTML =
      "Por favor, ingresa una cantidad válida.";

    return;
  }

  if (cantidad < 3 || cantidad > 30) {

    document.getElementById("resultadoFibonacciPrimo").innerHTML =
      "La cantidad debe estar entre 3 y 30.";

    return;
  }

  let serie = "";

  let fibonacciPrimos = "";

  let a = 0;
  let b = 1;
  let c = 0;

  for (let i = 1; i <= cantidad; i++) {

    if (i === 1) {

      c = 0;
    }

    else if (i === 2) {

      c = 1;
    }

    else {

      c = a + b;
      a = b;
      b = c;
    }

    serie = serie + c + " ";

    if (esPrimo(c)) {

      fibonacciPrimos =
        fibonacciPrimos + c + " ";
    }
  }

  if (fibonacciPrimos === "") {

    fibonacciPrimos =
      "No se encontraron Fibonacci primos.";
  }

  document.getElementById("resultadoFibonacciPrimo").innerHTML =
    "Serie Fibonacci generada:" +
    "<br>" + serie +
    "<br><br>Valores Fibonacci que también son primos:" +
    "<br>" + fibonacciPrimos;
}
