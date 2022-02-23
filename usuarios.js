class Usuarios {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getName() {
    return `Nombre: ${this.nombre}. Apellido: ${this.apellido}`;
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addMascota(newMascota) {
    this.mascotas.push(newMascota);
    return this.mascotas;
  }
  addBook(newBook) {
    this.libros.push(newBook);
    return newBook;
  }
  getBookNames() {
    let titulosLibros = [];
    this.libros.forEach((libro) => {
      titulosLibros.push(libro.libro);
    });
    return console.log(titulosLibros);
  }
}

let usuario1 = new Usuarios(
  "Lucas",
  "Miranda",
  [
    { autor: "Pepe", libro: "Lord of the rings" },
    { autor: "Luis", libro: "Narnia" },
  ],
  ["Floky", "Chulo"]
);

let agregarLibro = { autor: "Leonel Messi", libro: "Harry Potter" };

console.log(usuario1.getName());
console.log(usuario1.countMascotas());
console.log(usuario1.addMascota("Wolverine"));
console.log(usuario1.addBook(agregarLibro));
usuario1.getBookNames();
