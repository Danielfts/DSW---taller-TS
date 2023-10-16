let op1: number = 10;
let op2: number = 15;

console.log(`Mis variables iniciales son ${op1} y ${op2}`);

op1++;
op2 += 4;

console.log(`Mis variables finales son ${op1} ${op2}`);

let resultado:number = op1  / op2;
console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${resultado.toPrecision(2)}`);

// tipos any 
let varTipoDesconocido:any;
console.log(`variable tiene valor: ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`)

varTipoDesconocido = "Ahora hay un texto";
console.log(`variable tiene valor: ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`)

varTipoDesconocido = 2.8;
console.log(`variable tiene valor: ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}`);

let varTipoIndefinido: undefined;
varTipoIndefinido = undefined;

let varVoid: void = undefined;
console.log(`variable tien valor: ${varVoid} y es de tipo ${typeof(varVoid)}`);

function imprimirMensaje(): void{
    console.log("Mensaje genérico");
}

function imprimirMensaje2(msj:string):void{
    console.log(msj);
}

imprimirMensaje();
imprimirMensaje2("Mensaje por parámetro");

function sumar(op1: number, op2:number):number{
    return op1 + op2;
}

var fsumar = sumar;

console.log(sumar(10,15));
console.log(fsumar(20,25));

