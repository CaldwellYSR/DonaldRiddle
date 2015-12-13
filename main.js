var options = [ "He Who Must Not Be Named", "You Know Who", "Voldemort", "Tom Riddle", "Hitler" ]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var name = options[getRandomInt(0, options.length-1)];
var donald_trump = "Donald Trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "Donald John Trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "Donald J Trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "Donald J. Trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "donald trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "donald j trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "donald j. trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "donald john trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
donald_trump = "Trump", dt = new RegExp(donald_trump, "g");
document.body.innerHTML = document.body.innerHTML.replace(dt, name);
