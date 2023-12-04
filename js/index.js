let usuario= "admin"
let password= "12345"
let usuarioConectado= false;

function verificarUsuario(usuarioNuevo, contrasenaNueva) {
    if (usuario === usuarioNuevo && password === contrasenaNueva){
        usuarioConectado = true;
        alert("Has ingresado correctamente");}
        
    else{
        alert("El usuario y la contraseña son incorrectos, intente nuevamente");
    }
}

while(usuarioConectado === false){
    let usuarioIngresado = prompt("ingrese un nombre de usuario");
    let contrasenaIngresada = prompt("Ingrese la contraseña");

    verificarUsuario(usuarioIngresado, contrasenaIngresada);

}