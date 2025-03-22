//pokemons creation
// Wrapping pokemons in an IIFE
let pokemonRepository = (function (){
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let message = document.querySelector('h2');
    let modalContainer = document.querySelector('#modal-container');

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

    

    //Function in charge of the Bootstrap Modal
    
    function showModal(item) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');
        modalTitle.empty();
        modalBody.empty();
        //creating element for name in modal content
        let nameElement = $('<h1>' + item.name + '</h1>'); 
        //creating img in modal content
        let imageElementFront = $('<img class ="modal-img">');
        imageElementFront.attr("src", item.imageUrlFront);
        let imageElementBack = $('<img class="modal-img" style="width:50%">');
        imageElementBack.attr("src", item.imageUrlBack);
        //creating element for height in modal content
        let heightElement = $('<p>' + 'height : ' + item.height + '</p>');
        //creating element for weight in modal content
        let weightElement = $('<p>' + 'weight : ' + item.weight + '</p>');
        //creating element for type in modal content
        let typesElement = $('<p>' + 'types : ' + item.types + '</p>');
        //creating element for abilities in modal content
        let abilitiesElement = $('<p>' + 'abilities: ' + item.abilities + '</p>' );
        

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
    }


    

      // Showing all the details of a pokemon
    // function showDetails(pokemon) {
    //     loadDetails(pokemon).then((data) =>{
    //         hideLoadingMessage();
    //         //console.log(pokemon);
    //         // showModal(pokemon.name, pokemon.height, pokemon.imageUrlFront);
    //         showModal(data);
    //     })
        
    // }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(() => {
            hideLoadingMessage();
            showModal(pokemon);
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
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('btn-primary');
        button.classList.add('pokemon-button');
        button.setAttribute('data-toggle','modal');
        button.setAttribute('data-target','#exampleModal');
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


    // With Async and await and creating a new object

    async function loadDetails(item){
        let url = item.detailsUrl;
        showLoadingMessage();
        try {
            const response= await fetch(url);
            const resJson = await response.json();
            return {
                name: resJson.name,
                imageUrlFront:resJson.sprites.front_default,
                imageUrlFront : resJson.sprites.front_default,
                imageUrlBack : resJson.sprites.back_default,
                height : resJson.height,
                weight : resJson.weight,
                types : parseTypes(resJson.types),
                abilities : parseAbilities(resJson.abilities)
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            hideLoadingMessage();
        }
    }

    //Following Career Foundry's Method
    // function loadDetails(item){
    //     let url = item.detailsUrl;
    //     return fetch(url).then(response => {
    //         return response.json();
    //     }).then(details => {
    //         item.imageUrlFront = details.sprites.front_default;
    //         item.imageUrlBack = details.sprites.back_default;
    //         item.height = details.height;
    //         item.weight = details.weight;
    //         item.types = parseTypes(details.types);
    //         item.abilities = parseAbilities(details.abilities);
    //         hideLoadingMessage();
    //     }).catch(err => {
            
    //         console.log(err);
    //     });
    // }

    // function parseAbilities(abilities) {
    //     return abilities.map(({ability}) => ability.name)
    //                     .join(",");
    // }

    // function parseTypes(types) {
    //     return types.map(({type}) => type.name)
    //                 .join(",");
    // }
    

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

