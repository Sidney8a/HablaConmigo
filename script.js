//Ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
    btn_open = document.getElementById("btn_open");
    body = document.getElementById("body");


//Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu_side_move");
}

//Si el ancho de la pagina es menor a 750px, ocultará el menu al recargar la pagina
if (window.innerWidth < 750){

    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");

}

//Haciendo el menu responsive(adaptable)
window.addEventListener("resize", function(){
    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu_side_move");
    
    }
    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu_side_move");
    
    }
});
