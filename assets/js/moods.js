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
        moods: ['happy', 'cheerful', 'peaceful', 'delighted', 'ecstatic', 'elated', 'lively', 'jubilant', 'merry', 'thrilled', 'optimistic', 'upbeat', 'joyous', 'joyful', 'glad', 'gay', 'content', 'blissful', 'cheery', 'excited', 'overjoyed'],
        colors: ['#ff0', '#ff1', '#b6ff19', '#ff3', '#ecff06', '#ff5', '#f2f20d', '#ffff1f', '#ecff00', '#ffec00', '#ffd900', '#ffff85'],
        messages: ['Today\'s a great day!', 'Smiles all around!', 'You\'re going to conquer the world!', 'Life rocks!', 'Hell yeah!', 'Woo!', 'Look at them pearly white teeth!'],
        fontColor: '#080808'
    },
    {
        /* sad */
        moods: ['sad', 'bitter', 'dismal', 'heartbroken', 'pessimistic', 'mournful', 'somber', 'sorrowful', 'distressed', 'depressed', 'blue', 'down', 'glum', 'gloomy', 'hurting', 'hurt', 'morbid', 'low', 'downcast', 'troubled', 'crappy', 'poopy', 'unhappy'],
        colors: ['#000080', '#400069', '#36006c', '#000029', '#00003d', '#6d0059', '#0000a3', '#000a80', '#001380', '#001d80', '#0a0080', '#240073'],
        messages: ['Aww, I\'m sorry.', 'It\'ll be alright', 'What can I do to cheer you up?', 'Everyone deserves a good cry.', ':(', 'I\'m here to listen.', 'Meditation is good for the body and the soul.', 'Listen to a sad song and have a good cry.', 'Don\'t do anything you\'ll regret...', 'I love you!'],
        fontColor: '#fff'
    },
    {
        /* neutral */
        moods: ['neutral', 'disinterested', 'inactive', 'indifferent', 'bored', 'undecided', 'calm', 'cool', 'nonchalant', 'aloof', 'bystanding', 'detached', 'easy', 'tired'],
        colors: ['#707070', '#666666', '#5c5c5c', '#474747', '#333', '#3d3d3d'],
        messages: ['Go do something!', 'Get outside', 'Let\'s go on an adventure', 'Make a phone call!', 'Text a friend!', 'You\'re so cool...'],
        fontColor: '#fff'
    },
    {
        /* mad */
        moods: ['mad', 'absurd', 'angry', 'delirious', 'demented', 'frantic', 'frenzied', 'psychotic', 'pissed', 'crazed', 'mental', 'rabid', 'unhinged', 'unreasonable', 'unstable', 'upset', 'irritated'],
        colors: ['#f00', '#e00000', '#b80000', '#f81200', '#ff0013', '#ff1300', '#b30000', '#c00'],
        messages: ['We\'re all just specks in the grand scheme of things.', 'Don\'t get mad, get even.', 'Chill bro!', 'Step back and count to ten.', 'Don\'t do anything you\'ll regret...', 'Try to meditate!'],
        fontColor: '#fff'
    },
    {
        /* silly */
        moods: ['silly', 'childish', 'crazy', 'idiotic', 'ridiculous', 'asinine', 'braindead', 'dizzy', 'dippy', 'ignorant', 'immature', 'nitwitted', 'senseless', 'unwise', 'witless', 'unintelligent', 'simpleminded', 'goofy', 'wacky', 'hyper'],
        colors: ['#ffa500', '#e09200', '#b87700', '#ffb833', '#f2a20d', '#e69e19', '#c8b800', '#ff6c00', '#fc0', '#ffdf00'],
        messages: ['You\'re hilarious!', 'So funny!', 'Hahahahaha', 'You are soooo funny!', 'You\'re the life of the party', 'Sometimes I feel like a nut!', 'We all feel that way sometimes.'],
        fontColor: '#000'
    },
    {
        /* mysterious */
        moods: ['dark', 'curious', 'strange', 'unknown', 'weird', 'mystifying', 'perplexing', 'enigmatic', 'enigma', 'cryptic', 'perplexing', 'obscure', 'secretive', 'difficult', 'covert', 'arcane', 'hidden'],
        colors: ['#092e35', '#053b02', '#0d214a', '#190047', '#802600', '#4e0052', '#85004b'],
        messages: ['You are sooooo cool', 'People just don\'t get you.', 'Shrouded in myst...', 'E. Nygma ain\'t got nothin\' on you.', 'Weirdo!', 'Freak!', 'Are you part of Cicada 3301?', 'We should join a cult!', 'Let\'s make up a religion!'],
        fontColor: '#fff'
    },
    {
        /* powerful */
        moods: ['powerful', 'authoritative', 'impressive', 'mighty', 'persuasive', 'influential', 'impressive', 'forceful', 'energetic', 'dynamic', 'dominate', 'dominant', 'vigorous', 'potent', 'competent', 'controlling', 'supreme', 'strong'],
        colors: ['#903fe0', '#8a1986', '#671365', '#8f09f6', '#6d07bb', '#590699', '#9618f7', '#6b00bd', '#5a009e'],
        messages: ['Go out there and make some money!', 'You kick ass!', 'Oh my God, you are amazing!', 'I am so impressed by you!', 'I can\'t stop marveling.', 'I am pret-ty jealous.', 'What makes you so great?', 'You\'re so powerful!'],
        fontColor: '#fff'
    },
    {
        /* confused */
        moods: ['confused', 'bewildered', 'disorganized', 'baffled', 'befuddled', 'dazed', 'distracted', 'muddled', 'perplexed', 'puzzled', 'flummoxed', 'stumped', 'thrown', 'screwy', 'screwed', 'dumb', 'stupid', 'brainless', 'ditzy', 'simple', 'drunk'],
        colors: ['#00bbff', '#33c9ff', '#5cd3ff', '#0db5f2', '#0082ff', '#00a8ff', '#0bf', '#2192ff'],
        messages: ['Wait... what?', 'I don\'t understand...', 'Can you explain this to me?', 'Can you repeat the question?', 'I feel so dumb.', 'I feel stupid.', 'I don\'t understand.', 'I love lamp.', 'Like, I should read a book.'],
        fontColor: '#000'
    },
    {
        /* scared */
        moods: ['scared', 'shy', 'afraid', 'anxious', 'fearful', 'panicked', 'panicky', 'petrified', 'shaken', 'terrified', 'aghast', 'startled', 'apprehensive', 'bashful', 'cautious', 'hesitant', 'humble', 'introverted', 'nervous', 'reluctant', 'sheepish', 'timid'],
        colors: ['#dedede', '#f5f5f5', '#c2c2c2', '#999999', '#adadad'],
        messages: ['There\'s no reason to be scared!', 'It all gets easier!', 'Don\'t be intimidated!', 'You\'re cool, too!', 'You can take over the world!', 'Get out there and kick ass!', 'What would Iron Man do?'],
        fontColor: '#000'
    },
    {
        /* jealous */
        moods: ['jealous', 'envious', 'possessive', 'protective', 'resentful', 'skeptical', 'suspicious', 'envying', 'guarded', 'watchful', 'zealous'],
        colors: ['#0f0', '#47ff47', '#70ff70', '#19e619', '#26d926', '#0c0', '#00a300', '#007a00', '#005200'],
        messages: ['You\'ve gotta earn it!', 'You can be just as great!', 'Keep it up!'],
        fontColor: '#000'
    },
    {
        /* sexy */
        moods: ['sexy', 'hot', 'cute', 'provocative', 'inviting', 'racy', 'seductive', 'sensual', 'sensuous', 'arousing', 'cuddly', 'flirty', 'flirtatious', 'flirt', 'risque', 'steamy', 'titillating', 'voluptuous', 'erotic', 'gorgeous', 'beautiful'],
        colors: ['#ff0091', '#ff33a7', '#ff5cb8', '#ff0091', '#ff1c7c', '#ff007d', '#ff006a', '#ff00ca'],
        messages: ['You\'re so vein!', 'Mirror mirror on the wall, who\'s the fairest one of all?', 'You are soooooo good looking!', 'I\'m already hot and bothered!', 'How you doin\'?', 'Go out there and get some!', 'Hey cutie!', 'Lookin\' good!', 'I think I love you...'],
        fontColor: '#000'
    },
    {
        /* unattractive */
        moods: ['unattractive', 'disgusting', 'repugnant', 'repulsive', 'unappealing', 'bad-looking', 'beastly', 'deformed', 'disfigured', 'gross', 'grotesque', 'hideous', 'horrid', 'monstrous', 'unalluring', 'ugly'],
        colors: ['#310d0d', '#30120d', '#30150d', '#370606', '#3d0000', '#401111'],
        messages: ['You are beautiful!', 'Who needs good looks when you\'re mind is beautiful?', 'You will conquer the world!', 'Get a haircut and go to the gym!', 'Get to the gym!', 'Cut that hair!', 'There\'s someone out there for you!', 'You\'re still a cutie to me.'],
        fontColor: '#fff'
    }
];