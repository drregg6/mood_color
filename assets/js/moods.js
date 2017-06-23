/*

array of moods and colors associated with moods
have a set amount of color options
if the mood is not found, return white


:: idea when using mongodb ::
maybe have a button to click
    if the mood is not found
        update the db with that feeling
        
maybe find a list of moods
or positive / negative connotated words

*/

var moodsArray = [
    {
        /* happy */
        moods: ['happy', 'cheerful', 'peaceful', 'delighted', 'ecstatic', 'elated', 'lively', 'jubilant', 'merry', 'thrilled', 'optimistic', 'upbeat', 'joyous', 'joyful', 'glad', 'gay', 'content', 'blissful'],
        colors: ['#ff0', '#ff1', '#b6ff19', '#ff3', '#ecff06', '#ff5', '#f2f20d', '#ffff1f', '#ecff00', '#ffec00', '#ffd900', '#ffff85'],
        fontColor: '#080808'
    },
    {
        /* sad */
        moods: ['sad', 'bitter', 'dismal', 'heartbroken', 'pessimistic', 'mournful', 'somber', 'sorrowful', 'distressed', 'depressed', 'blue', 'down', 'glum', 'gloomy', 'hurting', 'hurt', 'morbid', 'low', 'downcast', 'troubled', 'crappy', 'poopy'],
        colors: ['#000080', '#400069', '#36006c', '#000029', '#00003d', '#6d0059', '#0000a3', '#000a80', '#001380', '#001d80', '#0a0080', '#240073'],
        fontColor: '#fff'
    },
    {
        /* neutral */
        moods: ['neutral', 'disinterested', 'inactive', 'indifferent', 'bored', 'undecided', 'calm', 'cool', 'nonchalant', 'aloof', 'bystanding', 'detached', 'easy'],
        colors: ['#707070', '#666666', '#5c5c5c', '#474747', '#333', '#3d3d3d'],
        fontColor: '#fff'
    },
    {
        /* mad */
        moods: ['mad', 'absurd', 'angry', 'delirious', 'demented', 'frantic', 'frenzied', 'psychotic', 'pissed', 'crazed', 'mental', 'rabid', 'unhinged', 'unreasonable', 'unstable'],
        colors: ['#f00', '#e00000', '#b80000', '#f81200', '#ff0013', '#ff1300', '#b30000', '#c00'],
        fontColor: '#fff'
    },
    {
        /* silly */
        moods: ['silly', 'childish', 'crazy', 'idiotic', 'ridiculous', 'simple', 'stupid', 'asinine', 'brainless', 'braindead', 'dizzy', 'dippy', 'ignorant', 'immature', 'nitwitted', 'senseless', 'unwise', 'witless', 'unintelligent', 'simpleminded'],
        colors: ['orange']
    },
    {
        /* mysterious */
        moods: ['dark', 'curious', 'strange', 'unknown', 'weird', 'mystifying', 'perplexing', 'enigmatic', 'enigma', 'cryptic', 'perplexing', 'obscure', 'secretive', 'difficult', 'covert', 'arcane', 'hidden'],
        colors: ['dark shadowy colors']
    },
    {
        /* powerful */
        moods: ['authoritative', 'impressive', 'mighty', 'persuasive', 'influential', 'impressive', 'forceful', 'energetic', 'dynamic', 'dominate', 'dominant', 'vigorous', 'potent', 'competent', 'controlling', 'supreme'],
        colors: ['purple']
    },
    {
        /* confused */
        moods: ['confused', 'bewildered', 'disorganized', 'baffled', 'befuddled', 'dazed', 'distracted', 'muddled', 'perplexed', 'puzzled', 'flummoxed', 'stumped', 'thrown', 'screwy', 'screwed'],
        colors: ['light blue']
    },
    {
        /* scared */
        moods: ['scared', 'shy', 'afraid', 'anxious', 'fearful', 'panicked', 'panicky', 'petrified', 'shaken', 'terrified', 'aghast', 'startled', 'apprehensive', 'bashful', 'cautious', 'hesitant', 'humble', 'introverted', 'nervous', 'reluctant', 'sheepish', 'timid'],
        colors: ['light grey and whites']
    },
    {
        /* jealous */
        moods: ['jealous', 'envious', 'possessive', 'protective', 'resentful', 'skeptical', 'suspicious', 'envying', 'guarded', 'watchful', 'zealous'],
        colors: ['green']
    },
    {
        /* sexy */
        moods: ['sexy', 'hot', 'cute', 'provocative', 'inviting', 'racy', 'seductive', 'sensual', 'sensuous', 'arousing', 'cuddly', 'flirty', 'flirtatious', 'flirt', 'risque', 'steamy', 'titillating', 'voluptuous', 'erotic'],
        colors: ['pink']
    },
    {
        /* unattractive */
        moods: ['unattractive', 'disgusting', 'repugnant', 'repulsive', 'unappealing', 'bad-looking', 'beastly', 'deformed', 'disfigured', 'gross', 'grotesque', 'hideous', 'horrid', 'monstrous', 'unalluring'],
        colors: ['browns']
    }
];