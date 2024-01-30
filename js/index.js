//PRE ENTREGA 1 -------------------------------------------------------------------------

/*let usuario= "admin"
//let password= "12345"
//let usuarioConectado= false;

//function verificarUsuario(usuarioNuevo, contrasenaNueva) {
    //if (usuario === usuarioNuevo && password === contrasenaNueva){
        //usuarioConectado = true;
        //alert("Has ingresado correctamente");}
        
    //else{
        //alert("El usuario y la contraseña son incorrectos, intente nuevamente");
    //}
//}

//while(usuarioConectado === false){
    //let usuarioIngresado = prompt("ingrese un nombre de usuario");
    //let contrasenaIngresada = prompt("Ingrese la contraseña");

    //verificarUsuario(usuarioIngresado, contrasenaIngresada);

//}

 //FIN DE LA PREENTREGA 1 ----------------------------------------------------

//EJEMPLOS
/*Variable

let edadPerro= 10

edadPerro= edadPerro * 7;
console.log(edadPerro)
--------------------------
let radioCirculo= 10
area= (10 * radioCirculo);
console.log(area)
------------------------------------------------------
Funciones

function saludar(nombre){
    return("Hola " + nombre + " como estas?")
}
let miNombre= "milagros";
let saludo= saludar(miNombre)

console.log(saludo)
---------------------------------
function sumar(numero1,numero2){
    return numero1 + numero2;
}
let resultado= sumar(10, 10);
console.log("La suma es: " + resultado)
------------------------------------------------------
Bucles

for (i=1; i<=5; i++){
    console.log(i)
}
----------------------------
for(i=1; i<=10; i++){
    console.log(5*i)
}*/

/* Ejemplo for
----------------------------------
for(let i=2; i<=20; i++){
    if(i%2==0)
    console.log(i)
}*/
/*cuenta atras
----------------------
let contador= 10
while(contador >0){
    console.log(contador)
    contador--
}*/

/*ejercicio
--------------------------------------
let sumaAcumulativa=0

while(true){
    let numero =parseFloat(prompt("Ingresa un numero entero o uno negativo para detener"))
    if (numero <0){
        break;
    }
    sumaAcumulativa+=numero;
}
console.log("La suma acumulativa es: " + sumaAcumulativa)*/

/*ejemplo
----------------------------------------
let numeroAAdivinar=60

while(true){
    let numero= parseFloat(prompt("Adivina el numero entre el 1 y el 100"));
    if(numero > 0 && numero < 40){
        alert("Pone un numero mas grande a ese");
    }
    else if(numero > 40 && numero<60){
        alert("Estas cerca");
    }
    else if (numero >60 && numero <=100){
        alert("Te pasaste, baja")
    }
    else if (numero === numeroAAdivinar){
    alert("ADIVINASTE");
    }
    else{
        alert("Ese numero no es valido, pone del 1 al 100")
    }
}*/

/*PRE ENTREGA 2 -------------------------------------------------------------------------
let productos= [
    {
        nombre: "Top bordado",
        precio: 6000,
        color: "Rojo",
        talle: "M"
    },
    {
        nombre: "Pijama de dama",
        precio: 10000,
        color: "Rosa viejo",
        talle: "L"
    },
    {
        nombre: "Medias cancan",
        precio: 4000,
        color: "Negro",
        talle: "4"
    },
    {
        nombre: "Short",
        precio: 17000,
        color: "Jean",
        talle: "S"
    },
    {
        nombre: "Corpiño",
        precio: 7500,
        color: "Blanco",
        talle: "XL"
    }
];

let nuevoProducto = {};

nuevoProducto.nombre = prompt("Ingrese el nombre de una nueva prenda de ropa para mujer:");
nuevoProducto.precio = parseFloat(prompt("Ingrese el precio del nuevo producto:"));
nuevoProducto.color = prompt("Ingrese el color del nuevo producto:");
nuevoProducto.talle = prompt("Ingrese el talle del nuevo producto:");

productos.push(nuevoProducto);

productos.sort(function(a,b){
    return a.precio - b.precio
});

console.log(productos); 

FIN DE LA PREENTREGA 2 ----------------------------------------------------*/


//PRE ENTREGA 3 -----------------------------------------------------------------

document.addEventListener(`DOMContentLoaded`, function (){

    const carritoDeCompras = [];
    const SECTION_CONT_SHOP = document.getElementById("sectionContenedorShop");
    const limitePorProducto = 2;

    function agregarAlCarrito(producto){
        const cantidadEnElCarrito = carritoDeCompras.filter(function(item){
            return item.id === producto.id;
        }).length;
        if (cantidadEnElCarrito < limitePorProducto){
            carritoDeCompras.push(producto);
            console.log(`Producto añadido al carrito: ${producto.nombre} - Precio: $${producto.precio}`);
            localStorage.setItem(`carrito`, JSON.stringify(carritoDeCompras));
        
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                position: "right",
                gravity: "top",
            }).showToast();
        }  
        else{
            Toastify({
                text: `No podes agregar mas de ${limitePorProducto} unidades de ${producto.nombre} al carrito.`,
                duration: 3000,
                position: "right",
                gravity: "top",
            }).showToast();
        }
    }

    function crearTarjeta(producto){
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("cardShop");

        tarjeta.innerHTML = `
        <img src="../assets/img/art${producto.id}.jpg" alt="">
        <div>
            <h1>${producto.nombre}</h1>
            <p>$${producto.precio}</p>
            <button class="agregarAlCarrito">Agregar al carrito</button>
        </div>
    `;

    const botonCarrito = tarjeta.querySelector(".agregarAlCarrito");
    botonCarrito.addEventListener("click", function (){
        agregarAlCarrito(producto);
    });

    return tarjeta;
    }

    fetch(`productos.json`)
        .then(response => response.json())
        .then(data => {
            data.productos.forEach(producto => {
                const tarjeta = crearTarjeta(producto);
                SECTION_CONT_SHOP.appendChild(tarjeta);
            });
        })
        .catch(error => console.error("Ha ocurrido un error en la carga de los productos:", error));
    });