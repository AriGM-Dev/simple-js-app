let pokemonRepository=function(){
    let e=[],t=document.querySelector("h2");
    function i(t){var i;!0==("object"==typeof(i=t)&&"name"in i||(document.write("pokemon is not correct"),!1))&&e.push(t)}
    function a(){return e}
    function n(t){return e.filter(e=>e.name===t)}
    function o(){t.innerText=" "}
    function r(e){
    return fetch(e.detailsUrl)
    .then(e=>e.json())
    .then(t=>{var i,a;
    e.imageUrlFront=t.sprites.front_default,
    e.imageUrlBack=t.sprites.back_default,
    e.height=t.height,
    e.weight=t.weight,
    e.types=(i=t.types,i.map(({type:e})=>e.name).join(",")),
    e.abilities=(a=t.abilities,a.map(({ability:e})=>e.name).join(",")),o()}).catch(e=>{console.log(e)})}
    return document.querySelector("#modal-container"),
    {add:i,getAll:a,addListItem:function e(t){
    let i=document.querySelector(".pokemon-list"),
    a=document.createElement("li");
    a.classList.add("list-group-item");
    let n=document.createElement("button");
    n.innerText=t.name,
    n.classList.add("btn-primary"),
    n.classList.add("pokemon-button"),
    n.setAttribute("data-toggle","modal"),
    n.setAttribute("data-target","#exampleModal"),
    a.appendChild(n),i.appendChild(a),
    function e(t,i){t.addEventListener("click",()=>{!function e(t){r(t).then(()=>{var e;o();let i,a,n,r,l,p,s,d,m;e=t,console.log("Ariel",e),i=$(".modal-body"),a=$(".modal-title"),$(".modal-header"),a.empty(),i.empty(),n=$("<h1>"+e.name+"</h1>"),(r=$('<img class ="modal-img">')).attr("src",e.imageUrlFront),(l=$('<img class="modal-img" style="width:50%">')).attr("src",e.imageUrlBack),p=$("<p>height : "+e.height+"</p>"),s=$("<p>weight : "+e.weight+"</p>"),d=$("<p>types : "+e.types+"</p>"),m=$("<p>abilities: "+e.abilities+"</p>"),a.append(n),i.append(r),i.append(l),i.append(p),i.append(s),i.append(d),i.append(m)})}(i)})}(n,t)},loadList:function e(){return t.innerText="Loading...",fetch("https://pokeapi.co/api/v2/pokemon/?limit=950").then(e=>e.json()).then(e=>{e.results.forEach(e=>{let t={name:e.name,detailsUrl:e.url};o(),i(t)})}).catch(e=>{o(),console.error(e)})},loadDetails:r}}();pokemonRepository.loadList().then(()=>{pokemonRepository.getAll().forEach(e=>pokemonRepository.addListItem(e))});