(function(){
    const navegacion = document.querySelector('.movil__navegacion');
    
    document.addEventListener('DOMContentLoaded', function(){
        movilMenuHeader();
    })
    
    function movilMenuHeader(){
        const movileMenu = document.querySelector('.movil__barras');
        movileMenu.addEventListener('click', navegacionReponsive);
    }
    
    function navegacionReponsive(){
        if (navegacion.classList.contains('show')) {
            navegacion.classList.remove('show')
        } else {
            navegacion.classList.add('show');
        }
    }
    
    window.addEventListener('resize', function(){
        const anchoPantalla = document.body.clientWidth;
        if (anchoPantalla >= 768) {
            navegacion.classList.remove('show');
        }
    })
    
    
    })();