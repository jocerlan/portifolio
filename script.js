// Array que relaciona os links do menu com as seções correspondentes
const links = [
  { link: 'sobre', section: 'sobre-mim' },
  { link: 'formacao', section: 'i-formacao' },
  { link: 'portifolio', section: 'my-portifolio' },
  { link: 'contato', section: 'form-contato' }
];

// Função para remover a classe 'active' de todos os links
function removerAtivo() {
  links.forEach(({ link }) => {
    document.getElementById(link).classList.remove('active');
  });
}

// Função para mostrar apenas a seção selecionada e esconder as outras
function mostrarSecao(secaoId) {
  links.forEach(({ section }) => {
    document.getElementById(section).style.display = section === secaoId ? 'block' : 'none';
  });
}

// Função para ativar um link específico
function ativarLink(linkId) {
  removerAtivo(); // Remove ativo de todos os links
  document.getElementById(linkId).classList.add('active'); // Adiciona ativo ao link clicado
}

// Adiciona o evento de clique para cada link do menu
links.forEach(({ link, section }) => {
  document.getElementById(link).addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    mostrarSecao(section);  // Mostra a seção correspondente
    ativarLink(link);       // Ativa o link clicado
  });
});

// Ao carregar a página, exibe apenas a seção "sobre-mim" e ativa o link "sobre"
mostrarSecao('sobre-mim');
ativarLink('sobre');