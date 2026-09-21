// retornados pela PokéAPI (https://pokeapi.co/api/v2/pokemon/{id}).
const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    height: 7,
    weight: 69,
    abilities: [
      { ability: { name: 'overgrow', url: 'https://pokeapi.co/api/v2/ability/65/' }, is_hidden: false, slot: 1 },
      { ability: { name: 'chlorophyll', url: 'https://pokeapi.co/api/v2/ability/34/' }, is_hidden: true, slot: 3 }
    ],
    types: [
      { slot: 1, type: { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' } },
      { slot: 2, type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' } }
    ],
    stats: [
      { base_stat: 45, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
      { base_stat: 49, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
      { base_stat: 49, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
      { base_stat: 65, effort: 1, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
      { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
      { base_stat: 45, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
        }
      }
    }
  },
  {
    id: 4,
    name: 'charmander',
    height: 6,
    weight: 85,
    abilities: [
      { ability: { name: 'blaze', url: 'https://pokeapi.co/api/v2/ability/66/' }, is_hidden: false, slot: 1 },
      { ability: { name: 'solar-power', url: 'https://pokeapi.co/api/v2/ability/94/' }, is_hidden: true, slot: 3 }
    ],
    types: [
      { slot: 1, type: { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' } }
    ],
    stats: [
      { base_stat: 39, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
      { base_stat: 52, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
      { base_stat: 43, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
      { base_stat: 60, effort: 0, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
      { base_stat: 50, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
      { base_stat: 65, effort: 1, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
        }
      }
    }
  },
  {
    id: 7,
    name: 'squirtle',
    height: 5,
    weight: 90,
    abilities: [
      { ability: { name: 'torrent', url: 'https://pokeapi.co/api/v2/ability/67/' }, is_hidden: false, slot: 1 },
      { ability: { name: 'rain-dish', url: 'https://pokeapi.co/api/v2/ability/44/' }, is_hidden: true, slot: 3 }
    ],
    types: [
      { slot: 1, type: { name: 'water', url: 'https://pokeapi.co/api/v2/type/11/' } }
    ],
    stats: [
      { base_stat: 44, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
      { base_stat: 48, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
      { base_stat: 65, effort: 1, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
      { base_stat: 50, effort: 0, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
      { base_stat: 64, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
      { base_stat: 43, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png'
        }
      }
    }
  },
  {
    id: 25,
    name: 'pikachu',
    height: 4,
    weight: 60,
    abilities: [
      { ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' }, is_hidden: false, slot: 1 },
      { ability: { name: 'lightning-rod', url: 'https://pokeapi.co/api/v2/ability/31/' }, is_hidden: true, slot: 3 }
    ],
    types: [
      { slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' } }
    ],
    stats: [
      { base_stat: 35, effort: 0, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
      { base_stat: 55, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
      { base_stat: 40, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
      { base_stat: 50, effort: 0, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
      { base_stat: 50, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
      { base_stat: 90, effort: 2, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
        }
      }
    }
  },
  {
    id: 39,
    name: 'jigglypuff',
    height: 5,
    weight: 55,
    abilities: [
      { ability: { name: 'cute-charm', url: 'https://pokeapi.co/api/v2/ability/56/' }, is_hidden: false, slot: 1 },
      { ability: { name: 'competitive', url: 'https://pokeapi.co/api/v2/ability/172/' }, is_hidden: false, slot: 2 },
      { ability: { name: 'friend-guard', url: 'https://pokeapi.co/api/v2/ability/132/' }, is_hidden: true, slot: 3 }
    ],
    types: [
      { slot: 1, type: { name: 'normal', url: 'https://pokeapi.co/api/v2/type/1/' } },
      { slot: 2, type: { name: 'fairy', url: 'https://pokeapi.co/api/v2/type/18/' } }
    ],
    stats: [
      { base_stat: 115, effort: 2, stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' } },
      { base_stat: 45, effort: 0, stat: { name: 'attack', url: 'https://pokeapi.co/api/v2/stat/2/' } },
      { base_stat: 20, effort: 0, stat: { name: 'defense', url: 'https://pokeapi.co/api/v2/stat/3/' } },
      { base_stat: 45, effort: 0, stat: { name: 'special-attack', url: 'https://pokeapi.co/api/v2/stat/4/' } },
      { base_stat: 25, effort: 0, stat: { name: 'special-defense', url: 'https://pokeapi.co/api/v2/stat/5/' } },
      { base_stat: 20, effort: 0, stat: { name: 'speed', url: 'https://pokeapi.co/api/v2/stat/6/' } }
    ],
    sprites: {
      front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
      other: {
        'official-artwork': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png'
        }
      }
    }
  }
];

// Tradução/estilo dos tipos (a API só devolve o nome em inglês).
const TYPE_LABELS = {
  grass: { label: 'Grama', cls: 't-grass' },
  poison: { label: 'Veneno', cls: 't-poison' },
  fire: { label: 'Fogo', cls: 't-fire' },
  water: { label: 'Água', cls: 't-water' },
  electric: { label: 'Elétrico', cls: 't-electric' },
  normal: { label: 'Normal', cls: 't-normal' },
  rock: { label: 'Pedra', cls: 't-rock' },
  ground: { label: 'Terra', cls: 't-ground' },
  fairy: { label: 'Fada', cls: 't-normal' }
};

// Nomes dos stats da API para os ids usados nas barras de detalhe.
const STAT_BARS = [
  ['hp', 'statHp', 'statHpVal'],
  ['attack', 'statAtk', 'statAtkVal'],
  ['defense', 'statDef', 'statDefVal'],
  ['special-attack', 'statSpAtk', 'statSpAtkVal'],
  ['special-defense', 'statSpDef', 'statSpDefVal'],
  ['speed', 'statSpeed', 'statSpeedVal']
];

let favorites = new Set([25]);
let currentDetailId = null;

function findPokemon(id) {
  return pokemons.find(p => p.id === id);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function artworkUrl(p) {
  return p.sprites.other['official-artwork'].front_default;
}

function getStat(p, statName) {
  const found = p.stats.find(s => s.stat.name === statName);
  return found ? found.base_stat : 0;
}

function typesHtml(p) {
  return p.types
    .map(t => {
      const info = TYPE_LABELS[t.type.name] || { label: capitalize(t.type.name), cls: 't-normal' };
      return `<span class="type-tag ${info.cls}">${info.label}</span>`;
    })
    .join('');
}

function cardHtml(p) {
  const isFav = favorites.has(p.id);
  return `
    <li class="poke-card" data-id="${p.id}">
      <button type="button" class="fav-icon ${isFav ? 'on' : ''}" data-fav="${p.id}" aria-label="Favoritar ${capitalize(p.name)}">${isFav ? '★' : '☆'}</button>
      <button type="button" class="card-open">
        <img src="${artworkUrl(p)}" alt="${capitalize(p.name)}">
        <div class="dex-no">#${String(p.id).padStart(3, '0')}</div>
        <h2 class="poke-name">${capitalize(p.name)}</h2>
        ${typesHtml(p)}
      </button>
    </li>`;
}

function renderList() {
  document.getElementById('cardGrid').innerHTML = pokemons.map(cardHtml).join('');
}

function renderFavorites() {
  const favPokemons = pokemons.filter(p => favorites.has(p.id));
  const grid = document.getElementById('favGrid');

  if (favPokemons.length === 0) {
    grid.innerHTML = '<li class="sub">Você ainda não favoritou nenhum Pokémon.</li>';
    return;
  }

  grid.innerHTML = favPokemons
    .map(p => `
      <li class="fav-list-item" data-id="${p.id}">
        <img src="${artworkUrl(p)}" alt="${capitalize(p.name)}">
        <div class="meta">
          <div class="dex-no">#${String(p.id).padStart(3, '0')}</div>
          <h2 class="poke-name">${capitalize(p.name)}</h2>
        </div>
        <button type="button" class="remove-x" data-fav="${p.id}" aria-label="Remover ${capitalize(p.name)} dos favoritos">✕</button>
      </li>`)
    .join('');
}

function renderDetail(id) {
  const p = findPokemon(id);
  if (!p) return;

  currentDetailId = id;
  document.getElementById('detailImg').src = artworkUrl(p);
  document.getElementById('detailImg').alt = capitalize(p.name);
  document.getElementById('detailNo').textContent = '#' + String(p.id).padStart(3, '0');
  document.getElementById('detailName').textContent = capitalize(p.name);
  document.getElementById('detailTypes').innerHTML = typesHtml(p);
  // height/weight vêm da API em decímetros/hectogramas.
  document.getElementById('detailHeight').textContent = (p.height / 10).toString().replace('.', ',') + ' m';
  document.getElementById('detailWeight').textContent = (p.weight / 10).toString().replace('.', ',') + ' kg';
  document.getElementById('detailAbilities').textContent = p.abilities.map(a => capitalize(a.ability.name)).join(', ');
  updateFavBtn();

  const maxStat = 150;
  STAT_BARS.forEach(([statName, barId, valId]) => {
    const val = getStat(p, statName);
    document.getElementById(barId).style.width = Math.min(100, (val / maxStat) * 100) + '%';
    document.getElementById(valId).textContent = val;
  });
}

function updateFavBtn() {
  const btn = document.getElementById('detailFavBtn');
  const isFav = favorites.has(currentDetailId);
  btn.textContent = isFav ? '★ Favoritado' : '☆ Favoritar';
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
}

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => {
    s.hidden = true;
  });
  document.getElementById(name).hidden = false;

  if (name === 'lista') renderList();
  if (name === 'favoritos') renderFavorites();
}

// Login: decorativo, entra sem validar nada.
document.getElementById('btnEntrar').addEventListener('click', () => showScreen('lista'));
document.getElementById('btnCriarConta').addEventListener('click', () => showScreen('lista'));

document.getElementById('tabEntrar').addEventListener('click', () => {
  document.getElementById('tabEntrar').classList.add('on');
  document.getElementById('tabEntrar').setAttribute('aria-selected', 'true');
  document.getElementById('tabCriarConta').classList.remove('on');
  document.getElementById('tabCriarConta').setAttribute('aria-selected', 'false');
  document.getElementById('loginTitle').textContent = 'Olá, treinador';
  document.getElementById('loginSub').textContent = 'Entre para acessar seus favoritos.';
  document.getElementById('btnEntrar').textContent = 'Entrar';
});

document.getElementById('tabCriarConta').addEventListener('click', () => {
  document.getElementById('tabCriarConta').classList.add('on');
  document.getElementById('tabCriarConta').setAttribute('aria-selected', 'true');
  document.getElementById('tabEntrar').classList.remove('on');
  document.getElementById('tabEntrar').setAttribute('aria-selected', 'false');
  document.getElementById('loginTitle').textContent = 'Crie sua conta';
  document.getElementById('loginSub').textContent = 'Cadastre-se para acessar seus favoritos.';
  document.getElementById('btnEntrar').textContent = 'Criar conta';
});

// Navegação (navbar / botão sair)
document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', () => showScreen(el.dataset.nav));
});

document.getElementById('backBtn').addEventListener('click', () => showScreen('lista'));

// Cards da lista: clique abre detalhes, clique na estrela favorita
document.getElementById('cardGrid').addEventListener('click', (e) => {
  const favEl = e.target.closest('[data-fav]');
  if (favEl) {
    toggleFavorite(Number(favEl.dataset.fav));
    renderList();
    return;
  }

  const card = e.target.closest('.poke-card');
  if (card) {
    renderDetail(Number(card.dataset.id));
    showScreen('detalhes');
  }
});

document.getElementById('detailFavBtn').addEventListener('click', () => {
  toggleFavorite(currentDetailId);
  updateFavBtn();
});

// Favoritos: remover da lista
document.getElementById('favGrid').addEventListener('click', (e) => {
  const removeEl = e.target.closest('[data-fav]');
  if (removeEl) {
    toggleFavorite(Number(removeEl.dataset.fav));
    renderFavorites();
  }
});