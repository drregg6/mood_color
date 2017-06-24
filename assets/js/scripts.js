/*

add a button for onclick effect, keyup isn't effective enough

*/

var input, container, val, randomNum, body, flag, allColors;

input = document.getElementById('input');
container = document.getElementsByClassName('container')[0];
body = document.getElementsByTagName('body')[0];
// test
console.log(input);


// this will not reset when any letters are deleted
// read why this is

// you can separate a lot of this code into different funcs
window.onkeyup = function(ev) {
    // read about ev.target
    val = ev.target.value.toLowerCase();
    flag = false; // the flag waves if found
    console.log(val);
    
    // for each object in the moodsArray
    moodsArray.forEach(function(object) {
        // for each mood in object.moods
        
        // if there's a match, update the color of the background
        if (object.moods.indexOf(val) !== -1) {
            flag = true;
            console.log('found!');
            
            // to a random color from the colors array in that same object
            randomNum = Math.floor(Math.random() * object.colors.length);
            body.style.backgroundColor = object.colors[randomNum];
            input.style.color = object.fontColor;
        }
    });
    if (flag === false) {
        
        // there should be an easier way to do this
        allColors = moodsArray[0].colors.concat(moodsArray[1].colors, moodsArray[2].colors, moodsArray[3].colors, moodsArray[4].colors, moodsArray[5].colors, moodsArray[6].colors, moodsArray[7].colors, moodsArray[8].colors, moodsArray[9].colors, moodsArray[10].colors, moodsArray[11].colors)
        
        randomNum = Math.floor(Math.random() * allColors.length);
        
        body.style.backgroundColor = allColors[randomNum];
        input.style.color = 'rgba(0,0,0,0.5)';
    }
}