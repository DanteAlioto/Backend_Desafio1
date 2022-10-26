class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre /* string */
        this.apellido = apellido /* string */
        this.libros = libros /* object */
        this.mascotas = mascotas /* string */
    }

    getFullName() {
        return (`${this.nombre} ${this.apellido}`)
    }

    addMascota(nombreMascota) {
        return (this.mascotas.push(nombreMascota))
    }

    countMascotas() {
        return (`Numero de mascotas : ${this.mascotas.length}`)
    }

    addBook(nombreLibro, AutorLibro) {
        return (this.libros.push({
            nombre: nombreLibro,
            autor: AutorLibro
        }))
    }

    getBookNames() {
        const mapaNombresLibros = this.libros.map(libro => libro.nombre)
        console.log(`Libros en el array : ${mapaNombresLibros}`)
    }
}

const Dante = new Usuario("Dante", "Alioto", [], [])

//Nombre y apellido
console.log(Dante.getFullName());

//Mascotas
Dante.addMascota("perro");
Dante.addMascota("gato");
console.log(Dante.countMascotas());

//Libros
Dante.addBook("Inferno", "Dan Brown");
Dante.addBook("La vuelta al mundo en ochenta dias", "Julio Verne");
Dante.getBookNames();