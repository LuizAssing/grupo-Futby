// Próximo passo: substituir este array pela PokéAPI (fetch por id/nome).
const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    types: [
      { label: 'Grama', cls: 't-grass' },
      { label: 'Veneno', cls: 't-poison' }
    ],
    height: '0,7 m',
    weight: '6,9 kg',
    abilities: 'Overgrow, Chlorophyll',
    stats: { hp: 45, atk: 49, def: 49, spAtk: 65, spDef: 65, speed: 45 }
  },
  {
    id: 4,
    name: 'Charmander',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    types: [
      { label: 'Fogo', cls: 't-fire' }
    ],
    height: '0,6 m',
    weight: '8,5 kg',
    abilities: 'Blaze, Solar Power',
    stats: { hp: 39, atk: 52, def: 43, spAtk: 60, spDef: 50, speed: 65 }
  },
  {
    id: 7,
    name: 'Squirtle',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    types: [
      { label: 'Água', cls: 't-water' }
    ],
    height: '0,5 m',
    weight: '9,0 kg',
    abilities: 'Torrent, Rain Dish',
    stats: { hp: 44, atk: 48, def: 65, spAtk: 50, spDef: 64, speed: 43 }
  },
  {
    id: 25,
    name: 'Pikachu',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    types: [
      { label: 'Elétrico', cls: 't-electric' }
    ],
    height: '0,4 m',
    weight: '6,0 kg',
    abilities: 'Static, Lightning Rod',
    stats: { hp: 35, atk: 55, def: 40, spAtk: 50, spDef: 50, speed: 90 }
  },
  {
    id: 39,
    name: 'Jigglypuff',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    types: [
      { label: 'Normal', cls: 't-normal' }
    ],
    height: '0,5 m',
    weight: '5,5 kg',
    abilities: 'Cute Charm, Friend Guard',
    stats: { hp: 115, atk: 45, def: 20, spAtk: 45, spDef: 25, speed: 20 }
  }
];

let favorites = new Set([25]);
let currentDetailId = null;

function findPokemon(id) {
  return pokemons.find(p => p.id === id);
}

function typesHtml(p) {
  return p.types
    .map(t => `<span class="type-tag ${t.cls}">${t.label}</span>`)
    .join('');
}

function cardHtml(p) {
  const isFav = favorites.has(p.id);
  return `
    <li class="poke-card" data-id="${p.id}">
      <button type="button" class="fav-icon ${isFav ? 'on' : ''}" data-fav="${p.id}" aria-label="Favoritar ${p.name}">${isFav ? '★' : '☆'}</button>
      <button type="button" class="card-open">
        <img src="${p.image}" alt="${p.name}">
        <div class="dex-no">#${String(p.id).padStart(3, '0')}</div>
        <h2 class="poke-name">${p.name}</h2>
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
        <img src="${p.image}" alt="${p.name}">
        <div class="meta">
          <div class="dex-no">#${String(p.id).padStart(3, '0')}</div>
          <h2 class="poke-name">${p.name}</h2>
        </div>
        <button type="button" class="remove-x" data-fav="${p.id}" aria-label="Remover ${p.name} dos favoritos">✕</button>
      </li>`)
    .join('');
}

function renderDetail(id) {
  const p = findPokemon(id);
  if (!p) return;

  currentDetailId = id;
  document.getElementById('detailImg').src = p.image;
  document.getElementById('detailImg').alt = p.name;
  document.getElementById('detailNo').textContent = '#' + String(p.id).padStart(3, '0');
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailTypes').innerHTML = typesHtml(p);
  document.getElementById('detailHeight').textContent = p.height;
  document.getElementById('detailWeight').textContent = p.weight;
  document.getElementById('detailAbilities').textContent = p.abilities;
  updateFavBtn();

  const s = p.stats;
  const maxStat = 150;
  const bars = [
    ['statHp', 'statHpVal', s.hp],
    ['statAtk', 'statAtkVal', s.atk],
    ['statDef', 'statDefVal', s.def],
    ['statSpAtk', 'statSpAtkVal', s.spAtk],
    ['statSpDef', 'statSpDefVal', s.spDef],
    ['statSpeed', 'statSpeedVal', s.speed]
  ];
  bars.forEach(([barId, valId, val]) => {
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