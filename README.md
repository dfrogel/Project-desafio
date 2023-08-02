# Sinistros App

## Descrição do Projeto
Este é um projeto de aplicação web para gerenciar sinistros, onde é possível criar, editar, excluir e visualizar os detalhes de sinistros ocorridos. A aplicação possui um backend que utiliza Node.js e Express, e uma base de dados MongoDB para armazenar os sinistros.

## Ferramentas Utilizadas
- Node.js
- Express.js
- MongoDB
- Axios (para requisições HTTP no frontend)
- HTML, CSS e JavaScript (para o frontend)

## Linguagem no Backend
O backend foi desenvolvido utilizando a linguagem JavaScript com o runtime Node.js e o framework Express.js para criar as rotas e lógicas da aplicação.

## Base de Dados
O sistema utiliza o banco de dados MongoDB para armazenar os sinistros. O MongoDB é um banco de dados NoSQL, orientado a documentos, que permite uma fácil manipulação de dados em formato JSON.

## Passo a Passo para Rodar o Projeto
Siga os passos abaixo para rodar o projeto em sua máquina local:

### Pré-requisitos
- Certifique-se de ter o **Node.js** instalado em sua máquina. Caso não tenha, você pode baixá-lo em: https://nodejs.org/
- É necessário ter o **MongoDB** instalado. Você pode fazer o download em: https://www.mongodb.com/try/download/community
- É necessário estar na porta **:8080** no server FRONT END e **:3031** no server BACK END

### Passos
1. Clone este repositório em sua máquina local:
```
git clone https://github.com/dfrogel/Project-desafio.git
```

2. Acesse a pasta do projeto:
```
cd Project-desafio
```

3. Instale as dependências tanto no backend quanto no frontend:
```
cd Backend
npm install

cd ../Frontend
npm install
```

4. Inicie o servidor backend:
```
cd Backend
npm start
```

O servidor será iniciado e estará executando em **http://localhost:3001**

5. Em outro terminal, inicie o servidor frontend:
```
cd Frontend
npm start
```
O servidor frontend será iniciado e estará acessível em **http://localhost:8080**

Acesse a aplicação em seu navegador:

Abra o navegador e acesse **http://localhost:8080**

Agora você poderá utilizar a aplicação para criar, editar, excluir e visualizar os sinistros!

### Recomendação: Utilizando o live-server
Para executar o servidor frontend de forma mais eficiente e com recarregamento automático, recomendo o uso do live-server. O live-server é uma ferramenta simples que permite visualizar a aplicação no navegador e recarregar automaticamente a página sempre que houver alterações nos arquivos.

Certifique-se de tê-lo instalado globalmente em sua máquina, utilizando o seguinte comando:

```
npm install -g live-server
```

Abra o terminal na pasta do projeto (certifique-se de estar na pasta "Frontend").

Execute o seguinte comando:
```
live-server
```
O servidor será iniciado e estará acessível em http://localhost:8080.

Abra o navegador e acesse http://localhost:8080 para visualizar a aplicação.

Com o live-server, você poderá aproveitar uma experiência de desenvolvimento mais dinâmica ao realizar alterações no frontend do projeto.

## Interface de Usuário (UI)
A interface de usuário foi projetada e prototipada utilizando a ferramenta de design Figma. Antes de iniciar a implementação, foram criados wireframes e mockups interativos para visualizar a aparência e a experiência do usuário. O Figma permitiu simular a navegação pela aplicação e testar a usabilidade antes do desenvolvimento.

Para acessar o projeto da interface de usuário no Figma, clique [aqui](https://www.figma.com/file/jAgO1NQFYdHzVWxdxdl7t9/Untitled?type=design&node-id=5%3A200&mode=design&t=znx016G4J7azLu4r-1
).

O design da interface de usuário é uma parte fundamental do processo de desenvolvimento, e o uso do Figma facilitou a colaboração e o alinhamento das ideias entre desenvolvimento e design.

## Observações
Certifique-se de ter o MongoDB rodando em sua máquina local para que o backend possa se conectar à base de dados.
O projeto foi desenvolvido para fins de estudo e aprendizado, e é recomendado como uma base para projetos maiores e mais complexos.
