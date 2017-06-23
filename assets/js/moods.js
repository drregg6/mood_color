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
        colors: ['yellow']
    },
    {
        /* sad */
        moods: ['sad', 'bitter', 'dismal', 'heartbroken', 'pessimistic', 'mournful', 'somber', 'sorrowful', 'distressed', 'depressed', 'blue', 'down', 'glum', 'gloomy', 'hurting', 'hurt', 'morbid', 'low', 'downcast', 'troubled', 'crappy', 'poopy'],
        colors: ['dark blue']
    },
    {
        /* neutral */
        moods: ['neutral', 'disinterested', 'inactive', 'indifferent', 'bored', 'undecided', 'calm', 'cool', 'nonchalant', 'aloof', 'bystanding', 'detached', 'easy'],
        colors: ['grey']
    },
    {
        /* mad */
        moods: ['mad', 'absurd', 'angry', 'delirious', 'demented', 'frantic', 'frenzied', 'psychotic', 'pissed', 'crazed', 'mental', 'rabid', 'unhinged', 'unreasonable', 'unstable'],
        colors: ['red']
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
        moods: ['sexy', 'hot', 'cute', 'provocative', 'inviting', 'racy', 'seductive', 'sensual', 'sensuous', 'arousing', 'cuddly', 'flirty', 'flirtatious', 'flirt', 'risque', 'steamy', 'titillating', 'voluptuous'],
        colors: ['pink']
    }
];