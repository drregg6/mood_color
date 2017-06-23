var input = document.getElementById('input');
var container = document.getElementsByClassName('container')[0];

console.log(input);


// this will not reset when any letter is deleted
window.onkeyup = function(ev) {
    var val = ev.target.value.toLowerCase();
    console.log(val);
    
    moodsArray.forEach(function(object) {
        object.moods.forEach(function(mood) {
            if (val === mood) {
                container.style.backgroundColor = object.colors[randomNum];
            }
        });
    });
}

var randomNum = Math.floor(Math.random() * moodsArray[0].colors.length);