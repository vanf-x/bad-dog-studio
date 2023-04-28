const bsCollapse = new bootstrap.Collapse("#navbar-nav", {
  toggle: false,
});

document.addEventListener("click", e=>{
    if(!e.target.matches(".navbar a")) return false;
    bsCollapse.hide();
})
/*
navbar-nav es la clase que tiene el <ul> del navegador. esta clase contiene todos los 
<li> que contienen los <a> que te llevan por las páginas
se le agrega un event listener al documento que si el target no es un <a> dentro de .navbar, no hace nada.
pero sí es un <a> dentro de .navbar, navbar-bar va a cerrarse. Esto es útil para las single pages.
*/