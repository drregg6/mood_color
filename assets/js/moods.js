/*

array of moods and colors

:: idea when using mongodb ::
maybe have a button to click
    if the mood is not found
        update the db with that feeling

*/

var moodsArray = [
    {
        /* happy */
        moods: ['happy', 'cheerful', 'peaceful', 'delighted', 'ecstatic', 'elated', 'lively', 'jubilant', 'merry', 'thrilled', 'optimistic', 'upbeat', 'joyous', 'joyful', 'glad', 'gay', 'content', 'blissful', 'cheery'],
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
        moods: ['mad', 'absurd', 'angry', 'delirious', 'demented', 'frantic', 'frenzied', 'psychotic', 'pissed', 'crazed', 'mental', 'rabid', 'unhinged', 'unreasonable', 'unstable', 'upset', 'irritated'],
        colors: ['#f00', '#e00000', '#b80000', '#f81200', '#ff0013', '#ff1300', '#b30000', '#c00'],
        fontColor: '#fff'
    },
    {
        /* silly */
        moods: ['silly', 'childish', 'crazy', 'idiotic', 'ridiculous', 'simple', 'stupid', 'asinine', 'brainless', 'braindead', 'dizzy', 'dippy', 'ignorant', 'immature', 'nitwitted', 'senseless', 'unwise', 'witless', 'unintelligent', 'simpleminded'],
        colors: ['#ffa500', '#e09200', '#b87700', '#ffb833', '#f2a20d', '#e69e19', '#c8b800', '#ff6c00', '#fc0', '#ffdf00'],
        fontColor: '#000'
    },
    {
        /* mysterious */
        moods: ['dark', 'curious', 'strange', 'unknown', 'weird', 'mystifying', 'perplexing', 'enigmatic', 'enigma', 'cryptic', 'perplexing', 'obscure', 'secretive', 'difficult', 'covert', 'arcane', 'hidden'],
        colors: ['#092e35', '#053b02', '#0d214a', '#190047', '#802600', '#4e0052', '#85004b'],
        fontColor: '#fff'
    },
    {
        /* powerful */
        moods: ['powerful', 'authoritative', 'impressive', 'mighty', 'persuasive', 'influential', 'impressive', 'forceful', 'energetic', 'dynamic', 'dominate', 'dominant', 'vigorous', 'potent', 'competent', 'controlling', 'supreme'],
        colors: ['#903fe0', '#8a1986', '#671365', '#8f09f6', '#6d07bb', '#590699', '#9618f7', '#6b00bd', '#5a009e'],
        fontColor: '#fff'
    },
    {
        /* confused */
        moods: ['confused', 'bewildered', 'disorganized', 'baffled', 'befuddled', 'dazed', 'distracted', 'muddled', 'perplexed', 'puzzled', 'flummoxed', 'stumped', 'thrown', 'screwy', 'screwed'],
        colors: ['#00bbff', '#33c9ff', '#5cd3ff', '#0db5f2', '#0082ff', '#00a8ff', '#0bf', '#2192ff'],
        fontColor: '#000'
    },
    {
        /* scared */
        moods: ['scared', 'shy', 'afraid', 'anxious', 'fearful', 'panicked', 'panicky', 'petrified', 'shaken', 'terrified', 'aghast', 'startled', 'apprehensive', 'bashful', 'cautious', 'hesitant', 'humble', 'introverted', 'nervous', 'reluctant', 'sheepish', 'timid'],
        colors: ['#dedede', '#f5f5f5', '#c2c2c2', '#999999', '#adadad'],
        fontColor: '#000'
    },
    {
        /* jealous */
        moods: ['jealous', 'envious', 'possessive', 'protective', 'resentful', 'skeptical', 'suspicious', 'envying', 'guarded', 'watchful', 'zealous'],
        colors: ['#0f0', '#47ff47', '#70ff70', '#19e619', '#26d926', '#0c0', '#00a300', '#007a00', '#005200'],
        fontColor: '#000'
    },
    {
        /* sexy */
        moods: ['sexy', 'hot', 'cute', 'provocative', 'inviting', 'racy', 'seductive', 'sensual', 'sensuous', 'arousing', 'cuddly', 'flirty', 'flirtatious', 'flirt', 'risque', 'steamy', 'titillating', 'voluptuous', 'erotic', 'gorgeous', 'beautiful'],
        colors: ['#ff0091', '#ff33a7', '#ff5cb8', '#ff0091', '#ff1c7c', '#ff007d', '#ff006a', '#ff00ca'],
        fontColor: '#000'
    },
    {
        /* unattractive */
        moods: ['unattractive', 'disgusting', 'repugnant', 'repulsive', 'unappealing', 'bad-looking', 'beastly', 'deformed', 'disfigured', 'gross', 'grotesque', 'hideous', 'horrid', 'monstrous', 'unalluring'],
        colors: ['#310d0d', '#30120d', '#30150d', '#370606', '#3d0000', '#401111'],
        fontColor: '#fff'
    }
];