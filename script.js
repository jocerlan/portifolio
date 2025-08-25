// Array que relaciona os links do menu com as seções correspondentes
const links = [
  { link: 'sobre', section: 'sobre-mim' },
  { link: 'formacao', section: 'i-formacao' },
  { link: 'portifolio', section: 'my-portifolio' },
  { link: 'contato', section: 'form-contato' }
];

// Função para mostrar apenas a seção selecionada e esconder as outras
function mostrarSecao(secaoId) {
  links.forEach(({ section }) => {
    document.getElementById(section).style.display = section === secaoId ? 'block' : 'none';
  });
}

// Adiciona o evento de clique para cada link do menu
links.forEach(({ link, section }) => {
  document.getElementById(link).addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    mostrarSecao(section);  // Mostra a seção correspondente
  });
});

// Ao carregar a página, exibe apenas a seção "sobre-mim"
mostrarSecao('sobre-mim');