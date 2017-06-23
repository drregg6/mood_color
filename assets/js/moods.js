/*

array of moods and colors associated with moods
have a set amount of color options
if the mood is not found, return white


:: idea when using mongodb ::
maybe have a button to click
    if the mood is not found
        update the db with that feeling

*/

var moodsArray = [
    {
        moods: ['happy', 'joy', 'joyous', 'glad', 'great', 'excellent', 'fabulous'],
        colors: ['yellow', 'orange', 'pink']
    },
    {
        moods: ['sad', 'depressed', 'crying', 'unjoyful'],
        colors: ['blue', 'aqua', 'purple']
    }
];