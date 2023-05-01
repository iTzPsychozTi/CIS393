window.addEventListener("DOMContentLoaded", loadedHandler);

function loadedHandler()
{
    
    //chick-fil-a items
    let chknSand = document.getElementById("chknSand");
    let grilledChknSand = document.getElementById("gchknSand");
    let nuggs = document.getElementById("chknNugg");
    let fries = document.getElementById("fries");
    let milkshake = document.getElementById("shake");

    //chik-fil-a item event listeners
    chknSand.addEventListener("click", sandwichSelection);
    grilledChknSand.addEventListener("click", sandwichSelection);
    nuggs.addEventListener("click", nuggFries);
    fries.addEventListener("click", nuggFries);
    milkshake.addEventListener("click", function shake(){
        window.location.href = 'flavors.html';
    });  
}

function sandwichSelection()
{
    window.location.href = 'chik_sandwich_toppings.html';
}

function nuggFries()
{
    window.location.href = 'sauces.html';
}