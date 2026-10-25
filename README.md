# Grupo Futby

Repositório com os trabalhos acadêmicos do Grupo Futby, desenvolvidos durante o curso. O principal projeto é a **Pokédex**, entrega final do PM3.

**Site publicado (GitHub Pages):** https://LuizAssing.github.io/grupo-Futby/

---

## Integrantes

- Luiz Assing
- Manoel Camargo
- Lucas Silva
- Fabricio

---

## Pokédex — Entrega Final PM3

**Acesse:** https://LuizAssing.github.io/grupo-Futby/pokedex/pokedex.html

Aplicação web que consome a [PokéAPI](https://pokeapi.co/) para listar, buscar e exibir informações dos Pokémons. É a evolução dos Projetos 1 e 2 e foi construída com HTML, CSS e JavaScript puros, sem frameworks.

### Funcionalidades

- **Login e cadastro de treinadores** com autenticação na nuvem (Supabase), permitindo acessar a conta de qualquer computador
- **Listagem de Pokémons** carregada diretamente da PokéAPI, em lotes de 20
- **Carregar mais** (paginação) para buscar os próximos Pokémons
- **Busca em tempo real** por nome ou número (ex.: `pikachu`, `#025`)
- **Filtro por tipo** (Fogo, Água, Grama, Elétrico etc.)
- **Tela de detalhes** com imagem oficial, tipos, altura, peso, habilidades e barras de status base
- **Favoritos**: adicionar e remover Pokémons, com dados salvos no navegador (`localStorage`)
- **Layout responsivo**, adaptado para computador, tablet e celular

### Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura semântica das telas (`header`, `nav`, `main`, `section`, `article`) |
| CSS3 | Estilização, Grid/Flexbox e responsividade com media queries |
| JavaScript (ES6+) | Manipulação do DOM, requisições assíncronas (`fetch`, `async/await`) |
| [PokéAPI](https://pokeapi.co/) | Fonte dos dados dos Pokémons |
| [Supabase](https://supabase.com/) | Autenticação de usuários na nuvem |

### Estrutura

```
pokedex/
├── pokedex.html   # Estrutura das telas: login, lista, detalhes e favoritos
├── style.css      # Estilos e regras de responsividade
└── script.js      # Consumo da PokéAPI, autenticação e manipulação do DOM
```

### Como executar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/LuizAssing/grupo-Futby.git
   ```
2. Abra a pasta no VS Code.
3. Abra `pokedex/pokedex.html` com a extensão **Live Server** (botão *Go Live*).

É necessário estar conectado à internet, pois os dados vêm da PokéAPI e o login usa o Supabase.

---

## Outros trabalhos do repositório

| Pasta | Conteúdo |
|---|---|
| `ProjetoIntegrador/` | Landing page da empresa Wd Decorações |
| `Lucas/` | Trabalhos do Lucas |
| `Manoel/` | Trabalhos do Manoel |
| `ProjetosLuiz/` | Trabalhos do Luiz (localStorage, sites e tarefas de aula) |

A página inicial (`index.html`) reúne os links para todos os trabalhos publicados.
