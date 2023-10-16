import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";
var cursos = [
    new Curso("Practias esenciales para el agilismo", 20, 90, true, 2019),
    new Curso("Ingeniería de software para la web", 15, 99, true, 2018),
    new Curso("Pruebas automatizadas", 25, 50, false, 2020),
    new Curso("Principios de diseño y arquitectura", 20, 75, true, 2020),
];
export var ap = new Aprendiz("Daniel Felipe", "Triviño Santana", "avatar.png", 29, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = (document.getElementById("texto-busqueda"));
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = text == null ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
// function filtrarPorNombre(): void
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "\" height:\"100\"></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trelement = document.createElement("tr");
    trelement.innerHTML = "<td><b>Cursos certificados</b></td>\n    <td>".concat(numeroCertificados, "</td>");
    estadisticasTable.appendChild(trelement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTBody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>\n        ");
        cursosTBody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTBody);
}
