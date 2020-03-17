const btnCategorias = document.getElementById('btn-categorias'),
      grid = document.getElementById('grid'),
      btnCerrarMenu = document.getElementById('btn-cerrar'),
      contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      contenedorSubcategorias = document.querySelector('#grid .contenedor-subcategorias'),
      esDispositivoMovil = () => window.innerWidth <=800;

btnCategorias.addEventListener('mouseover', ()=>{
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
    })

    grid.addEventListener('mouseleave',()=>{
if(!esDispositivoMovil()){
grid.classList.remove('activo');
}
})

document.querySelectorAll('#menu .categorias a').forEach((elemento)=>{
    elemento.addEventListener('mouseenter',(e)=>{
      if(!esDispositivoMovil()){
        document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
          categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
              categoria.classList.add('activo');    
            }
        });
      }
      
    });
});

//EventListeners para dispositivos movil

document.querySelector('#btn-barras').addEventListener('click', (e) =>{
  e.preventDefault();
  if(contenedorEnlacesNav.classList.contains('activo')){
    contenedorEnlacesNav.classList.remove('activo')
    document.querySelector('body').style.overflow = 'visible'
  }else{
   contenedorEnlacesNav.classList.add('activo')
   document.querySelector('body').style.overflow = 'hidden'
  }

})

//click en boton de todos las categorias (para version movil)
btnCategorias.addEventListener('click',(e) =>{
  e.preventDefault();
  grid.classList.add('activo');
  btnCerrarMenu.classList.add('activo');
})

//Boton de regresar en el menu de categorias
document.querySelector('#grid .categorias .btn-regresar').addEventListener('click',(e) =>{
  e.preventDefault();
  grid.classList.remove('activo');
  btnCerrarMenu.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
  elemento.addEventListener('click',(e)=>{
    if(esDispositivoMovil()){
    contenedorSubcategorias.classList.add('activo');
    document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
      categoria.classList.remove('activo');
      if(categoria.dataset.categoria == e.target.dataset.categoria){
        categoria.classList.add('activo');
      }
    })
    }
  });
});

//Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) =>{
  boton.addEventListener('click',(e) =>{
    e.preventDefault();
    contenedorSubcategorias.classList.remove('activo');
  });
});

btnCerrarMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelectorAll('#menu .activo').forEach((elemento)=>{
    elemento.classList.remove('activo');
  });
  document.querySelector('body').style.overflow = 'visible';
});

