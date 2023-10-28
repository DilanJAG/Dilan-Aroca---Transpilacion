var DilanAroca = /** @class */ (function () {
    function DilanAroca() {
    }
    DilanAroca.prototype.saludoDilanAroca = function () {
        console.log("Hola soy " + this.nombre1 + " " + this.nombre2 + " " + this.apellido1 + " " + this.apellido2 + " , con cedula " + this.cedula + " ! ");
        document.write("Hola soy " + this.nombre1 + " " + this.nombre2 + " " + this.apellido1 + " " + this.apellido2 + " , con cedula " + this.cedula + " ! ");
    };
    return DilanAroca;
}());
var datos = new DilanAroca();
datos.nombre1 = "Dilan";
datos.nombre2 = "Joel";
datos.apellido1 = "Aroca";
datos.apellido2 = "Guanotasig";
datos.edad = 20;
datos.cedula = 1755552658;
datos.numerotelefono = 979075185;
datos.saludoDilanAroca();
console.log(datos);
