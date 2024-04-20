//pokemons creation
let pokemonList = [
    {name: 'Bulbasaur',
     type:["grass","poison"],
     height: 7},
     {name: 'Charmander',
     type:['fire'],
     height: 6},
     {name: 'Squirtle',
     type:['water'],
     height: 5},
     {name: 'Caterpie',
     type:['bug'],
     height: 3},
     {name: 'Weedle',
     type:['bug','poison'],
     height: 3},
     {name: 'Pidgey',
     type:['flying','normal'],
     height: 3},
     {name: 'Rattata',
     type:['normal'],
     height: 3},
     {name: 'Spearow',
     type:['flying','normal'],
     height: 3},
     {name: 'Ekans',
     type:['poison'],
     height: 2},
     {name: 'Pikachu',
     type:['electric'],
     height: 4},
     {name: 'Sandshrew',
     type:['ground'],
     height: 2},
     {name: 'Nidoran Female',
     type:['poison'],
     height: 4},
     {name: 'Nidoran Male',
     type:['poison'],
     height: 5},
     {name: 'Clefairy',
     type:['fairy'],
     height: 6},
     {name: 'Vulpix',
     type:['fire'],
     height: 6},
     {name: 'Ninetales',
     type:['fire'],
     height: 11},
     {name: 'Jigglypuff',
     type:['fairy','normal'],
     height: 5},
     {name: 'Zubat',
     type:['poison','flying'],
     height: 8},
     {name: 'Oddish',
     type:['grass','poison'],
     height: 5}
];
// iterating throughout pokemnonList Array and showing them in the browser 
for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 6){
    
        document.write('<p>' + pokemonList[i].name + " " + "(" + "height: " + pokemonList[i].height + "), " + "- Wow That's big!");
    }
    else{
        document.write('<p>' + pokemonList[i].name + " " + "(" + "height: " + pokemonList[i].height + "), " );
    }
    
}

