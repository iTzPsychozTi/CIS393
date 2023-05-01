window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler()
{
    //main menu buttons
    let chikButton = document.getElementById("chik-fil-a");
    let moesButton = document.getElementById("moes");
    
    //loads chik-fil-a items
    chikButton.addEventListener("click", function loadChikPage(){
        window.location.href = 'chik_menu.html';
    });
    
    //loads moes items
    moesButton.addEventListener("click", function loadMoesPage(){
        window.location.href = 'moes_menu.html';
    });
}