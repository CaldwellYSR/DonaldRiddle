function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// TODO Key Value JSON object made from browser action form.
var values = [
    "debate",
    "poll",
    "candidate",
    "drone",
    "vows to",
    "at large",
    "successfully",
    "expands",
    "an unknown number",
    "front runner",
    "global",
    "years",
    "minutes",
    "no indication",
    "urged restraint by",
    "horsepower"
]
var keys = [
    "dance off",
    "psychic reading",
    "airbender",
    "dog",
    "probably wont",
    "very large",
    "suddenly",
    "physically expands",
    "like hundreds",
    "blade runner",
    "spherical",
    "minutes",
    "years",
    "lots of signs",
    "drunkenly egged on",
    "tons of horsemeat"
];
var i, regex;
for( i = 0; i < keys.length; i++) {
  regex = new RegExp(keys[i], "g");
  document.title = document.title.replace(regex, values[i]);
  document.body.innerHTML = document.body.innerHTML.replace(regex, values[i]);
}
