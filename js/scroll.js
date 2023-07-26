(function(){
    //script para hacer que la barra se muestre cuando deslices
    const nav = document.querySelector('.header');
    // const cuerpo = document.querySelector('body')
     if (nav) {
        // alert('Hola');

        const scrollFijo = document.querySelector('.scrollFijo');
        // const header = document.querySelector('header');
        //creamos esta variable para que la barra tambien salga en la pestalla de catalogo
        // const catalogopage = document.querySelector('.catalogo__tabs');
        const body = document.querySelector('body');
        window.addEventListener('scroll', function(){
             console.log(scrollFijo.getBoundingClientRect())
            // console.log(catalogopage.getBoundingClientRect())
            if (scrollFijo.getBoundingClientRect().top < 0 ) {
                nav.classList.add('fijo');
                body.classList.add('body-scroll');
            }else{
                nav.classList.remove('fijo');
                body.classList.remove('body-scroll');
            }
        })
    
     

    }


})();