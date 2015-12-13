function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// TODO Key Value JSON object made from browser action form.
var values = [ "He Who Must Not Be Named", "You Know Who", "Voldemort", "Tom Riddle", "Hitler" ]
var keys = [
  "Donald Trump",
  "Donald John Trump",
  "Donald J Trump",
  "Donald J. Trump",
  "donald trump",
  "donald j trump",
  "donald j. trump",
  "donald john trump",
  "DONALD TRUMP"
];
var name = values[getRandomInt(0, values.length-1)];
var i, regex;
for( i = 0; i < keys.length; i++) {
  regex = new Regexp(keys[i], "g");
  document.body.innerHTML = document.body.innerHTML.replace(regex, name);
}
