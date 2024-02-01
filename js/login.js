
document.addEventListener(`DOMContentLoaded`, function (){
    const btnSesion = document.getElementById("btnSesion");
    const usuarioAutorizado = "coderhouse";
    const passwordAutorizado = "2024";

    function inicioDeSesion(){
        return new Promise((resolve,reject)=> {
            Swal.fire({
                    title: "Inicio de sesión",
                    html: `
                        <input type="text" id="usuario" class="swal2-input" placeholder="usuario">
                        <input type="text" id="password" class="swal2-input" placeholder="password">
                    `,
                confirmButtonText: "Ingresar",
                showCancelButton: true,
                cancelButtonText: "Cancelar"
                }).then((result) => {
                    if (result.isConfirmed) {
                        const usuario = document.getElementById("usuario").value;
                        const password = document.getElementById("password").value;

                        if (usuario === usuarioAutorizado && password === passwordAutorizado){
                            resolve();
                        } else{
                            reject(new Error("Datos ingresados incorrectos"));
                        }
                    }
                    else{
                            reject(new Error("Inicio de sesion cancelado"));
                        }
        });
    });
}

        btnSesion.addEventListener("click", () => {
            inicioDeSesion()
            .then(() => {
                return Swal.fire({
                    title: 'Desea guardar los cambios?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Si',
                    denyButtonText: `No`
                });
            })
            .then((result) => {
                    if (result.isConfirmed) {
                        localStorage.setItem(`sesionIniciad`, `true`);
                        
                        Swal.fire({
                            title: "Listo!",
                            icon: "success",
                            confirmButtonText: false,
                            timer: 1000
                        })
                        .then(()=> {
                            window.location.href= "shop.html";
                        });
                    } else if (result.isDenied) {
                            window.location.href= "shop.html";
                        }
                })
            .catch((error) => {
                console.error(error.message);

            Swal.fire({
                icon:"error",
                title:"Error",
                text: error.message
            });
        });
    });

    const mensaje = "Log In";
    const elemento = document.getElementById("tituloLogIn");
    let indice = 0;

    function mostrarLetra(){
        elemento.textContent += mensaje[indice];
        indice++;

    if( indice < mensaje.length){
        setTimeout(mostrarLetra,100);
        }
    }
    setTimeout(mostrarLetra,1000);
});