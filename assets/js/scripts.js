var input, container, val, randomNum;

input = document.getElementById('input');
container = document.getElementsByClassName('container')[0];

console.log(input);


// this will not reset when any letter is deleted
window.onkeyup = function(ev) {
    val = ev.target.value.toLowerCase();
    console.log(val);
    
    moodsArray.forEach(function(object) {
        object.moods.forEach(function(mood) {
            if (val === mood) {
                randomNum = Math.floor(Math.random() * object.colors.length);
                
                container.style.backgroundColor = object.colors[randomNum];
            }
        });
    });
}