(function(){

    const contacto = document.querySelector('.contacto');
    const formulario = document.querySelector('#formulario');

    if(contacto){

        formulario.addEventListener('submit', enviarMensaje);        
        
        function enviarMensaje (e) {
             e.preventDefault();
            // const nombreSanitizado = validarString(nombre);
            const nombre = e.target.nombre.value.trim();
            const email = e.target.email.value.trim();
            const apellidos = e.target.apellidos.value.trim();
            const numero = e.target.numero.value.trim();
            const mensaje = e.target.mensaje.value.trim();
            const estado = e.target.estado.value.trim();
            const municipio = e.target.munisipio.value.trim();

            const emailValidado = validarCorreo(email);
            const nombreValidado = validarString(nombre);
            const numeroValidado = validarString(numero);
            const estadoValidado= validarString(estado)
            const municipioValidado = validarString(municipio);


        //    console.log(nombreValidado);

            if(nombre === '' || email === '' || apellidos === '' || mensaje === '' || estado === ''){
                mostrarAlerta("Todos los campos son obligatorios", "error");
                // console.log('Todos los campos son obligatorios');
                return;
            }

            if (emailValidado=== false || nombreValidado === false || municipioValidado === false || estadoValidado === false || numeroValidado === true || estado.length <= 3 || numero.length < 10 || mensaje.length < 30) {
               mostrarAlerta('revisa tus datos alguno no es correcto', 'error');;
                return;
            }
        
          
            const url = `https://web.whatsapp.com/send?phone=+524451053628&text=${encodeURIComponent("nombre: " + nombre + " apellidos " + apellidos + " email:" + email + " Mensaje: " + mensaje)}`
            window.open(url, '_blank');

        }


        function validarCorreo(correo){
            var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

            return expresionRegular.test(correo);
        }

        function validarString(texto){
            var expresionRegular = /^[A-Za-z\s']+$/;
            return expresionRegular.test(texto);
        }

        function mostrarAlerta(mensaje, tipo){
                const alertaError = document.createElement('DIV');
                alertaError.classList.add('alerta');

                if(tipo === 'error'){
                    alertaError.classList.add('danger');
                } else{
                    alertaError.classList.add('succes');
                }

                alertaError.textContent = mensaje;
                document.querySelector("#formulario").appendChild(alertaError);


                setTimeout(() => {
                    alertaError.remove();
                }, 3000);
        }


    }

})();