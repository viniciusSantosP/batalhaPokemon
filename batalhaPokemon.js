const prompt = require('prompt-sync')();


let pikachu = {
    nome : 'pikachu',
    vida : 300,
    cura : 40, 
    ataque : 58,
    defesa : 15,
    elemento : 'eletrico' 
}
let charmander = {
    nome : 'charmander', 
    vida: 295,
    cura : 35,
    ataque: 62,
    defesa : 22,
    elemento : 'fogo'
}
let squirtle = {
    nome : 'squirtle',
    vida: 305,
    cura: 35,
    ataque: 55,
    defesa : 30,
    elemento : 'agua' 
}
let caterpie = {
    nome: 'caterpie',
    vida : 295,
    cura : 42,
    ataque : 57,
    defesa: 70,
    elemento: 'inseto' 
}
let pidgey = {
    nome: 'pidgey',
    vida : 297,
    cura : 37,
    ataque : 55,
    defesa : 17,
    elemento : 'voador' 
}
let abra = {
    nome: 'abra',
    vida : 304,
    cura : 36,
    ataque: 54,
    defesa: 34,
    elemento: 'psiquico'
}
let ratata = { 
    nome: 'ratata',
    vida : 250, 
    cura : 37,
    ataque: 50,
    defesa: 3,
    elemento: 'normal'
}
let snorlax = { 
    nome: 'snorlax', 
    vida : 307,
    cura : 39, 
    ataque : 59,
    defesa: 9,
    elemento: 'normal'
}
let psyduck = {
    nome: 'psyduck', 
    vida : 290,
    cura : 41,
    ataque : 53,
    defesa : 27,
    elemento: 'agua'
}
let dragonite = {
    nome: 'dragonite',
    vida : 297,
    cura : 36, 
    ataque : 59,
    defesa : 70, 
    elemento: 'voador'
}
let ekans = {
    nome: 'ekans',
    vida : 294,
    cura : 35, 
    ataque : 58,
    defesa: 32,
    elemento: 'venenoso'
}
let cubone = {
    nome: 'cubone',
    vida: 296, 
    cura : 37,
    ataque: 56,
    defesa: 22,
    elemento: 'terra'
}

const pokemons = [pikachu, charmander, squirtle, caterpie, pidgey, abra, ratata, snorlax, psyduck, dragonite, ekans, cubone ]
let pokemonUsuario1
let pokemonUsuario2
let pokemonMaquina1 
let pokemonMaquina2
let pokemonAtacado
let pokemonDeAtaque
let pokemonsDaMaquina
let pokemonsUsuario
let ataque
let curaOuAtaque
let pokemonAtaqueSorteado
let pokemonDefesaSorteado
let ataqueMaquina
let escolhaCuraOuAtaque = ''
let vidaENomePokemonUsuario1 
let vidaENomePokemonUsuario2
let vidaENomePokemonMaquina1
let vidaENomePokemonMaquina2



function verificarPokemonVivo (pokemonsUsuario, pokemonsDaMaquina) {
    if(pokemonMaquina1.vida <= 0) {
        let indexPokemonMaquina1 = pokemonsDaMaquina.indexOf(pokemonMaquina1)
        pokemonsDaMaquina.splice(indexPokemonMaquina1, 1)
        } else if (pokemonMaquina2.vida <= 0) {
        let indexPokemonMaquina2 = pokemonsDaMaquina.indexOf(pokemonMaquina2)
            pokemonsDaMaquina.splice (indexPokemonMaquina2, 1)
        } else if (pokemonUsuario1.vida <= 0) {
            let indexUsuario1  = pokemonsUsuario.indexOf(pokemonUsuario1)
            pokemonsUsuario.splice (indexUsuario1, 1)
        } else if (pokemonUsuario2.vida <= 0) {
            let indexUsuario2  = pokemonsUsuario.indexOf(pokemonUsuario2)
            pokemonsUsuario.splice (indexUsuario2, 1)
        }
}


