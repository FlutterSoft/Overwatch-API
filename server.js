const express = require('express')
const app = express()
const PORT = 8001
const cors = require('cors')
app.use(cors())



// Images by DrunkenPandaFR
// https://www.reddit.com/r/Overwatch/comments/648l9r/4k_vectorised_overwatch_heroes_icons_backgrounds/

const characters = {
    ashe : {
        'name' : 'Ashe',
        'birthName' : 'Elizabeth Caledonia "Calamity" Ashe',
        'age' : 39,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/nxudmIe.png'
    },
    bastion : {
        'name' : 'Bastion',
        'birthName' : 'SST Laboratories Siege Automaton E54',
        'age' : 30,
        'nationality' : 'German',
        'role' : 'Damage',
        'health' : 300,
        'img' : 'https://i.imgur.com/ccTq81Q.png'
    },
    cassidy : {
        'name' : 'Cassidy',
        'birthName' : 'Cole Cassidy',
        'age' : 37,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 225,
        'img' : 'https://i.imgur.com/cAqzGmU.png'
    },
    echo : {
        'name' : 'Echo',
        'birthName' : 'Echo',
        'age' : 'unknown',
        'nationality' : 'unknown',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/nxudmIe.png'
    },
    genji : {
        'name' : 'Genji',
        'birthName' : 'Genji Shimada',
        'age' : 35,
        'nationality' : 'Japanese',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/ZNY4fUq.png'
    },    
    hanzo : {
        'name' : 'Hanzo',
        'birthName' : 'Hanzo Shimada',
        'age' : 38,
        'nationality' : 'Japanese',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/FUhnFdh.png'
    },
    junkrat : {
        'name' : 'Junkrat',
        'birthName' : 'LJamison Fawkesn',
        'age' : 25,
        'nationality' : 'Australian',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/z8osdhE.png'
    },
    mei : {
        'name' : 'Mei',
        'birthName' : 'Mei-Ling Zhou ',
        'age' : 31,
        'nationality' : 'Chinese',
        'role' : 'Damage',
        'health' : 250,
        'img' : 'https://i.imgur.com/rWfl4z7.png'
    },

    pharah : {
        'name' : 'Pharah',
        'birthName' : 'Fareeha Amari',
        'age' : 32,
        'nationality' : 'Egyptian',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/e9BcTHk.png'
    },    
    reaper : {
        'name' : 'Reaper',
        'birthName' : 'Gabriel Reyes',
        'age' : 58,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 250,
        'img' : 'https://i.imgur.com/uMEyp1M.png'
    },    
    soldier : {
        'name' : 'Soldier: 76',
        'birthName' : 'John Francis "Jack" Morrison',
        'age' : 55,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/yhIpWWa.png'
    },    
    sojourn : {
        'name' : 'Sojourn',
        'birthName' : 'Vivian Chase',
        'age' : 'unknown',
        'nationality' : 'Canadian',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
    sombra : {
        'name' : 'Sombra',
        'birthName' : 'Olivia Colomar',
        'age' : 30,
        'nationality' : 'Mexican',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/7xLjGDs.png'
    },    
    symmetra : {
        'name' : 'Symmetra',
        'birthName' : 'Satya Vaswani',
        'age' : 28,
        'nationality' : 'Indian',
        'role' : 'Damage',
        'health' : 225,
        'img' : 'https://i.imgur.com/P17hhT7.png'
    },    
    torbjorn : {
        'name' : 'Torbjörn',
        'birthName' : 'Torbjörn Lindholm',
        'age' : 57,
        'nationality' : 'Swedish',
        'role' : 'Damage',
        'health' : 250,
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
    sojourn : {
        'name' : 'Sojourn',
        'birthName' : 'Vivian Chase',
        'age' : 'unknown',
        'nationality' : 'Canadian',
        'role' : 'Damage',
        'health' : 200,
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
    tracer : {
        'name' : 'Tracer',
        'birthName' : 'Lena Oxton',
        'age' : 26,
        'nationality' : 'British',
        'role' : 'Damage',
        'health' : 150,
        'img' : 'https://i.imgur.com/cb7QHZJ.png'
    },    
    widowmaker : {
        'name' : 'Widowmaker',
        'birthName' : 'Amélie Lacroix (née Guillard)',
        'age' : 33,
        'nationality' : 'French',
        'role' : 'Damage',
        'health' : 175,
        'img' : 'https://i.imgur.com/LEHXcKp.png'
    },    
    ana : {
        'name' : 'Ana',
        'birthName' : 'Ana Amari',
        'age' : 60,
        'nationality' : 'Egyptian',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/CSqsV4c.png'
    },    
    baptiste : {
        'name' : 'Baptiste',
        'birthName' : 'Jean-Baptiste Augustin',
        'age' : 36,
        'nationality' : 'Haitian',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/nxudmIe.png'
    },    
    brigitte : {
        'name' : 'Brigitte',
        'birthName' : '	Brigitte Lindholm',
        'age' : 23,
        'nationality' : 'Swedish',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/nxudmIe.png'
    },    
    lucio : {
        'name' : 'Lúcio',
        'birthName' : 'Lúcio Correia dos Santos',
        'age' : 26,
        'nationality' : 'Brazilian',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/mEinY4v.png'
    },    
    mercy : {
        'name' : 'Mercy',
        'birthName' : 'Angela Ziegler',
        'age' : 37,
        'nationality' : 'Swiss',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/tiuq3H1.png'
    },    
    moira : {
        'name' : 'Moira',
        'birthName' : 'Moira O\'Deorain',
        'age' : 48,
        'nationality' : 'Irish',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/nxudmIe.png'
    },    
    zenyatta : {
        'name' : 'Zenyatta',
        'birthName' : 'Tekhartha Zenyatta',
        'age' : 20,
        'nationality' : 'unknown',
        'role' : 'Support',
        'health' : 200,
        'img' : 'https://i.imgur.com/xijvmx6.png'
    },    
    dva : {
        'name' : 'D.Va',
        'birthName' : 'Hana Song',
        'age' : 19,
        'nationality' : 'Korean',
        'role' : 'Tank',
        'health' : 600,
        'img' : 'https://i.imgur.com/W5cMJUl.png'
    },    
    orisa : {
        'name' : 'Orisa',
        'birthName' : 'Orisa',
        'age' : '1 Month',
        'nationality' : 'Numbanian',
        'role' : 'Tank',
        'health' : 450,
        'img' : 'https://i.imgur.com/1X0t3u3.png'
    },    
    reinhardt : {
        'name' : 'Reinhardt',
        'birthName' : '	Reinhardt Wilhelm',
        'age' : 61,
        'nationality' : 'German',
        'role' : 'Tank',
        'health' : 500,
        'img' : 'https://i.imgur.com/z09DGSd.png'
    },    
    roadhog : {
        'name' : 'Roadhog',
        'birthName' : 'Mako Rutledge',
        'age' : 48,
        'nationality' : 'Australian',
        'role' : 'Tank',
        'health' : 600,
        'img' : 'https://i.imgur.com/CoOpqRo.png'
    },    
    sigma : {
        'name' : 'Sigma',
        'birthName' : 'Siebren de Kuiper',
        'age' : 62,
        'nationality' : 'Dutch',
        'role' : 'Tank',
        'health' : 400,
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
    winston : {
        'name' : 'Winston',
        'birthName' : 'Winston',
        'age' : 29,
        'nationality' : 'unknown',
        'role' : 'Tank',
        'health' : 500,
        'img' : 'https://i.imgur.com/3PPecs1.png'
    },    
    'wrecking ball' : {
        'name' : 'Wrecking Ball',
        'birthName' : 'Hammond',
        'age' : 14,
        'nationality' : 'unknown',
        'role' : 'Tank',
        'health' : 600,
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
    zarya : {
        'name' : 'Zarya',
        'birthName' : 'Aleksandra Zaryanova (Александра Зарянова)',
        'age' : 28,
        'nationality' : 'Russian',
        'role' : 'Tank',
        'health' : 400,
        'img' : 'https://i.imgur.com/znV99Xu.png'
    },    
    unknown : {
        'name' : 'unknown',
        'birthName' : 'unknown',
        'age' : 'unknown',
        'nationality' : 'unknown',
        'role' : 'unknown',
        'health' : 'unknown',
        'img' : 'https://i.imgur.com/m9kLC0z.png'
    },    
}

app.get('/api/characters/:heroName', (request, response) => {
    let selection = request.params.heroName
    if (selection == 'd.va'){
        selection = 'dva'
    }
    if (selection == 'soldier: 76' || selection == 'soldier 76'|| selection == 'soldier76' ){
        selection = 'soldier'
    }
    if(characters[selection]){
        response.json(characters[selection])
    }
    else {
        response.json(characters['unknown'])
    }
})

app.get('/api/random', (request, response) => {
    const keys = Object.keys(characters)
    const selection = Math.floor(Math.random() * keys.length -2)
    const randomKey = keys[selection]
    response.json(characters[randomKey])
})

app.listen(process.env.PORT || PORT, (request, response) => {
    console.log('Listening on port: ' + PORT)
})