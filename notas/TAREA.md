# Tarea: Mi componente interactivo
 
## Componente elegido
 Una lista de películas por ver, que permite registrar el título y el género de una película, y ofrece un botón individual para eliminarla de la lista una vez vista.
## Codigo principal
```js
class Pelicula {
  constructor(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
  }
  descripcion() {
    return `${this.titulo} [${this.genero}]`;
  }
}

formPelicula.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevaPelicula = new Pelicula(titulo, genero);
  const li = document.createElement("li");
  li.textContent = nuevaPelicula.descripcion();

  const btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnBorrar);
  listaPeliculas.appendChild(li);
});
```
 
## Pruebas realizadas
| Accion | Resultado esperado | Cumple (Si/No) |
|--------|--------------------|----------------|
|Envia formularios vacios        |Muestra mensajes de error en texto rojo y no agrega nada                    |Si                |
|Ingresa "Matrix" y "Accion" y dale clic en Agregar        |Se añade a la lista inferior como "Matrix[Acccion]"                    |Si                |
|Hacer clic en boton "Borrar" en una pelicula       |El elemento desaparece de la interfaz inmediatamente                    |Si                |
 
## Por que diseñe asi mi clase

Elegí los atributos `titulo` y `genero` porque son los datos mínimos para identificar una obra audiovisual. 

El método `descripcion()` me aporta dos ventajas principales:
* **Encapsulamiento:** Define el formato de salida (`"Título [Género]"`) directamente en la clase.
* **Código limpio:** Mantiene la manipulación del **DOM** mucho más legible al delegar la lógica de presentación al propio objeto.
