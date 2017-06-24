var input, container, val, randomNum, body, flag, allColors, target;

input = document.getElementById('input');
container = document.getElementsByClassName('container')[0];
body = document.getElementsByTagName('body')[0];



window.onkeyup = function(ev) {
    /*
    
    :: event flow ::
    :: event bubbling ::
    :: event capturing ::
    
    */
    target = ev.target;
    val = target.value.toLowerCase();
    flag = false; // the flag waves when mood is found
    console.log(target);
    
    moodFound();
    
    if (flag === false) {
        moodNotFound();
    }
}



function moodFound() {
    moodsArray.forEach(function(object) {
        if (object.moods.indexOf(val) !== -1) {
            flag = true;
            console.log('Found!');

            randomNum = Math.floor(Math.random() * object.colors.length);
            body.style.backgroundColor = object.colors[randomNum];
            input.style.color = object.fontColor;
        }
    });
}


function moodNotFound() {
    allColors = moodsArray[0].colors.concat(moodsArray[1].colors, moodsArray[2].colors, moodsArray[3].colors, moodsArray[4].colors, moodsArray[5].colors, moodsArray[6].colors, moodsArray[7].colors, moodsArray[8].colors, moodsArray[9].colors, moodsArray[10].colors, moodsArray[11].colors);
    
    randomNum = Math.floor(Math.random() * allColors.length);
    
    body.style.backgroundColor = allColors[randomNum];
    input.style.color = 'rgba(0,0,0,0.5)';
}