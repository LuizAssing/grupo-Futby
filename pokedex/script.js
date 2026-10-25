// URL base da PokéAPI oficial
const API_BASE_URL = 'https://pokeapi.co/api/v2';
const POKEMONS_PER_PAGE = 20;
// Lista dinâmica preenchida pela PokéAPI
let pokemons = [];
let currentOffset = 0;
let isLoading = false;
let hasMorePokemons = true;
// Tradução e classes de cores para todos os tipos de Pokémon
const TYPE_LABELS = {
  grass: { label: 'Grama', cls: 't-grass' },
  poison: { label: 'Veneno', cls: 't-poison' },
  fire: { label: 'Fogo', cls: 't-fire' },
  water: { label: 'Água', cls: 't-water' },
  electric: { label: 'Elétrico', cls: 't-electric' },
  normal: { label: 'Normal', cls: 't-normal' },
  rock: { label: 'Pedra', cls: 't-rock' },
  ground: { label: 'Terra', cls: 't-ground' },
  fairy: { label: 'Fada', cls: 't-fairy' },
  bug: { label: 'Inseto', cls: 't-bug' },
  ghost: { label: 'Fantasma', cls: 't-ghost' },
  steel: { label: 'Aço', cls: 't-steel' },
  psychic: { label: 'Psíquico', cls: 't-psychic' },
  ice: { label: 'Gelo', cls: 't-ice' },
  dragon: { label: 'Dragão', cls: 't-dragon' },
  fighting: { label: 'Lutador', cls: 't-fighting' },
  flying: { label: 'Voador', cls: 't-flying' }
};
// Requisição assíncrona para buscar detalhes individuais de cada Pokémon
async function fetchPokemonDetails(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Erro ao buscar dados do Pokémon');
  return await response.json();
}
// Requisição assíncrona para buscar um lote de Pokémons diretamente da PokéAPI
async function fetchPokemonBatch(offset = 0, limit = POKEMONS_PER_PAGE) {
  if (isLoading) return [];
  isLoading = true;
  const statusMsg = document.getElementById('statusMsg');
  if (statusMsg && pokemons.length === 0) {
    statusMsg.textContent = 'Carregando Pokémons da PokéAPI...';
    statusMsg.hidden = false;
  }
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
    if (!response.ok) throw new Error('Falha ao conectar com a PokéAPI');
    const data = await response.json();
    if (!data.next) {
  hasMorePokemons = false;
  }
    // Busca os dados completos de todos os Pokémons da página em paralelo
    const detailPromises = data.results.map(item => fetchPokemonDetails(item.url));
    const newPokemons = await Promise.all(detailPromises);
    pokemons = [...pokemons, ...newPokemons];
    currentOffset += limit;
    if (statusMsg) statusMsg.hidden = true;
    return newPokemons;
  } catch (error) {
    console.error('Erro ao consumir PokeAPI:', error);
    if (statusMsg) {
      statusMsg.textContent = 'Erro ao carregar dados da PokéAPI. Verifique sua conexão à internet.';
      statusMsg.hidden = false;
    }
    return [];
  } finally {
    isLoading = false;
  }
}

// Nomes dos stats da API para os ids usados nas barras de detalhe.
const STAT_BARS = [
  ['hp', 'statHp', 'statHpVal'],
  ['attack', 'statAtk', 'statAtkVal'],
  ['defense', 'statDef', 'statDefVal'],
  ['special-attack', 'statSpAtk', 'statSpAtkVal'],
  ['special-defense', 'statSpDef', 'statSpDefVal'],
  ['speed', 'statSpeed', 'statSpeedVal']
];

// ============ RODADA 6 (LUIZ) ============
// Chave do localStorage para persistir os favoritos
const STORAGE_FAVORITES_KEY = 'pokedex_favoritos_v1';
// Recupera os favoritos salvos no navegador (ou inicia com Pikachu #25 se for a primeira vez)
function loadFavorites() {
  try {
    const salvo = localStorage.getItem(STORAGE_FAVORITES_KEY);
    if (salvo) {
      const ids = JSON.parse(salvo);
      return new Set(ids);
    }
  } catch (erro) {
    console.error('Erro ao ler favoritos do localStorage:', erro);
  }
  return new Set([25]);
}
// Salva a lista de favoritos no localStorage
function saveFavorites() {
  try {
    localStorage.setItem(STORAGE_FAVORITES_KEY, JSON.stringify(Array.from(favorites)));
  } catch (erro) {
    console.error('Erro ao salvar favoritos no localStorage:', erro);
  }
}
let favorites = loadFavorites();

