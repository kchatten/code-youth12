

// ----------------------- REFERENCES --------------------

let activePage = window.location.pathname;
activePage = activePage.replace("/Webpage/", "");
let activePalette;
let txtInactiveColor;

console.log(activePage);

// ----------------------- Sidebar ----------------------- 

// Create the container
const sidebarMaster = document.createElement("div");

// Style it
sidebarMaster.style.height = "100vh";
sidebarMaster.style.width = "250px";
sidebarMaster.style.boxSizing = "border-box";



// This separates the main and sub containers within the master container.
sidebarMaster.style.display = "flex";
sidebarMaster.style.flexDirection = "column";
sidebarMaster.style.justifyContent = "space-between";

// Append it
document.body.appendChild(sidebarMaster);


// The main container appears at the top of the sidebar.
const sidebarMain = document.createElement("div");
sidebarMain.style.boxSizing = "border-box";
sidebarMaster.appendChild(sidebarMain);


// The sub container appears at the bottom of the sidebar.
const sidebarSub = document.createElement("div");
sidebarSub.style.boxSizing = "border-box";
sidebarMaster.appendChild(sidebarSub);

// ----------------------- Navigation Buttons ------------------------


// HOME
const btnHome = document.createElement("button");

// Give it function
btnHome.addEventListener('click', function(){
    window.location.href = "homepage.html"
})

// Style it
btnHome.style.width = "100%";
btnHome.style.height = "50px";

btnHome.innerHTML = "<b>Home</b>";
btnHome.style.fontSize = "25px";

// Append it
sidebarMain.appendChild(btnHome);

// HISTORY
const btnHistory = document.createElement("button");

// Give it function
btnHistory.addEventListener('click', function(){
    window.location.href = "history.html"
})

// Style it
btnHistory.style.width = "100%";
btnHistory.style.height = "50px";

btnHistory.innerHTML = "<b>History</b>";
btnHistory.style.fontSize = "25px";

// Append it
sidebarMain.appendChild(btnHistory);

// THE BASICS
const btnBasics = document.createElement("button");

// Give it function
btnBasics.addEventListener('click', function(){
    window.location.href = "thebasics.html"
})

// Style it
btnBasics.style.width = "100%";
btnBasics.style.height = "50px";

btnBasics.innerHTML = "<b>The Basics</b>";
btnBasics.style.fontSize = "25px";

// Append it
sidebarMain.appendChild(btnBasics);

// RESOURCES
const btnFAQ = document.createElement("button");

// Give it function
btnFAQ.addEventListener('click', function(){
    window.location.href = "faqs.html"
})

// Style it
btnFAQ.style.width = "100%";
btnFAQ.style.height = "50px";

btnFAQ.innerHTML = "<b>F.A.Q's</b>";
btnFAQ.style.fontSize = "25px";

// Append it
sidebarSub.appendChild(btnFAQ);

// RESOURCES
const btnResources = document.createElement("button");

// Give it function
btnResources.addEventListener('click', function(){
    window.location.href = "resources.html"
})

// Style it
btnResources.style.width = "100%";
btnResources.style.height = "50px";

btnResources.style.backgroundColor = "transparent";

btnResources.innerHTML = "<b>Resources</b>";
btnResources.style.fontSize = "25px";

// Append it
sidebarSub.appendChild(btnResources);

// ----------------------- FUNCTIONS & LOGIC ----------------------

CheckActiveSidebar()

function CheckPalette(){
    if (activePage == "homepage.html" || activePage == "history.html" || activePage == "thebasics.html"){
    activePalette = "sad";}
    else {activePalette = "happy"};

    if(activePalette == "sad"){

        sidebarMaster.style.border = "4px solid darkgray";

        bgInaColor = "transparent";
        bgActColor = "darkgray"; 

        brInactive = "1px solid darkgray";
        brActive = "1px black";

        txtActiveColor = "black";
        txtInactiveColor = "white";
    }
    if(activePalette =="happy"){


        sidebarMaster.style.border = "4px solid cornflowerblue";

        bgInaColor = "transparent";
        bgActColor = "cornflowerblue"; 

        brInactive = "1px solid cornflowerblue";
        brActive = "1px cornflowerblue";

        txtActiveColor = "white";
        txtInactiveColor = "cornflowerblue";
    }
}

function CheckActiveSidebar(){
    CheckPalette()
    console.log(activePalette)
    if (activePage == "homepage.html")
    {
        btnHome.style.backgroundColor = bgActColor;
        btnHome.style.border = brActive;
        btnHome.style.color = txtActiveColor;
    }
    else{ 
        btnHome.style.backgroundColor = bgInaColor;
        btnHome.style.border = brInactive;
        btnHome.style.color = txtInactiveColor;
    }
    if (activePage == "history.html")
    {
        btnHistory.style.backgroundColor = bgActColor;
        btnHistory.style.border = brActive;
        btnHistory.style.color = txtActiveColor;
    }
    else{ 
        btnHistory.style.backgroundColor = bgInaColor;
        btnHistory.style.border = brInactive;
        btnHistory.style.color = txtInactiveColor;
    }
    if (activePage == "thebasics.html")
    {
        btnBasics.style.backgroundColor = bgActColor;
        btnBasics.style.border = brActive;
        btnBasics.style.color = txtActiveColor;
    }
    else{ 
        btnBasics.style.backgroundColor = bgInaColor;
        btnBasics.style.border = brInactive;
        btnBasics.style.color = txtInactiveColor;
    }
    if (activePage == "faqs.html")
    {
        btnFAQ.style.backgroundColor = bgActColor;
        btnFAQ.style.border = brActive;
        btnFAQ.style.color = txtActiveColor
    }
    else{ 
        btnFAQ.style.backgroundColor = bgInaColor;
        btnFAQ.style.border = brInactive;
        btnFAQ.style.color = txtInactiveColor;
    }
    if (activePage == "resources.html")
    {
        btnResources.style.backgroundColor = bgActColor;
        btnResources.style.border = brActive;
        btnResources.style.color = txtActiveColor;
    }
    else{ 
        btnResources.style.backgroundColor = bgInaColor;
        btnResources.style.border = brInactive;
        btnResources.style.color = txtInactiveColor;
    }
}

