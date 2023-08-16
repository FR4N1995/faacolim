(function(){

    const modalDos = document.querySelector('#promociondos');


    if (modalDos) {
        modalDos.addEventListener('click', mostrarmodalDos);
    }

    function mostrarmodalDos (){
        // alert('hola que hace');
        const divModalDos = document.createElement('DIV');
        divModalDos.classList.add('modalDos');

        divModalDos.innerHTML = `
        <form class="contenedorModalDos"> 
        <h1>Titulo</h1>
        <div class="campo"> 
            <picture>
            <img  class="modalImagen" src="./img/conoCartel.png" alt="imagen portada">
            </picture>
        <div>
    
        <div class="campo"> 
        
            <p class="oferta">SPEC: <span class= "ofertaSpan">DTY 75D/36F SD RW NTM </span></p>
            <p class="oferta">GRADE: <span class= "ofertaSpan"> AA | N.WT(KG) | 33</span></p>
            <p class="oferta">LOT: <span class= "ofertaSpan">2V0782SE-49 | G. WT (KG) | 35.65</span></p>
    
        </div>
        
        <div class="opciones">
             <button type="button" class="modal__btncerrar">Cerrar</button>
        </div>
    </form>
        
    `;
    
    setTimeout(() => {
        const contenedorModalDos = document.querySelector('.contenedorModalDos');
        contenedorModalDos.classList.add('animar');
    },100);
    
    divModalDos.addEventListener('click', function(evento){
        evento.preventDefault();
        if(evento.target.classList.contains('modal__btncerrar')){
            const contenedorModalDos = document.querySelector('.contenedorModalDos')
            contenedorModalDos.classList.add('cerrarModal');
            setTimeout(() => {
                divModalDos.remove();
            }, 500);
        }
    });
    document.querySelector('.contenedor').appendChild(divModalDos);
    }
})();