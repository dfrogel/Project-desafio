const API_BASE_URL = 'http://localhost:3001';

window.addEventListener('load', () => {
  const sinistrosListElement = document.getElementById('sinistrosListElement');

  // Verifica se o elemento sinistrosListElement existe antes de executar a função fetchSinistros
  if (sinistrosListElement) {
    fetchSinistros();
  }

  function fetchSinistros() {
    axios.get(`${API_BASE_URL}/api/sinistros`)
      .then((response) => {
        const sinistros = response.data;
        renderSinistros(sinistros);
      })
      .catch((error) => {
        console.error('Erro ao obter a lista de sinistros:', error);
      });
  }

  function renderSinistros(sinistros) {
    if (!sinistrosListElement) {
      return; // Se o elemento não existe, retorna sem fazer nada
    }

    sinistrosListElement.innerHTML = '';
    if (sinistros.length === 0) {
      sinistrosListElement.innerHTML = '<p>Nenhum sinistro cadastrado.</p>';
      return;
    }

    sinistros.forEach((sinistro) => {
      const sinistroElement = document.createElement('div');
      sinistroElement.classList.add('sinistro-item');
      sinistroElement.innerHTML = `
        <p><strong>Data:</strong> ${sinistro.data}</p>
        <p><strong>Tipo:</strong> ${sinistro.tipo}</p>
        <p><strong>Local:</strong> ${sinistro.local.rua}, ${sinistro.local.numero}, ${sinistro.local.bairro}, ${sinistro.local.cidade}, ${sinistro.local.estado}, ${sinistro.local.pais}</p>
        <button data-sinistro-id="${sinistro._id}" class="editar">Editar</button>
        <button data-sinistro-id="${sinistro._id}" class="excluir">Excluir</button>`;
      sinistrosListElement.appendChild(sinistroElement);
    });

    // Adiciona os eventos de clique para os botões "Editar" e "Excluir"
    const editarButtons = document.querySelectorAll('.editar');
    const excluirButtons = document.querySelectorAll('.excluir');

    editarButtons.forEach((button) => {
      button.addEventListener('click', handleEditarClick);
    });

    excluirButtons.forEach((button) => {
      button.addEventListener('click', handleExcluirClick);
    });
  }

  function handleEditarClick(event) {
    const sinistroId = event.target.dataset.sinistroId;
    // Redireciona para a página de edição passando o ID do sinistro como parâmetro na URL
    window.location.href = `/edit_sinistros.html?id=${sinistroId}`;
  }

  function handleExcluirClick(event) {
    const sinistroId = event.target.dataset.sinistroId;
    const shouldDelete = confirm('Tem certeza que deseja excluir este sinistro?');
    if (shouldDelete) {
      deleteSinistro(sinistroId);
    }
  }

  function deleteSinistro(sinistroId) {
    axios.delete(`${API_BASE_URL}/api/sinistros/${sinistroId}`)
      .then((response) => {
        alert('Sinistro excluído com sucesso!');
        // Atualiza a lista de sinistros após a exclusão
        fetchSinistros();
      })
      .catch((error) => {
        console.error('Erro ao excluir sinistro:', error);
        alert('Erro ao excluir sinistro. Por favor, tente novamente mais tarde.');
      });
  }
});
