//creando el Menú lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let sqlconmysql = document.getElementById("sqlconmysql");
crearBarra(sqlconmysql);
let python = document.getElementById("python");
crearBarra(python);
let autocad = document.getElementById("autocad");
crearBarra(autocad);
let excel = document.getElementById("excel");
crearBarra(excel);
let tangoGestion = document.getElementById("tangoGestion");
crearBarra(tangoGestion);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

//función de animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalSqlconmysql = setInterval(function(){
            pintarBarra(sqlconmysql, 11, 1, intervalSqlconmysql);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 11, 2, intervalPython);
        },100);
        const intervalAutocad = setInterval(function(){
            pintarBarra(autocad, 15, 3, intervalAutocad);
        },100);
        const intervalExcel = setInterval(function(){
            pintarBarra(excel, 16, 4, intervalExcel);
        },100);
        const intervalTangoGestion = setInterval(function(){
            pintarBarra(tangoGestion, 11, 5, intervalTangoGestion);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "blue";
    }else{
        clearInterval(interval)
    }
}

//Scrolling
window.onscroll = function(){
    efectoHabilidades();
}