function DanoAdicionalPorElementoCounter (pokemonDeAtaque, pokemonDefesa) {
    switch (pokemonDeAtaque, pokemonDefesa) {
        case pokemonDeAtaque.elemento == 'eletrico' && pokemonDefesa.elemento == 'voador' : 
         return true 
        case pokemonDeAtaque.elemento == 'eletrico' && pokemonDefesa.elemento == 'agua' :
         return true
        case pokemonDeAtaque.elemento == 'fogo' && pokemonDefesa.elemento == 'inseto' :
         return true 
        case pokemonDeAtaque.elemento == 'agua' && pokemonDefesa.elemento == 'fogo' :
         return true 
        case pokemonDeAtaque.elemento == 'inseto' && pokemonDefesa.elemento == 'venenoso' :
         return true
        case pokemonDeAtaque.elemento == 'inseto' && pokemonDefesa.elemento == 'psiquico' :
         return true 
        case pokemonDeAtaque.elemento == 'voador' && pokemonDefesa.elemento == 'inseto' :
         return true
        case pokemonDeAtaque.elemento == 'terra' && pokemonDefesa.elemento == 'eletrico' :
         return true
        case pokemonDeAtaque.elemento == 'terra' && pokemonDefesa.elemento == 'fogo' :
         return true
        case pokemonDeAtaque.elemento == 'terra' && pokemonDefesa.elemento == 'venenoso' :
         return true
        default :
        return false 
    }
} 

function isPokemonValidoByName (lista, nomePokemon) {
    return lista.filter( (pokemon) => pokemon.nome == nomePokemon).length!==0
}

function getPokemonByName(lista, nomePokemon) {
    return lista.filter( (pokemon) => pokemon.nome == nomePokemon)[0]
}

function isPokemonUsuario (pokemon) {
    if(pokemonDeAtaque == pokemonUsuario1 || pokemonDeAtaque == pokemonUsuario2) {
        return true
    } else {
        return false 
    }
} 

function danoRecebidoMaquina () {
    let danos = pokemonAtaqueSorteado.ataque - pokemonDefesaSorteado.defesa
    if(danos < 0) {
        return 0
    } else {
        return danos.toFixed(2)
    }
}

function atacarMaquina (pokemonAtaqueSorteado, pokemonDefesaSorteado) {
     if (DanoAdicionalPorElementoCounter(pokemonAtaqueSorteado, pokemonDefesaSorteado == true)) {
        let porcentagem = (pokemonAtaqueSorteado.ataque * 7) /100
        pokemonAtaqueSorteado.ataque = porcentagem + pokemonAtaqueSorteado.ataque
    }
    ataqueMaquina = pokemonDefesaSorteado.vida - (pokemonAtaqueSorteado.ataque - pokemonDefesaSorteado.defesa)
    ataqueMaquina.toFixed(2)
    if  (pokemonAtaqueSorteado.ataque <= pokemonDefesaSorteado.defesa) {
        console.log('Pokemon', pokemonAtaqueSorteado.nome, 'atacou' , pokemonDefesaSorteado.nome)
        console.log('Causando 0 de danos, vida do', pokemonDefesaSorteado.nome, 'continua em' , pokemonDefesaSorteado.vida) 
    } else {
        pokemonDefesaSorteado.vida = ataqueMaquina
        console.log('Pokemon', pokemonAtaqueSorteado.nome, 'atacou' , pokemonDefesaSorteado.nome)
        console.log(pokemonDefesaSorteado.nome,  'recebeu', danoRecebidoMaquina() ,'de danos')
        console.log('Status atual do pokemon atacado', pokemonDefesaSorteado)
   }
}

function sortearPokemonAtacadoPelaMaquina () {
    const valor = Math.random() * (pokemonsUsuario.length - 0) + 0
    let sorteioEntrePokemonsUsuario = pokemonsUsuario[Math.floor(valor)]
    return sorteioEntrePokemonsUsuario
}

