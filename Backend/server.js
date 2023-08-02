const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// Configurações
app.use(cors());
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/sinistros_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => {
    console.log('Conectado ao banco de dados MongoDB');
    // Iniciar o servidor na porta especificada
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });

// Definir os modelos e esquemas do MongoDB (por exemplo, Sinistro)
const SinistroSchema = new mongoose.Schema({
  data: { type: Date, required: true },
  tipo: { type: String, required: true },
  local: {
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    estado: { type: String, required: true },
    pais: { type: String, required: true },
  },
});

const Sinistro = mongoose.model('Sinistro', SinistroSchema);

// Rotas para manipular os sinistros
// Rota para obter um sinistro por ID
app.get('/api/sinistros/:id', (req, res) => {
  const { id } = req.params;
  Sinistro.findById(id)
    .then((sinistro) => {
      if (!sinistro) {
        return res.status(404).json({ error: 'Sinistro não encontrado.' });
      }
      res.status(200).json(sinistro);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Erro ao buscar o sinistro por ID.' });
    });
});

app.get('/api/sinistros', (req, res) => {
  // Lógica para listar todos os sinistros
  Sinistro.find()
    .then((sinistros) => {
      res.status(200).json(sinistros);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Erro ao listar os sinistros.' });
    });
});

// Rota para criar um novo sinistro
app.post('/api/sinistros', (req, res) => {
  const { data, tipo, local } = req.body;
  const novoSinistro = new Sinistro({ data, tipo, local });
  novoSinistro.save()
    .then((sinistro) => {
      res.status(201).json(sinistro);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Erro ao criar um novo sinistro.' });
    });
});

app.put('/api/sinistros/:id', (req, res) => {
  // Lógica para atualizar um sinistro
  const { id } = req.params;
  const { data, tipo, local } = req.body;
  Sinistro.findByIdAndUpdate(id, { data, tipo, local }, { new: true })
    .then((sinistro) => {
      res.status(200).json(sinistro);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Erro ao atualizar o sinistro.' });
    });
});

app.delete('/api/sinistros/:id', (req, res) => {
  // Lógica para excluir um sinistro
  const { id } = req.params;
  Sinistro.findByIdAndDelete(id)
    .then((sinistro) => {
      res.status(200).json(sinistro);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Erro ao excluir o sinistro.' });
    });
});

