export class Contacto {
    Nombre = '';
    Apellido = '';
    Email = '';
    Conectado = false

    constructor(Nombre, Apellido, Email, Conectado) {
        this.Nombre = Nombre
        this.Apellido = Apellido
        this.Email = Email
        this.Conectado = Conectado
    }
}