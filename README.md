# Matemáticas que resuelven problemas: Fibonacci y Números Primos en la vida real

Proyecto web interactivo desarrollado con HTML, CSS y JavaScript.

La página aplica conceptos matemáticos como la serie de Fibonacci y los números primos para resolver problemas relacionados con organización académica y seguridad informática.

---

# Descripción del proyecto

El proyecto contiene dos simuladores interactivos:

1. Organizador de tareas usando Fibonacci.
2. Verificador de códigos seguros usando números primos.

La aplicación permite al usuario ingresar datos mediante formularios y obtener resultados dinámicos directamente en la página usando JavaScript.

---

# Simulador 1: Organizador de tareas con Fibonacci

## Problema real

Muchas tareas académicas no tienen la misma dificultad. Algunas requieren más tiempo, esfuerzo y concentración que otras.

Este simulador usa la serie de Fibonacci para representar el crecimiento progresivo de dificultad de una tarea.

---

## ¿Cómo funciona?

El usuario ingresa:

- nombre de la tarea
- horas estimadas
- nivel de complejidad

Luego, el sistema genera un valor Fibonacci y calcula una carga académica.

### Serie utilizada

```txt
0, 1, 1, 2, 3, 5, 8, 13, 21...
```

### Fórmula utilizada

```txt
Carga = horas × Fibonacci(complejidad)
```

---

## Ejemplo

```txt
Horas: 5
Complejidad: 6
Fibonacci(6) = 8

Carga total = 5 × 8 = 40
```

---

# Simulador 2: Verificador de códigos seguros con números primos

## Problema real

Los números primos son importantes en informática y seguridad digital porque se utilizan en sistemas de cifrado y protección de información.

Este simulador analiza si un código numérico puede considerarse más seguro usando números primos.

---

## ¿Cómo funciona?

El usuario ingresa un número y el sistema verifica:

- si el número es primo
- cuáles son sus divisores
- su nivel básico de seguridad

---

## Regla utilizada

Un número primo solo puede dividirse exactamente entre:

```txt
1 y sí mismo
```

---

## Ejemplo

```txt
97 es primo

Divisores:
1 y 97
```

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub Pages

---

# Características del proyecto

- Formularios interactivos.
- Uso obligatorio de `document.getElementById()`.
- Resultados mostrados dinámicamente en pantalla.
- Diseño responsivo.
- Estilo visual Frutiger Aero.
- CSS y JavaScript separados en carpetas.
- Validaciones de datos.
- Algoritmos propios en JavaScript.

---

# Estructura del proyecto

```txt
proyecto/
│
├── index.html
├── css/
│   └── styles.css
├── scripts/
│   └── script.js
└── README.md
```

---

# Cómo usar la página

1. Abrir la página web.
2. Ingresar datos en los formularios.
3. Presionar los botones de cálculo.
4. Observar los resultados generados dinámicamente.

---