function sortearPokemonDeAtaqueDaMaquina () {
    const valor = Math.random() * (pokemonsDaMaquina.length - 0) + 0
    let sorteioEntrePokemonsMaquina = pokemonsDaMaquina[Math.floor(valor)]
    return sorteioEntrePokemonsMaquina 
}

function sortearPokemonCuradoDaMaquina () {
    const valor = Math.random() * (pokemonsDaMaquina.length - 0) + 0
    let sorteioEntrePokemonsMaquina = pokemonsDaMaquina[Math.floor(valor)]
    return sorteioEntrePokemonsMaquina 
}

function sortearAtaqueOuCura () {
    pokemonDefesaSorteado = sortearPokemonAtacadoPelaMaquina()
    pokemonDefesaSorteado = sortearPokemonAtacadoPelaMaquina()
    curaOuAtaque = ['curar', 'atacar']
    const valor = Math.random() * (curaOuAtaque.length - 0) + 0
    let curarOuAtacar = curaOuAtaque[Math.floor(valor)]
    if(curarOuAtacar == 'curar') {
        curar(sortearPokemonCuradoDaMaquina()) 
    } else {
        atacarMaquina(pokemonAtaqueSorteado, pokemonDefesaSorteado)
    }
}

function curar (pokemon) { 
   let cura = pokemon.vida + pokemon.cura
   
   switch(pokemon) {
    case pokemon.nome == vidaENomePokemonMaquina1.nome :
        vidaENomePokemonMaquina1.vida <= cura 
        pokemon.vida = cura
        console.log('Pokemon curado em' , pokemon.cura)
        console.log('Status do pokemon :', pokemon)
    case pokemon.nome == vidaENomePokemonMaquina2 :
        vidaENomePokemonMaquina2.vida <= cura
        pokemon.vida = cura
        console.log('Pokemon curado em' , pokemon.cura)
        console.log('Status do pokemon :', pokemon)
    case pokemon.nome == vidaENomePokemonUsuario1 :
        vidaENomePokemonUsuario1 <= cura 
        pokemon.vida = cura
        console.log('Pokemon curado em' , pokemon.cura)
        console.log('Status do pokemon :', pokemon)
    case pokemon.nome == vidaENomePokemonUsuario2 : 
        vidaENomePokemonUsuario2 <= cura 
        pokemon.vida = cura
        console.log('Pokemon curado em' , pokemon.cura)
        console.log('Status do pokemon :', pokemon)
        default : 
         console.log('Cura indisponivel, cura maior que a vida base do pokemon')
   } 
 }


function sortearPokemon () {
    const valor = Math.random() * (pokemons.length - 0) + 0
    let pokemonSorteado = pokemons[Math.floor(valor)]
    pokemons.splice(valor, 1)
    return pokemonSorteado  
}


function danoRecebido (pokemonDeAtaque, pokemonDefesa) {
    let danos = pokemonDeAtaque.ataque - pokemonDefesa.defesa
    if(danos < 0) {
        return 0
    } else {
        return danos
    }
}
function atacar (pokemonAtaque, pokemonDefesa) { 
    if (DanoAdicionalPorElementoCounter(pokemonAtaque, pokemonDefesa == true)) {
        let porcentagem = (pokemonAtaque.ataque * 7) /100
        pokemonAtaque.ataque = porcentagem + pokemonAtaque.ataque
    }
    ataque = pokemonDefesa.vida - (pokemonAtaque.ataque - pokemonDefesa.defesa)
    ataque.toFixed(2)
    if  (pokemonAtaque.ataque <= pokemonDefesa.defesa) {
        console.log('Causou 0 de danos, vida do pokemon atacado continua em' , pokemonDefesa.vida) 
    } else {
        pokemonDefesa.vida = ataque 
        console.log(`O pokemon ${pokemonDefesa.nome} recebeu ${danoRecebido(pokemonAtaque, pokemonDefesa)} de danos`)
        console.log('Status atual do pokemon atacado', pokemonDefesa)
    } 
  }

