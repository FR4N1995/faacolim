(function(){
const modal = document.querySelector('#promocion');

if (modal) {
    modal.addEventListener('click', mostrarPromocion);
}

function mostrarPromocion(){
    
    const divmodal = document.createElement('DIV');
    divmodal.classList.add('modal');

    divmodal.innerHTML = `
    <form class="contenedorModal"> 
    <h1>Crudo calibre 75 Texturizado</h1>
    <div class="campo"> 
        <picture>
        <source  class="modalImagen" srcset="./img/pngconoblanco.webp" type="image/webp">
        <source  class="modalImagen" srcset="./img/pngconoblanco.avif" type="image/avif">
        <img  class="modalImagen" src="./img/pngconoblanco.jpg" alt="imagen portada">
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
    const contenedorModal = document.querySelector('.contenedorModal');
    contenedorModal.classList.add('animar');
},100);

divmodal.addEventListener('click', function(evento){
    evento.preventDefault();
    if(evento.target.classList.contains('modal__btncerrar')){
        const contenedorModal = document.querySelector('.contenedorModal')
        contenedorModal.classList.add('cerrarModal');
        setTimeout(() => {
            divmodal.remove();
        }, 500);
    }
});
document.querySelector('.contenedor').appendChild(divmodal);
}
})();