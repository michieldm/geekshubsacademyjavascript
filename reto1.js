class Persona {
  constructor(nombre = "", edad = 0, DNI, sexo = "H", peso = 0, altura = 0) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
  }
}

let christina = new Persona("Christina", 26, "Y123456T", "M", 60, 167);
let pedro = new Persona("Pedro", 50, "Y12456T", "H", 75, 185);
let antonio = new Persona("Antonio", 39, "Y9956T", "H", 80, 179);

console.log(christina);
console.log(pedro);
console.log(antonio);