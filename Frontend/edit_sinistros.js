const API_BASE_URL = 'http://localhost:3001';

function getSinistroIdFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('id');
}

function fetchSinistroById(sinistroId) {
  axios.get(`${API_BASE_URL}/api/sinistros/${sinistroId}`)
    .then((response) => {
      const sinistro = response.data;
      populateSinistroForm(sinistro); // Preenche o formulário com as informações do sinistro
    })
    .catch((error) => {
      console.error('Erro ao buscar sinistro por ID:', error);
      alert('Erro ao buscar sinistro por ID. Por favor, tente novamente mais tarde.');
    });
}

function populateSinistroForm(sinistro) {
  const dataElement = document.getElementById('data');
  const tipoElement = document.getElementById('tipo');
  const ruaElement = document.getElementById('rua');
  const numeroElement = document.getElementById('numero');
  const cidadeElement = document.getElementById('cidade');
  const bairroElement = document.getElementById('bairro');
  const estadoElement = document.getElementById('estado');
  const paisElement = document.getElementById('pais');

  dataElement.value = sinistro.data ? sinistro.data.slice(0, 10) : '';
  tipoElement.value = sinistro.tipo || '';
  ruaElement.value = sinistro.local?.rua || '';
  numeroElement.value = sinistro.local?.numero || '';
  cidadeElement.value = sinistro.local?.cidade || '';
  bairroElement.value = sinistro.local?.bairro || '';
  estadoElement.value = sinistro.local?.estado || '';
  paisElement.value = sinistro.local?.pais || '';
}

function updateSinistro() {
  const sinistroId = getSinistroIdFromUrl();
  const data = document.getElementById('data').value;
  const tipo = document.getElementById('tipo').value;
  const rua = document.getElementById('rua').value;
  const numero = document.getElementById('numero').value;
  const cidade = document.getElementById('cidade').value;
  const bairro = document.getElementById('bairro').value;
  const estado = document.getElementById('estado').value;
  const pais = document.getElementById('pais').value;
  // Monta o objeto de sinistro atualizado a ser enviado para o backend
  const sinistroAtualizado = {
    data,
    tipo,
    local: {
      rua,
      numero,
      cidade,
      bairro,
      estado,
      pais,
    },
  };

  axios.put(`${API_BASE_URL}/api/sinistros/${sinistroId}`, sinistroAtualizado)
    .then((response) => {
      // Após atualizar o sinistro com sucesso, redirecionamos o usuário para a página de Meus Sinistros
      window.location.href = '/my_sinistros.html';
    })
    .catch((error) => {
      console.error('Erro ao atualizar sinistro:', error);
      alert('Erro ao atualizar sinistro. Por favor, tente novamente mais tarde.');
    });
}

// Chama a função fetchSinistroById ao carregar a página
window.onload = function () {
  const sinistroId = getSinistroIdFromUrl();
  fetchSinistroById(sinistroId); // Busca as informações do sinistro e preenche o formulário
};

const cancelButton = document.querySelector('.cancelar');
cancelButton.addEventListener('click', () => {
  // Redireciona de volta para a página de Meus Sinistros (my_sinistros.html) ao clicar em "Cancelar"
  window.location.href = '/my_sinistros.html';
});
