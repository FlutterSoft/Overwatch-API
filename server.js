const express = require('express')
const app = express()
const PORT = 8001
const cors = require('cors')
app.use(cors())

const characters = {
    ashe : {
        'name' : 'Ashe',
        'birthName' : 'Elizabeth Caledonia "Calamity" Ashe',
        'age' : 39,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 200
    },
    bastion : {
        'name' : 'Bastion',
        'birthName' : 'SST Laboratories Siege Automaton E54',
        'age' : 30,
        'nationality' : 'German',
        'role' : 'Damage',
        'health' : 300
    },
    cassidy : {
        'name' : 'Cassidy',
        'birthName' : 'Cole Cassidy',
        'age' : 37,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 225
    },
    echo : {
        'name' : 'Echo',
        'birthName' : 'Echo',
        'age' : 'unknown',
        'nationality' : 'unknown',
        'role' : 'Damage',
        'health' : 200
    },
    genji : {
        'name' : 'Genji',
        'birthName' : 'Genji Shimada',
        'age' : 35,
        'nationality' : 'Japanese',
        'role' : 'Damage',
        'health' : 200
    },    
    hanzo : {
        'name' : 'Hanzo',
        'birthName' : 'Hanzo Shimada',
        'age' : 38,
        'nationality' : 'Japanese',
        'role' : 'Damage',
        'health' : 200
    },
    junkrat : {
        'name' : 'Junkrat',
        'birthName' : 'LJamison Fawkesn',
        'age' : 25,
        'nationality' : 'Australian',
        'role' : 'Damage',
        'health' : 200
    },
    mei : {
        'name' : 'Mei',
        'birthName' : 'Mei-Ling Zhou ',
        'age' : 31,
        'nationality' : 'Chinese',
        'role' : 'Damage',
        'health' : 250
    },

    pharah : {
        'name' : 'Pharah',
        'birthName' : 'Fareeha Amari',
        'age' : 32,
        'nationality' : 'Egyptian',
        'role' : 'Damage',
        'health' : 200
    },    
    reaper : {
        'name' : 'Reaper',
        'birthName' : 'Gabriel Reyes',
        'age' : 58,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 250
    },    
    soldier : {
        'name' : 'Soldier: 76',
        'birthName' : 'John Francis "Jack" Morrison',
        'age' : 55,
        'nationality' : 'American',
        'role' : 'Damage',
        'health' : 200
    },    
    sojourn : {
        'name' : 'Sojourn',
        'birthName' : 'Vivian Chase',
        'age' : 'unknown',
        'nationality' : 'Canadian',
        'role' : 'Damage',
        'health' : 200
    },    
    sombra : {
        'name' : 'Sombra',
        'birthName' : 'Olivia Colomar',
        'age' : 30,
        'nationality' : 'Mexican',
        'role' : 'Damage',
        'health' : 200
    },    
    symmetra : {
        'name' : 'Symmetra',
        'birthName' : 'Satya Vaswani',
        'age' : 28,
        'nationality' : 'Indian',
        'role' : 'Damage',
        'health' : 225
    },    
    torbjorn : {
        'name' : 'Torbjörn',
        'birthName' : 'Torbjörn Lindholm',
        'age' : 57,
        'nationality' : 'Swedish',
        'role' : 'Damage',
        'health' : 250
    },    
    sojourn : {
        'name' : 'Sojourn',
        'birthName' : 'Vivian Chase',
        'age' : 'unknown',
        'nationality' : 'Canadian',
        'role' : 'Damage',
        'health' : 200
    },    
    tracer : {
        'name' : 'Tracer',
        'birthName' : 'Lena Oxton',
        'age' : 26,
        'nationality' : 'British',
        'role' : 'Damage',
        'health' : 150
    },    
    widowmaker : {
        'name' : 'Widowmaker',
        'birthName' : 'Amélie Lacroix (née Guillard)',
        'age' : 33,
        'nationality' : 'French',
        'role' : 'Damage',
        'health' : 175
    },    
    ana : {
        'name' : 'Ana',
        'birthName' : 'Ana Amari',
        'age' : 60,
        'nationality' : 'Egyptian',
        'role' : 'Support',
        'health' : 200
    },    
    baptiste : {
        'name' : 'Baptiste',
        'birthName' : 'Jean-Baptiste Augustin',
        'age' : 36,
        'nationality' : 'Haitian',
        'role' : 'Support',
        'health' : 200
    },    
    brigitte : {
        'name' : 'Brigitte',
        'birthName' : '	Brigitte Lindholm',
        'age' : 23,
        'nationality' : 'Swedish',
        'role' : 'Support',
        'health' : 200
    },    
    lucio : {
        'name' : 'Lúcio',
        'birthName' : 'Lúcio Correia dos Santos',
        'age' : 26,
        'nationality' : 'Brazilian',
        'role' : 'Support',
        'health' : 200
    },    
    mercy : {
        'name' : 'Mercy',
        'birthName' : 'Angela Ziegler',
        'age' : 37,
        'nationality' : 'Swiss',
        'role' : 'Support',
        'health' : 200
    },    
    moira : {
        'name' : 'Moira',
        'birthName' : 'Moira O\'Deorain',
        'age' : 48,
        'nationality' : 'Irish',
        'role' : 'Support',
        'health' : 200
    },    
    zenyatta : {
        'name' : 'Zenyatta',
        'birthName' : 'Tekhartha Zenyatta',
        'age' : 20,
        'nationality' : 'unknown',
        'role' : 'Support',
        'health' : 200
    },    
    dva : {
        'name' : 'D.Va',
        'birthName' : 'Hana Song',
        'age' : 19,
        'nationality' : 'Korean',
        'role' : 'Tank',
        'health' : 600
    },    
    orisa : {
        'name' : 'Orisa',
        'birthName' : 'Orisa',
        'age' : '1 Month',
        'nationality' : 'Numbanian',
        'role' : 'Tank',
        'health' : 450
    },    
    reinhardt : {
        'name' : 'Reinhardt',
        'birthName' : '	Reinhardt Wilhelm',
        'age' : 61,
        'nationality' : 'German',
        'role' : 'Tank',
        'health' : 500
    },    
    roadhog : {
        'name' : 'Roadhog',
        'birthName' : 'Mako Rutledge',
        'age' : 48,
        'nationality' : 'Australian',
        'role' : 'Tank',
        'health' : 600
    },    
    sigma : {
        'name' : 'Sigma',
        'birthName' : 'Siebren de Kuiper',
        'age' : 62,
        'nationality' : 'Dutch',
        'role' : 'Tank',
        'health' : 400
    },    
    winston : {
        'name' : 'Winston',
        'birthName' : 'Winston',
        'age' : 29,
        'nationality' : 'unknown',
        'role' : 'Tank',
        'health' : 500
    },    
    'wrecking ball' : {
        'name' : 'Wrecking Ball',
        'birthName' : 'Hammond',
        'age' : 14,
        'nationality' : 'unknown',
        'role' : 'Tank',
        'health' : 600
    },    
    zarya : {
        'name' : 'Zarya',
        'birthName' : 'Aleksandra Zaryanova (Александра Зарянова)',
        'age' : 28,
        'nationality' : 'Russian',
        'role' : 'Tank',
        'health' : 400
    },    
    unknown : {
        'name' : 'unknown',
        'birthName' : 'unknown',
        'age' : 'unknown',
        'nationality' : 'unknown',
        'role' : 'unknown',
        'health' : 'unknown'
    },    
}
// app.get('/', (request, response) => {
//     response.sendFile(__dirname + '/index.html')
// })


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