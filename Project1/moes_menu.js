window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler()
{
    //moes items
    let burrito = document.getElementById("burrito");
    let burritoBowl = document.getElementById("burritoBowl");
    let quesadilla = document.getElementById("quesadilla");
    let tacos = document.getElementById("tacos");
    let nachos = document.getElementById("nachos");

    //moes item event listeners
    burrito.addEventListener('click', selections);
    burritoBowl.addEventListener('click', selections);
    quesadilla.addEventListener('click', selections);
    tacos.addEventListener('click', selections);
    nachos.addEventListener('click', selections);
}

function selections()
{
    window.location.href = 'moes_ingredients.html';
}