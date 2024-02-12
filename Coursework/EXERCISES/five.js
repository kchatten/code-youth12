const btnAbigail = document.getElementById("abigail");
const btnBoris = document.getElementById("boris");
const btnCarl = document.getElementById("carl");

const textToChange = document.getElementById("text");
const nameToBold = document.createElement("p"); 

const selectSquare = document.getElementById("selectSquare");


btnAbigail.addEventListener("click", function(){

    btnBoris.classList.remove("selected");
    btnCarl.classList.remove("selected");
    
    btnAbigail.classList.add("selected");
    btnAbigail.appendChild(selectSquare);

    if (selectSquare.style.display !== "flex")
    {
        selectSquare.style.display = "flex";
    }

    textToChange.innerHTML = "Wow I love this product so much it changed my life forever! —" + "<b>Abigail Anthony</b>";
})
btnBoris.addEventListener("click", function(){

    btnAbigail.classList.remove("selected");
    btnCarl.classList.remove("selected");
    
    btnBoris.classList.add("selected");

    btnBoris.appendChild(selectSquare);

    if (selectSquare.style.display !== "flex")
    {
        selectSquare.style.display = "flex";
    }

    textToChange.innerHTML = "Wow I love this product so much it changed my life forever! —" + "<b>Boris Beretta</b>";
})
btnCarl.addEventListener("click", function(){

    btnAbigail.classList.remove("selected");
    btnBoris.classList.remove("selected");
    
    btnCarl.classList.add("selected");
 
    btnCarl.appendChild(selectSquare);

    if (selectSquare.style.display !== "block")
    {
        selectSquare.style.display = "Block";
    }

    textToChange.innerHTML = "Wow I love this product so much it changed my life forever! —" + "<b>Carl Carlson</b>";
})

