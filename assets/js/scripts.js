var input, container, val, randomNum, body;

input = document.getElementById('input');
container = document.getElementsByClassName('container')[0];
body = document.getElementsByTagName('body')[0];
// test
console.log(input);


// this will not reset when any letters are deleted
// read why this is
window.onkeyup = function(ev) {
    // read about ev.target
    val = ev.target.value.toLowerCase();
    console.log(val);
    
    // for each object in the moodsArray
    moodsArray.forEach(function(object) {
        // for each mood in object.moods
        object.moods.forEach(function(mood) {
            // if there's a match, update the color of the background
            if (val === mood) {
                randomNum = Math.floor(Math.random() * object.colors.length);
                
                // to a random color from the colors array in that same object
                body.style.backgroundColor = object.colors[randomNum];
            }
        });
    });
}