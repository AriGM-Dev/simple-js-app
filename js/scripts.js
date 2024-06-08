//pokemons creation
// Wrapping pokemons in an IIFE
let pokemonRepository = (function (){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=950';
    let message = document.querySelector('h2');

    //Other Functions remain here

    function verifyingPokemon(pokemon)
    {
        if(typeof(pokemon)==='object' && 'name' in pokemon ){//&& 'height' in pokemon && 'types' in pokemon)
            return true;
        }
        else{
            document.write('pokemon is not correct');
            return false;
        }
    }
    function add(pokemon){
        if(verifyingPokemon(pokemon)=== true){
            pokemonList.push(pokemon);
        }  
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(() =>{
            console.log(pokemon);
        })
        
    }

    function includingToButton(button, pokemon){
        button.addEventListener('click',() =>{
            showDetails(pokemon);
        });
    }

    function addListItem(pokemon) {
        let toBeShown = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemon-button');
        listItem.appendChild(button);
        toBeShown.appendChild(listItem);
        includingToButton(button,pokemon);
    }
    function getAll(){
        return pokemonList;
    }
    //Bonus
    function findPokemon(name){
        let pokemon = pokemonList.filter(n=>n.name===name);
        return pokemon;
    }

    function showLoadingMessage(){
        
        message.innerText = 'Loading...'
    }

    function hideLoadingMessage(){
        message.innerText = ' ';
    }

    function loadList() {
        showLoadingMessage();
        return fetch(apiUrl).then(response => {
            return response.json();
        }).then(data => {
            data.results.forEach(item => {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                };
                hideLoadingMessage();
                add(pokemon);
            });
        }).catch(err => {
            hideLoadingMessage();
            console.error(err);
        })
    }

    function loadDetails(item){
        let url = item.detailsUrl;
        showLoadingMessage();
        return fetch(url).then(response => {
            return response.json();
        }).then(details => {
            item.height = details.height;
            item.types = details.types;
            //showLoadingMessage();
        }).catch(err => {
            console.log(err);
        });
    }

    return {
        add: add, 
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

pokemonRepository.loadList().then(() => {
    // Now the data is loaded
    pokemonRepository.getAll().forEach(item => pokemonRepository.addListItem(item));
})

//pokemonRepository.getAll().forEach(item => pokemonRepository.addListItem(item));




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