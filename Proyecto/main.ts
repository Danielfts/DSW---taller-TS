import { Aprendiz, NivelEducativo } from "./aprendiz.js";
import { Curso } from "./curso.js";

let cursos = [
  new Curso("Practias esenciales para el agilismo", 20, 90, true, 2019),
  new Curso("Ingeniería de software para la web", 15, 99, true, 2018),
  new Curso("Pruebas automatizadas", 25, 50, false, 2020),
  new Curso("Principios de diseño y arquitectura", 20, 75, true, 2020),
];

export const ap = new Aprendiz(
  "Daniel Felipe",
  "Triviño Santana",
  "avatar.png",
  29,
  NivelEducativo.UNIVERSITARIO,
  cursos
);

console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;

let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

let cursosTable: HTMLElement = document.getElementById("cursos")!;

let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;

let textoBusqueda: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("texto-busqueda")!
);

btnFiltro.onclick = () => {
  let text: string = textoBusqueda.value;
  text = text == null ? "" : text;
  cursosTable.getElementsByTagName("tbody")[0].remove();
  let cursosFiltrados: Curso[] = ap.cursos.filter((c) => c.nombre.match(text));
  mostrarCursosAprendiz(cursosFiltrados);
};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

// function filtrarPorNombre(): void

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
  let tbodyAprendiz = document.createElement("tbody");
  tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height:"100"></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>`;
  aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz: Aprendiz): void {
  let numeroCertificados: number = aprendiz.darCursosCertificados();
  let trelement: HTMLElement = document.createElement("tr");
  trelement.innerHTML = `<td><b>Cursos certificados</b></td>
    <td>${numeroCertificados}</td>`;
  estadisticasTable.appendChild(trelement);
}

function mostrarCursosAprendiz(cursos: Curso[]): void {
  let cursosTBody: HTMLElement = document.createElement("tbody");
  for (let curso of cursos) {
    let trElement: HTMLElement = document.createElement("tr");
    trElement.innerHTML = `
        <td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>
        `;
    cursosTBody.appendChild(trElement);
  }
  cursosTable.appendChild(cursosTBody);
}
