const listaselecaopokemons = document.querySelectorAll('.pokemon')
const pokemonscard =document.querySelectorAll('.cartao-pokemon')

listaselecaopokemons.forEach(pokemon =>{
    pokemon.addEventListener('click',() => {
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    const idpokemonselecionado = pokemon.attributes.id.value

    const idPokemonParaAbrir = 'cartao-' + idpokemonselecionado
    const cartaopokemonparaabrir = document.getElementById(idPokemonParaAbrir)
    cartaopokemonparaabrir.classList.add('aberto')

    const pokemonAtivoListagem = document.querySelector('.ativo')
    pokemonAtivoListagem.classList.remove('ativo')

    const pokemonSelecionadoListagem = document.getElementById(idpokemonselecionado)
    pokemonSelecionadoListagem.classList.add('ativo')
    })
})