function isPokemonDeAtaqueValido (pokemonDeAtaque) {
    pokemonDeAtaque = pokemonDeAtaque.toLowerCase().trim()
    if(pokemonDeAtaque == pokemonUsuario1.nome || pokemonDeAtaque == pokemonUsuario2.nome) {
        return true
    } else {
        return false 
    }
} 

function isPokemonValidoPorTurno (pokemonAtacado) {
    let pokemonAtacadoFormatado = pokemonAtacado.toLowerCase().trim()
    if (pokemonAtacadoFormatado == pokemonMaquina1.nome || pokemonAtacadoFormatado == pokemonMaquina2.nome) {
        return true 
    } else { 
        return false
    }
}


function isPokemonValido (meuPokemon) {
    let nomePokemonDigitado = meuPokemon.toLowerCase().trim()
    return pokemons.some( (pokemon) => pokemon.nome === nomePokemonDigitado)
}

function apresentarPokemon (meuPokemon) {
    switch (meuPokemon.toLowerCase().trim()) {
        case 'pikachu':
        console.log('Seu outro pokemon é o :',  pikachu )  
        break
        case 'charmander'  : 
        console.log('Seu outro pokemon é o :', charmander)
        break
        case 'squirtle' : 
        console.log('Seu outro pokemon é o :', squirtle)
        break
        case 'caterpie' : 
        console.log('Seu outro pokemon é o :', caterpie)
        break
        case 'pidgey' :
        console.log('Seu outro pokemon é o :', pidgey)
        break
        case 'abra' : 
        console.log('Seu outro pokemon é o :', abra)
        case 'ratata' :
        console.log('Seu outro pokemon é o :', ratata)
        break
        case 'snorlax' : 
        console.log('Seu outro pokemon é o :', snorlax)
        break
        case 'psyduck' : 
        console.log('Seu outro pokemon é o :', psyduck )
        break
        case 'dragonite': 
        console.log('Seu outro pokemon é o :', dragonite)
        break
        case 'ekans' : 
        console.log('Seu outro pokemon é o :', ekans) 
        break
        case 'cubone' :
        console.log('Seu outro pokemon é o :', cubone)
        break
    }
}

function sortearPokemon () {
    const valor = Math.random() * (pokemons.length - 0) + 0
    let pokemonSorteado = pokemons[Math.floor(valor)]
    pokemons.splice(valor, 1)
    return pokemonSorteado  
}


