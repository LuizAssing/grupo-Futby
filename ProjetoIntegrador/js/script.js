/* =========================================================
   SCRIPT - Wd decorações
   JavaScript puro (sem bibliotecas). Funcionalidades:
   1. Menu mobile (abrir/fechar)
   2. Scroll suave nos links do menu
   3. Accordion do FAQ
   4. Máscara de telefone
   5. Validação do formulário + mensagem de sucesso
   ========================================================= */


/* ---------- 1. MENU MOBILE ---------- */

// Pegamos o botão hambúrguer e o menu pelo HTML
const menuBotao = document.querySelector('.menu-botao');
const menu = document.querySelector('#menu');

// Função que abre ou fecha o menu
function alternarMenu() {
  // classList.toggle adiciona a classe se não existir, ou remove se existir.
  // Ela devolve true se o menu ficou aberto.
  const estaAberto = menu.classList.toggle('aberto');

  // Atualiza os atributos de acessibilidade do botão
  menuBotao.setAttribute('aria-expanded', estaAberto);
  menuBotao.setAttribute('aria-label', estaAberto ? 'Fechar menu' : 'Abrir menu');
}

// Função que fecha o menu (usada ao clicar em um link)
function fecharMenu() {
  menu.classList.remove('aberto');
  menuBotao.setAttribute('aria-expanded', 'false');
  menuBotao.setAttribute('aria-label', 'Abrir menu');
}

// Quando clicar no botão hambúrguer, abre/fecha o menu
menuBotao.addEventListener('click', alternarMenu);


/* ---------- 2. SCROLL SUAVE ---------- */

// Seleciona todos os links que começam com "#" (links âncora da página)
const linksAncora = document.querySelectorAll('a[href^="#"]');

// Para cada link, adicionamos o comportamento de rolagem suave
linksAncora.forEach(function (link) {
  link.addEventListener('click', function (evento) {
    const idDestino = link.getAttribute('href'); // ex: "#servicos"
    const destino = document.querySelector(idDestino);

    // Se a seção existir, impedimos o "pulo" padrão e rolamos suavemente
    if (destino) {
      evento.preventDefault();
      destino.scrollIntoView({ behavior: 'smooth' });
      // O desconto da altura do header fixo é feito no CSS (scroll-margin-top)
    }

    // No celular, fecha o menu depois de clicar em um link
    fecharMenu();
  });
});


/* ---------- 3. ACCORDION DO FAQ ---------- */

// Pega todos os botões de pergunta do FAQ
const perguntas = document.querySelectorAll('.faq__pergunta');

perguntas.forEach(function (pergunta) {
  pergunta.addEventListener('click', function () {
    // Descobre qual resposta este botão controla (pelo aria-controls)
    const resposta = document.getElementById(pergunta.getAttribute('aria-controls'));
    const estaAberta = pergunta.getAttribute('aria-expanded') === 'true';

    // Inverte o estado: se estava aberta, fecha; se estava fechada, abre
    pergunta.setAttribute('aria-expanded', !estaAberta);
    resposta.hidden = estaAberta;
  });
});


/* ---------- 4. MÁSCARA DE TELEFONE ---------- */

const campoTelefone = document.querySelector('#telefone');

// Formata o que o usuário digita no padrão (45) 99999-9999
campoTelefone.addEventListener('input', function () {
  // Remove tudo que não for número e limita a 11 dígitos (DDD + 9 dígitos)
  let numeros = campoTelefone.value.replace(/\D/g, '').slice(0, 11);

  // Monta o texto formatado aos poucos, conforme a quantidade de dígitos
  if (numeros.length > 10) {
    // Celular: (45) 99999-9999
    numeros = numeros.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  } else if (numeros.length > 6) {
    // Fixo ou celular incompleto: (45) 3333-3333
    numeros = numeros.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
  } else if (numeros.length > 2) {
    numeros = numeros.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
  } else if (numeros.length > 0) {
    numeros = numeros.replace(/^(\d{0,2})$/, '($1');
  }

  campoTelefone.value = numeros;
});


/* ---------- 5. VALIDAÇÃO DO FORMULÁRIO ---------- */

