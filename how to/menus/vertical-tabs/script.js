// Declare variable
var i, tab, tabId, tabLinks, tabChildren, closeBtn;

// Add event handler function when click on each close button
closeBtn = document.getElementsByClassName("topright");
for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener("click", closeTabContent);
}

// Add event handler function when click on each tablink
tabLinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tabLinks.length; i++) {
    tabId = tabLinks[i].dataset.id;
    tabLinks[i].addEventListener("click", openTabContent);
}

function closeTabContent(event) {
    var parentId = event.target.parentElement.id;
    document.getElementById(parentId).style.display = "none";
}

function openTabContent(event) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(event.target.dataset.id).style.display = "block";
    event.target.classList.add("active");
}

// Find the default open tab, and click on it
tab = document.getElementsByClassName("tab");
tabChildren = tab.item(0).children;
for (i = 0; i < tabChildren.length; i++) {
    if (tabChildren[i].dataset.default === "true") {
        tabChildren[i].click();
    }
}
