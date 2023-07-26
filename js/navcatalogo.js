(function(){
    let catalogo = 1;
    document.addEventListener('DOMContentLoaded', function(){
         mostrarseccion();
         tabs();
    });
 
    function mostrarseccion(){
         const seccionAnterior = document.querySelector('.mostrarcatalogo');
         if (seccionAnterior) {
             seccionAnterior.classList.remove('mostrarcatalogo');
         }
 
 
     const seccion = document.querySelector(`#catalogos-${catalogo}`);
     seccion.classList.add('mostrarcatalogo');
 
     const tabAnterior = document.querySelector('.actual');
     if (tabAnterior) {
         tabAnterior.classList.remove('actual');
     }
 
     const tab = document.querySelector(`[data-catalogos="${catalogo}"]`);
     tab.classList.add('actual');
 }
 
 function tabs(){
     const botones = document.querySelectorAll('.catalogo__tabs button');
     botones.forEach( boton => {
         boton.addEventListener('click', function(evento){
             console.log(evento.target.dataset.catalogos);
             catalogo = parseInt(evento.target.dataset.catalogos);
             mostrarseccion();
         });
     });
 }
 
 
  
 
 })();