var op1 = 10;
var op2 = 15;
console.log("Mis variables iniciales son ".concat(op1, " y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis variables finales son ".concat(op1, " ").concat(op2));
var resultado = op1 / op2;
console.log("Resultado: ".concat(resultado));
console.log("Resultado: ".concat(resultado.toPrecision(2)));
// tipos any 
var varTipoDesconocido;
console.log("variable tiene valor: ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = "Ahora hay un texto";
console.log("variable tiene valor: ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = 2.8;
console.log("variable tiene valor: ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
var varTipoIndefinido;
varTipoIndefinido = undefined;
var varVoid = undefined;
console.log("variable tien valor: ".concat(varVoid, " y es de tipo ").concat(typeof (varVoid)));
function imprimirMensaje() {
    console.log("Mensaje genérico");
}
function imprimirMensaje2(msj) {
    console.log(msj);
}
imprimirMensaje();
imprimirMensaje2("Mensaje por parámetro");
function sumar(op1, op2) {
    return op1 + op2;
}
var fsumar = sumar;
console.log(sumar(10, 15));
console.log(fsumar(20, 25));
