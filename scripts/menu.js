var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("div-list-menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    menu.style.backgroundColor ="#542ecf"; 
    menu.style.width = "100%";
    menu.style.height = "100px";
    menu.style.marginTop = "150px";
    menu.style.marginBottom = "10px";
}
});