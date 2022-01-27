console.log("Ejecutando JS");

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() *(max - min)) + min
}

//console.log(getRandomInt(1, 150));
document.addEventListener("DOMContentLoaded", ()=>{
    const random = getRandomInt(1, 150);
    fetchData(random);
});



const fetchData = async (id) => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`); //https://pokeapi.co/api/v2/pokemon/${id}
        const data = await res.json();
        //console.log(data);

        const pokemon = {
            nombre: data.name,
            experiencia: data.base_experience,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            hp: data.stats[0].base_stat,
            ataque: data.stats[1].base_stat,
            defensa: data.stats[2].base_stat,
            especial: data.stats[3].base_stat

        }
        //console.log(pokemon);
        
        await pintarCard(pokemon);
        
    }
    catch(err){
        console.log(err);
    }
}

const pintarCard = (pokemon) => {
    const flex = document.querySelector('.flex');
    const template = document.querySelector('#template-card').content
    const clone = template.cloneNode(true)
    const fragment = document.createDocumentFragment()

    flex.innerHTML= '';

    clone.querySelector(".card-body-img").setAttribute("src", pokemon.imgCvg)
    clone.querySelector(".card-body-title").innerHTML = `${pokemon.nombre.charAt(0).toUpperCase()}${pokemon.nombre.slice(1)} <span> ${pokemon.hp} HP </span>`
    clone.querySelector(".card-body-text").textContent = pokemon.experiencia + " exp"
    clone.querySelectorAll(".card-footer-social h3")[0].textContent = pokemon.ataque + "K"
    clone.querySelectorAll(".card-footer-social h3")[1].textContent = pokemon.especial + "K"
    clone.querySelectorAll(".card-footer-social h3")[2].textContent = pokemon.defensa + "K"
    
    fragment.appendChild(clone)
    flex.appendChild(fragment)

    
}