const formulario = document.querySelector('#form-orcamento');
const mensagemSucesso = document.querySelector('#mensagem-sucesso');

// Mostra (ou limpa) a mensagem de erro de um campo
function mostrarErro(idCampo, mensagem) {
  const campo = document.getElementById(idCampo);
  const areaErro = document.getElementById('erro-' + idCampo);

  areaErro.textContent = mensagem;

  // Se tem mensagem, marca o campo como inválido; se não, desmarca
  if (mensagem) {
    campo.parentElement.classList.add('campo--invalido');
    campo.setAttribute('aria-invalid', 'true');
  } else {
    campo.parentElement.classList.remove('campo--invalido');
    campo.removeAttribute('aria-invalid');
  }
}

// Confere todos os campos obrigatórios. Devolve true se estiver tudo certo.
function validarFormulario() {
  let valido = true;

  // Nome: obrigatório, pelo menos 3 letras
  const nome = document.getElementById('nome').value.trim();
  if (nome.length < 3) {
    mostrarErro('nome', 'Informe seu nome (mínimo 3 letras).');
    valido = false;
  } else {
    mostrarErro('nome', '');
  }

  // Telefone: obrigatório, 10 dígitos (fixo) ou 11 dígitos (celular)
  const digitosTelefone = document.getElementById('telefone').value.replace(/\D/g, '');
  if (digitosTelefone.length === 0) {
    mostrarErro('telefone', 'Informe seu telefone.');
    valido = false;
  } else if (digitosTelefone.length < 10) {
    mostrarErro('telefone', 'Telefone inválido. Use o formato (45) 99999-9999.');
    valido = false;
  } else {
    mostrarErro('telefone', '');
  }

  // Tipo de serviço: obrigatório escolher uma opção
  if (document.getElementById('servico').value === '') {
    mostrarErro('servico', 'Selecione o tipo de serviço.');
    valido = false;
  } else {
    mostrarErro('servico', '');
  }

  return valido;
}

// Número do WhatsApp da empresa (55 = Brasil, 45 = DDD, depois o número)
const numeroWhatsApp = '5545999830663';

// Monta o texto da mensagem com os dados preenchidos no formulário
function montarMensagem() {
  const campoServico = document.getElementById('servico');
  // Pega o texto da opção escolhida (ex: "Forros"), e não o value ("forros")
  const servico = campoServico.options[campoServico.selectedIndex].text;
  const metragem = document.getElementById('metragem').value;
  const mensagem = document.getElementById('mensagem').value.trim();

  // Cada linha do array vira uma linha da mensagem no WhatsApp
  const linhas = [
    'Olá! Gostaria de um orçamento.',
    '',
    'Nome: ' + document.getElementById('nome').value.trim(),
    'Telefone: ' + document.getElementById('telefone').value,
    'Serviço: ' + servico
  ];

  // Campos opcionais só entram na mensagem se foram preenchidos
  if (metragem) {
    linhas.push('Metragem aproximada: ' + metragem + ' m²');
  }
  if (mensagem) {
    linhas.push('Mensagem: ' + mensagem);
  }

  // join('\n') junta as linhas com quebra de linha entre elas
  return linhas.join('\n');
}

// Quando o formulário for enviado...
formulario.addEventListener('submit', function (evento) {
  // Impede o envio padrão do navegador (não temos servidor/backend)
  evento.preventDefault();

  // Esconde uma mensagem de sucesso anterior, se houver
  mensagemSucesso.hidden = true;

  if (validarFormulario()) {
    // Tudo certo: abre o WhatsApp em outra aba com a mensagem já escrita.
    // encodeURIComponent converte espaços, acentos e quebras de linha para o formato de link.
    const link = 'https://wa.me/' + numeroWhatsApp + '?text=' + encodeURIComponent(montarMensagem());
    window.open(link, '_blank');

    // Mostra a mensagem de sucesso e limpa o formulário
    mensagemSucesso.hidden = false;
    formulario.reset();
  } else {
    // Algo errado: coloca o cursor no primeiro campo com erro
    const primeiroErro = formulario.querySelector('[aria-invalid="true"]');
    if (primeiroErro) {
      primeiroErro.focus();
    }
  }
});
