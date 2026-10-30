var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menuce() {
    if (MenuItens.style.maxHeight == "0px") {
        MenuItens.style.maxHeight = "200px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}

var EntrarPainel = document.getElementById("EntrarPainel");
var CadastroSite = document.getElementById("CadastroSite");
var Indicador = document.getElementById("Indicador");

function Cadastro(){
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}

function Entrar(){
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}

const entrar = document.getElementById("EntrarPainel");
const cadastro = document.getElementById("CadastroSite");
const indicador = document.getElementById("Indicador");

function mostrarCadastro() {
    entrar.style.transform = "translateX(-100%)";
    cadastro.style.transform = "translateX(0)";

    if (window.innerWidth <= 600) {
        indicador.style.transform = "translateX(100px)";
    } else {
        indicador.style.transform = "translateX(150px)";
    }
}

function mostrarEntrar() {
    entrar.style.transform = "translateX(0)";
    cadastro.style.transform = "translateX(100%)";
    indicador.style.transform = "translateX(0)";
}