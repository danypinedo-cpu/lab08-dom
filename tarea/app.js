class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
  }
  descripcion() {
    return `${this.titulo} [${this.genero}]`;
  }
}

const formPelicula = document.querySelector("#formPelicula");
const tituloInput = document.querySelector("#tituloPelicula");
const generoInput = document.querySelector("#generoPelicula");
const listaPeliculas = document.querySelector("#listaPeliculas");
const mensajeError = document.querySelector("#mensajeError");

formPelicula.addEventListener("submit", (evento) => {
  evento.preventDefault(); 

  const titulo = tituloInput.value.trim();
  const genero = generoInput.value.trim();

  if (titulo === "" || genero === "") {
    mensajeError.style.display = "block";
    return;
  }
  mensajeError.style.display = "none";

  const nuevaPelicula = new Pelicula(titulo, genero);

  const li = document.createElement("li");
  li.textContent = nuevaPelicula.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.classList.add("btn-borrar");
  
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnBorrar);
  listaPeliculas.appendChild(li);

  tituloInput.value = "";
  generoInput.value = "";
  tituloInput.focus();
});