class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
  }
  descripcion() {
    return `${this.titulo} [${this.genero}]`;
  }
}

const p1 = new Pelicula("Matrix", "Ciencia Ficción");
const p2 = new Pelicula("Gladiador", "Acción");
console.log(p1.descripcion());
console.log(p2.descripcion());

const listaPeliculas = document.querySelector("#listaPeliculas");

const peliculasPrueba = [
  new Pelicula("Matrix", "Ciencia Ficción"),
  new Pelicula("Gladiador", "Acción")
];

peliculasPrueba.forEach(p => {
  const li = document.createElement("li");
  li.textContent = p.descripcion();
  listaPeliculas.appendChild(li);
});