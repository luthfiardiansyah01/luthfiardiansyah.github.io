var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 15 && hourNow < 19) {
    greeting = 'Good Evening!';
    var headerColor = document.getElementsByTagName("HEADER")[0];
    headerColor.style.backgroundColor = "#fec051";
} else if (hourNow > 10 && hourNow < 16) {
    greeting = 'Good Afternoon!';
    var headerColor = document.getElementsByTagName("HEADER")[0];
    headerColor.style.backgroundColor = "#FFFB77";
    headerColor.style.color = "#262622";
} else if (hourNow > 0 && hourNow < 11) {
    greeting = 'Good Morning!';
    var headerColor = document.getElementsByTagName("HEADER")[0];
    headerColor.style.backgroundColor = "#87ceeb";
} else {
    greeting = 'Good Night!';
    var headerColor = document.getElementsByTagName("HEADER")[0];
    headerColor.style.backgroundColor = "#000000";
    headerColor.style.color = "#fff";
}
document.write('<h1>' + 'Hello, ' + greeting + '</h1>');