function iniciarJogo () {
    console.log('Voce vai enfrentar esses 2 pokemons')
    pokemonMaquina1 = sortearPokemon()
    pokemonMaquina2 = sortearPokemon()
    console.log(pokemonMaquina1)
    console.log(pokemonMaquina2)
    vidaENomePokemonMaquina1 = {
        nome : pokemonMaquina1.nome,
        vida: pokemonMaquina1.vida
    }
    vidaENomePokemonMaquina2 = {
        nome: pokemonMaquina2.nome,
        vida: pokemonMaquina2.vida
    }


    console.log('Já escolhemos um para voce !' )
    pokemonUsuario1 = sortearPokemon()
    console.log(pokemonUsuario1)
    vidaENomePokemonUsuario1 = {
        nome: pokemonUsuario1.nome,
        vida: pokemonUsuario1.vida,
    }

    console.log('Agora é sua vez')
    console.log(pokemons)

    do {
      pokemonUsuario2 = prompt("Escolha o outro dentre esses!(Escreva o nome do pokemon, apenas pokemons nao escolhidos)") 

    }
    while (!isPokemonValido(pokemonUsuario2)) 
    apresentarPokemon(pokemonUsuario2) 

    pokemonUsuario2 = pokemonUsuario2.toLowerCase().trim()
    pokemonUsuario2 = pokemons.filter( (pokemon) => pokemon.nome == pokemonUsuario2)[0]
    console.log(pokemonUsuario2)
    vidaENomePokemonUsuario2 = {
        nome : pokemonUsuario2.nome,
        vida: pokemonUsuario2.vida,
    }

    do {
        console.clear()
        console.log(pokemonMaquina1)
        console.log(pokemonMaquina2)
        pokemonAtacado = prompt ("Qual pokemon voce deseja atacar?")
    }
    while (!isPokemonValidoPorTurno(pokemonAtacado))
    pokemonAtacado = pokemonAtacado.toLowerCase().trim()
    pokemonsDaMaquina = [pokemonMaquina1, pokemonMaquina2] 


    do {
        console.log(pokemonUsuario1)
        console.log(pokemonUsuario2)
        pokemonDeAtaque = prompt('Agora voce deve escolher com qual pokemon atacar')
    }
    while(!isPokemonDeAtaqueValido(pokemonDeAtaque))
    pokemonDeAtaque = pokemonDeAtaque.toLowerCase().trim()
    pokemonsUsuario = [pokemonUsuario1, pokemonUsuario2]

    let pokemonDeAtaqueObj = getPokemonByName(pokemonsUsuario, pokemonDeAtaque)
    let pokemonDeDefesaObj = getPokemonByName(pokemonsDaMaquina, pokemonAtacado)
    atacar(pokemonDeAtaqueObj, pokemonDeDefesaObj)

    console.log('Agora é a vez da maquina escolher qual dos seus pokemons atacar')
    pokemonAtaqueSorteado = sortearPokemonDeAtaqueDaMaquina()
    pokemonDefesaSorteado = sortearPokemonAtacadoPelaMaquina()
    atacarMaquina(pokemonAtaqueSorteado, pokemonDefesaSorteado)

// comecar o loop

    verificarPokemonVivo(pokemonsUsuario, pokemonsDaMaquina)

 while ((pokemonMaquina1.vida > 0 && pokemonMaquina2.vida > 0 )
    || (pokemonUsuario1.vida > 0 && pokemonUsuario2.vida > 0)) { 

    do {
        escolhaCuraOuAtaque = prompt('Escolha se você deseja curar seu Pokémon ou atacar o oponente');
    } while (!(escolhaCuraOuAtaque.toLowerCase().trim() === 'curar' || escolhaCuraOuAtaque.toLowerCase().trim() === 'atacar'));

    if(escolhaCuraOuAtaque.toLowerCase().trim() == 'curar' ) {
        console.log(pokemonsUsuario)
        let pokemonCurado = prompt ('Qual pokemon voce deseja curar')
            pokemonCurado = pokemonCurado.toLowerCase().trim()
        let pokemonCuradoObj = getPokemonByName(pokemonsUsuario, pokemonCurado)
        curar(pokemonCuradoObj)
    } else {
        do {
            console.log(pokemonsDaMaquina)
        pokemonAtacado = prompt ('Qual pokemon voce deseja atacar')
        pokemonAtacado = pokemonAtacado.toLowerCase().trim()
        }
        while(!isPokemonValidoByName(pokemonsDaMaquina, pokemonAtacado))
        let pokemonAtacadoObj = getPokemonByName(pokemonsDaMaquina, pokemonAtacado)
    do {
        console.log(pokemonsUsuario)
        pokemonDeAtaque = prompt ('Agora escolha com qual pokemon voce deseja atacar!')
        pokemonDeAtaque = pokemonDeAtaque.toLowerCase().trim()
    }
    while(!isPokemonValidoByName(pokemonsUsuario, pokemonDeAtaque))
    let pokemonDeAtaqueObj = getPokemonByName(pokemonsUsuario, pokemonDeAtaque.toLowerCase().trim())
        atacar(pokemonDeAtaqueObj, pokemonAtacadoObj)
    }

    console.log('Agora é a vez da maquina escolher se vai atacar o seus pokemons ou curar!')
    sortearAtaqueOuCura()

  }
  console.log("Fim de jogo") 
}
iniciarJogo()


