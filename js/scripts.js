//pokemons creation
// Wrapping pokemons in an IIFE
let pokemonRepository = (function (){
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
    function add(pokemon){
        //Bonus Task
        if(typeof(pokemon)==="object"){
            let allProperties = Object.keys(pokemon)
            if(typeof(allProperties[0])==='string'&&typeof(allProperties[1])==='array'&&typeof(allProperties[2])==='number'){
                pokemonList.push(pokemon);
            }
            
        }
        
    }
    function getAll(){
        return pokemonList;
    }
    //Bonus
    function findPokemon(name){
        let pokemon = pokemonList.filter(n=>n.name===name);
        return pokemon;
    }
    return {
        add: add, getAll
    };
})();

pokemonRepository.getAll().forEach(item => console.log(item));

//Bonus Task


// iterating throughout pokemnonList Array and showing them in the browser 
/*for (let i = 0; i < pokemonList.length; i++) {
    if(pokemonList[i].height >= 6){
    
        document.write('<p>' + pokemonList[i].name + " " + "(" + "height: " + pokemonList[i].height + "), " + "- Wow That's big!");
    }
    else{
        document.write('<p>' + pokemonList[i].name + " " + "(" + "height: " + pokemonList[i].height + "), " );
    }
    
}*/


//Foreach loop
//let nameList = ['John','Anne','Carly'];

//using for to loop through the array
/*for (let i = 0; i < nameList.length; i++) {
    console.log(nameList[i]);
}*/
//using foreach to iterate thorugh the array
   //Arrow Function
//nameList.forEach(item => console.log(item));
//
//nameList.forEach((item, i, arr) => console.log(i, item, arr));

/*Foreach Mehtod
let myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
The Datatype that a foreach method takes is a method 

//external function
//myArray.forEach(logToConsole)

function logToConsole(item){
    console.log(item)
}

//internal anonymous function
myArray.forEach(function (item){
    console.log(item)
})

//arrow function(new). It has an impact on the keyword this
myArray.forEach(item => console.log(item));
*/