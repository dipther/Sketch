body = document.querySelector(".contenedor")
grande = document.createElement("div")
body.appendChild(grande)
grande.className = "grande"
slider = document.querySelector(".rango")
let tamaño = 0;
colores = document.querySelector(".colores")
valorColor = 0;
RandomONo = false;
console.log(RandomONo)
let randomColor = "black";
function calcularColor() {
    valorColor = colores.value
    return valorColor
}
function calcularTamaño() {
    tamaño = slider.value;
    return tamaño
}
for (i = 1; i <= calcularTamaño() * calcularTamaño(); i++) {
    buscarGrande = document.querySelector(".grande")
    divChico = document.createElement("div")
    buscarGrande.appendChild(divChico)
    divChico.className = "chico"
}
grande.style.gridTemplateColumns = `repeat(${calcularTamaño()},1fr)`
grande.style.gridTemplateRows = `repeat(${calcularTamaño()},1fr)`

slider.onclick = function createDivs() {
    resetear()
    contarNumeros()
    for (i = 1; i <= calcularTamaño() * calcularTamaño(); i++) {
        buscarGrande = document.querySelector(".grande")
        divChico = document.createElement("div")
        buscarGrande.appendChild(divChico)
        divChico.className = "chico"
    }
    grande.style.gridTemplateColumns = `repeat(${calcularTamaño()},1fr)`
    grande.style.gridTemplateRows = `repeat(${calcularTamaño()},1fr)`
}
function colorear(div) {
    if (RandomONo == false) {
        div.style.backgroundColor = calcularColor()
    } else if (RandomONo == true) {
        div.style.backgroundColor = crearColorRandom()
    }
}
grande.onmouseenter = function pintar1() {
    buscarDivChico = document.querySelectorAll(".chico")
    buscarDivChico.forEach((div) => {
        div.addEventListener('mousedown', () => { colorear(div) })
    })
}
grande.onmousedown = function pintar() {
    buscarDivChico = document.querySelectorAll('.chico');
    buscarDivChico.forEach((div) => {
        div.addEventListener('mouseenter', () => { colorear(div) })
    })
}
grande.onmouseup = function remover() {
    buscarDivChico = document.querySelectorAll('.chico');
    buscarDivChico.forEach((div) => {
        let clon = div.cloneNode(true);
        div.parentNode.replaceChild(clon, div)
    })
}
clearButon = document.querySelector(".clear")
clearButon.onclick = function resetear1() {
    resetear()
}
function resetear() {
    buscarDivChico = document.querySelectorAll('.chico');
    buscarDivChico.forEach((div) => {
        div.style.backgroundColor = "white"
    })
}
botonRandom = document.querySelector(".random")
function crearColorRandom() {
    randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function chequear() {

    if (RandomONo == false) {
        RandomONo = true
    }
    else if (RandomONo == true) {
        RandomONo = false
    }
    return RandomONo
}
botonRandom.onclick = function oprimiBoton() {
    chequear()
}
numerito=document.querySelector(".cantidadNumero")
function contarNumeros(){
    numerito.textContent=slider.value
}
contarNumeros()











