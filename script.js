document.getElementById("menu").innerHTML = stuff;
function doNothing(){}
var stuff = ["Chicken Tandoori Pizza", "Paneer Tikka Pizza", "Veg Pizza", "Extra Veg Pizza", "Veg Supreme Pizza"];
function showMenu() {
    stuff.sort();
    document.getElementById("menu").innerHTML = stuff;
    document.getElementById("menu").style.display = "inline-block";
}
function hideMenu() {
    if (document.getElementById("menu").style.display = "inline-block") {
        document.getElementById("menu").style.display = "none";
    } else {
        doNothing();
    }
}