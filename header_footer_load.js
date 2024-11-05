function loadHeader(){
    const headerPlaceholder = document.getElementById('header-placeholder');

    //Contenido del header

    headerPlaceholder.innerHTML= `
       <header class="header">
        <div class="logo">
           <h1> Leafi </h1>
       </div>


       <nav class="nav">
         <ul>
         <li><a href="Main.html"> INICIO </a></li>
         <li><a href=" "> NOSOTROS </a></li>
         </ul>
       </nav>
        <div class="icons">
        <a href="https://www.facebook.com/profile.php?id=100025742716587" target="_blank" rel="noopener noreferrer">
         <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/kedros_contacto/" target="_blank" rel="noopener noreferrer">
         <i class="fab fa-instagram"></i>
        </a>

        </div>
        
     </header>
    `;
}


window.onload = function() {
    loadHeader();
    loadFooter();
};