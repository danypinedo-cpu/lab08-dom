console.log("app.js cargado");
const titulo = document.querySelector("#titulo");
titulo.textContent = "Hola TECSUP";
titulo.style.color = "blue";
 
const mensaje = document.querySelector(".mensaje");
mensaje.classList.add("destacado");
 
const lista = document.querySelector("#lista");
const nuevo = document.createElement("li");
nuevo.textContent = "JavaScript";
lista.appendChild(nuevo);

const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar");
const contador = document.querySelector("#contador");
let clics = 0;
 
btnSumar.addEventListener("click", (evento) => {
  clics = clics + 1;
  contador.textContent = clics;
  console.log(evento.type, evento.target);
});
 
btnReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = clics;
});

const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");
 
nombre.addEventListener("input", () => {
  saludo.textContent = "Hola, " + nombre.value;
});
const formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");
 
formulario.addEventListener("submit", (evento) => {
  resultado.textContent = "Enviado: " + correo.value;
});
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
 
  if (!correo.value.includes("@")) {
    resultado.textContent = "Correo no valido: falta @";
    resultado.classList.add("error");
  } else {
    resultado.textContent = "Enviado: " + correo.value;
    resultado.classList.remove("error");
  }
});


class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
 
  conDescuento(pct) {
    return this.precio * (1 - pct);
  }
 
  descripcion() {
    return this.nombre + " - S/ " + this.precio.toFixed(2);
  }
}
 
const laptop = new Producto("Laptop", 2500);
const mouse = new Producto("Mouse", 45);
const teclado = new Producto("Teclado", 120);
const monitor = new Producto("Monitor", 680);

const productos = [laptop, mouse, teclado, monitor];
const listaProductos = document.querySelector("#productos");
 
productos.forEach((p) => {
  const li = document.createElement("li");
  li.textContent = p.descripcion();
  listaProductos.appendChild(li);
});
