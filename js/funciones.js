function toggleLogin() {
    let caja = document.getElementById("cajaLogin");
    caja.style.display = caja.style.display === "block" ? "none" : "block";
}

function entrarAlMenu() {
    document.getElementById("cajaLogin").style.display = "none";
    
    let menu = document.getElementById("sidebar");
    if (menu) {
        menu.classList.add("activo");
    }
}

function votarSeccion() {
    let seccion = document.getElementById("seccionInput").value.toLowerCase();
    let mensaje = "";
    
    switch(seccion) {
        case "norte":
            mensaje = "Voto registrado para Norte";
            break;
        case "sur":
            mensaje = "Voto registrado para Sur";
            break;
        case "centro":
            mensaje = "Voto registrado para Centro";
            break;
        default:
            mensaje = "Sección no válida";
    }
    document.getElementById("resultado1").innerText = mensaje;
}

let sumaTotal = 0;
function agregarNumero() {
    let num = Number(document.getElementById("numPositivo").value);
    
    if (num <= 0) {
        document.getElementById("resultado2").innerText = "Suma finalizada. Total: " + sumaTotal;
    } else {
        sumaTotal += num;
        document.getElementById("resultado2").innerText = "Suma actual: " + sumaTotal;
        document.getElementById("numPositivo").value = "";
    }
}

function reiniciarSuma() {
    sumaTotal = 0;
    document.getElementById("resultado2").innerText = "Suma actual: 0";
}

function ordenarNumeros() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    
    let lista = [n1, n2, n3];
    lista.sort(function(a, b) { return b - a; });
    
    document.getElementById("resultado3").innerText = "De mayor a menor: " + lista.join(", ");
}

function calcularImpuesto() {
    let bruto = Number(document.getElementById("importeBruto").value);
    let neto = 0;
    
    if (bruto > 15000) {
        neto = bruto * 1.16;
    } else {
        neto = bruto * 1.10;
    }
    
    document.getElementById("resultado4").innerText = "Importe neto: " + neto;
}

function calcularSueldo() {
    let sueldo = 40000;
    let anos = Number(document.getElementById("anosEmpresa").value);
    
    if (anos > 10) {
        sueldo = sueldo * 1.10;
    } else if (anos > 5) {
        sueldo = sueldo * 1.07;
    } else if (anos > 3) {
        sueldo = sueldo * 1.05;
    } else {
        sueldo = sueldo * 1.03;
    }
    
    document.getElementById("resultado5").innerText = "Sueldo total: " + sueldo + " euros";
}

function numerosImpartes(){
    let numeros = 1;
    let numerostotal = 0;
    let imprimir = "";

    while(numeros < 100){
        numerostotal += numeros;
        numeros += 2;
    }
    String(document.getElementById("resultadowhile1").innerText = numerostotal);
}

function asteriscos(){
    let asterisquitos = Number(document.getElementById("numAsteriscos").value);
    let imprimirlos = "";

    for (i = 0; i < asterisquitos; i++){
        imprimirlos += "*"; 
    }
    document.getElementById("resultadowhile2").innerText = imprimirlos;
}

function Tabla(){
    var table = Number(document.getElementById("numTabla").value);
    var r = "" ;
    for(let i = 0; i<=10; i++){
        r += table + ' x ' + i + ' = ' + (table*i) + '<br>';
        document.getElementById("resultadowhile3").innerHTML = r;
    }
}


let paises = ["México", "Peru", "Colombia", "Argentina", "Panama", "Cuba", "Portugal", "Chile", "Venezuela", "Guatemala"];

function Pop(){

    let resultado = [];
    
    paises.pop();
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo1").innerHTML = resultado;
}

function Shift(){

    let resultado = [];
    
    paises.shift();
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo2").innerHTML = resultado;
}

function Push(){
    let nuevoPais = document.getElementById("textpush").value;
    let resultado = [];
    let aviso = "";

    if (nuevoPais.trim() === "") {
        aviso = "Por favor, ingresa un país válido.";
        document.getElementById("resultadoarreglo3").innerHTML = aviso;
        return;
    }
    paises.push(nuevoPais);
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo3").innerHTML = resultado;
}

function Unshift(){
    let nuevoPais = document.getElementById("textunshift").value;
    let resultado = [];
    let aviso = "";

    if (nuevoPais.trim() === "") {
        aviso = "Por favor, ingresa un país válido.";
        document.getElementById("resultadoarreglo4").innerHTML = aviso;
        return;
    }
    paises.unshift(nuevoPais);
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo4").innerHTML = resultado;
}

function Splice(){
    let resultado = [];
    let lugar = Number(document.getElementById("lugarSplice").value);
    let pais = document.getElementById("nuevoPaisSplice").value;

    if (isNaN(lugar) || lugar <= 0 || lugar > paises.length) {
        document.getElementById("resultadoarreglo5").innerHTML = "Índice inválido.";
        return;
    }

    if (pais.trim() === "") {
        document.getElementById("resultadoarreglo5").innerHTML = "Por favor, ingresa un país válido.";
        return;
    }

    paises.splice(lugar - 1, 0, pais);
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo5").innerHTML = resultado;
}

function Delete() {
    let resultado = [];
    let lugar = Number(document.getElementById("lugarDelete").value);

    if (isNaN(lugar) || lugar <= 0 || lugar >= paises.length) {
        document.getElementById("resultadoarreglo6").innerHTML = "Índice inválido.";
        return;
    } 

    delete paises[lugar-1];
    let paisesFiltrados = paises.filter(Boolean); 
    resultado = paisesFiltrados.join(", ") + "<br>";
    document.getElementById("resultadoarreglo6").innerHTML = resultado;
}

function Reverse() {
    let resultado = [];
    paises.reverse();
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo7").innerHTML = resultado;
}

function Sort() {
    let resultado = [];
    paises.sort();
    resultado = paises.join(", ") + "<br>";
    document.getElementById("resultadoarreglo8").innerHTML = resultado;
}

let contador = 0;

function Concat() {
    let aviso = ""; 
    let resultado = [];
    let nuevosPaises = ["Australia", " Japón", " Polonia", " Alemania", " Francia"];

    if(contador >= 1){
        aviso = "Ya se han agregado los nuevos países.";
        document.getElementById("resultadoarreglo9").innerHTML = aviso;
    }
    else{
        paises = paises.concat(nuevosPaises);
        resultado = paises.join(", ") + "<br>";
        document.getElementById("resultadoarreglo9").innerHTML = resultado;
        contador++;
    }
}

function Join() {
    let resultado = [];
    resultado = paises.join(" - ") + "<br>";
    document.getElementById("resultadoarreglo10").innerHTML = resultado;
}

function Length() {
    let resultado = [];
    resultado = "La longitud del arreglo es: " + paises.length + "<br>";
    document.getElementById("resultadoarreglo11").innerHTML = resultado;
}
