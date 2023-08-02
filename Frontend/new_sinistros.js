function createSinistro() {
    const data = document.getElementById('data').value;
    const tipo = document.getElementById('tipo').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const estado = document.getElementById('estado').value;
    const pais = document.getElementById('pais').value;
  
    // Verifica se os campos obrigatórios estão preenchidos
    if (!data || !tipo || !rua || !numero || !cidade || !bairro || !estado || !pais) {
        alert('Por favor, preencha todos os campos obrigatórios (*).');
        return false; // Impede o envio do formulário
    }
  
    // Monta o objeto de sinistro a ser enviado para o backend
    const novoSinistro = {
        data: data,
        tipo: tipo,
        local: {
            rua: rua,
            numero: numero,
            cidade: cidade,
            bairro: bairro,
            estado: estado,
            pais: pais,
        },
    };
  
    // Aqui usamos o Axios para fazer uma requisição POST para o backend.
    axios.post('http://localhost:3001/api/sinistros', novoSinistro)
        .then((response) => {
            // Após criar o sinistro com sucesso, podemos redirecionar o usuário para a página de Meus Sinistros
            window.location.replace('/my_sinistros.html');
        })
        .catch((error) => {
            console.error('Erro ao criar sinistro:', error);
            alert('Erro ao criar sinistro. Por favor, tente novamente mais tarde.');
        });
    
    return false; // Impede o envio do formulário por padrão (caso o Axios não retorne a tempo)
}

function cancelarFormulario() {
    window.location.href = '/index.html'; // Redireciona para a página inicial (index.html)
 }

  