function findPokemon(id) {
  return pokemons.find(p => p.id === id);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function artworkUrl(p) {
  return p.sprites?.other?.['official-artwork']?.front_default || p.sprites?.front_default || '';
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

function getFilteredPokemons() {
  const searchInput = document.getElementById('buscaPokemon');
  const typeSelect = document.getElementById('filtroTipo');

  const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
  const selectedType = typeSelect ? typeSelect.value : '';

  const cleanSearch = searchTerm.replace(/^#/, '');

  return pokemons.filter(p => {
    // Busca por texto: confere nome ou número
    const matchesName = p.name.toLowerCase().includes(cleanSearch);
    const matchesNumber = String(p.id).includes(cleanSearch) ||
      String(p.id).padStart(3, '0').includes(cleanSearch);
    const matchesSearch = !cleanSearch || matchesName || matchesNumber;

    const matchesType = !selectedType || p.types.some(t => t.type.name === selectedType);
    return matchesSearch && matchesType;
  });
}
function renderList() {
  const filtered = getFilteredPokemons();
  const cardGrid = document.getElementById('cardGrid');
  if (filtered.length === 0) {
    cardGrid.innerHTML = '<li class="sub" style="grid-column: 1 / -1; text-align: center; padding: 40px 16px;">Nenhum Pokémon encontrado.</li>';
    return;
  }
  cardGrid.innerHTML = filtered.map(cardHtml).join('');
}


async function renderFavorites() {
  const grid = document.getElementById('favGrid');

  const idsFaltantes = Array.from(favorites).filter(id => !pokemons.some(p => p.id === id));
  if (idsFaltantes.length > 0) {
    try {
      const promessas = idsFaltantes.map(id => fetchPokemonDetails(`${API_BASE_URL}/pokemon/${id}`));
      const novosDetalhes = await Promise.all(promessas);
      pokemons = [...pokemons, ...novosDetalhes];
    } catch (e) {
      console.error('Erro ao carregar favoritos da PokéAPI:', e);
    }
  }

  const favPokemons = pokemons.filter(p => favorites.has(p.id));

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

const btnCarregarMais = document.getElementById('btnCarregarMais');
if (btnCarregarMais) {
  btnCarregarMais.addEventListener('click', async () => {
    if (isLoading || !hasMorePokemons) return;
    // Feedback visual: desabilita o botão e muda o texto enquanto baixa
    const textoOriginal = btnCarregarMais.textContent;
    btnCarregarMais.disabled = true;
    btnCarregarMais.textContent = 'Carregando Pokémons...';
    // Busca o próximo lote a partir do currentOffset atual
    await fetchPokemonBatch(currentOffset, POKEMONS_PER_PAGE);
    // Re-renderiza a lista (mantendo os filtros ativos se houver)
    renderList();
    // Restaura o botão ou avisa se acabaram todos os Pokémons
    if (!hasMorePokemons) {
      btnCarregarMais.textContent = 'Todos os Pokémons foram carregados';
      btnCarregarMais.disabled = true;
    } else {
      btnCarregarMais.textContent = textoOriginal;
      btnCarregarMais.disabled = false;
    }
  });
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  saveFavorites(); // Salva no localStorage imediatamente
}
}

async function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => {
    s.hidden = true;
  });
  document.getElementById(name).hidden = false;
  if (name === 'lista') {
    if (pokemons.length === 0) {
      await fetchPokemonBatch(0, POKEMONS_PER_PAGE);
    }
    renderList();
  }
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

const buscaInput = document.getElementById('buscaPokemon');
if (buscaInput) {
  buscaInput.addEventListener('input', () => renderList());
}
const filtroTipoSelect = document.getElementById('filtroTipo');
if (filtroTipoSelect) {
  filtroTipoSelect.addEventListener('change', () => renderList());
}