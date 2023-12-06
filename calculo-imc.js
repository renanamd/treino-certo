/*

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 5000; // Escolha a porta desejada

app.use(bodyParser.json());

app.get('/calcularimc', async function (req, res) {
  // Função para calcular o IMC
  function calcularIMC(peso, altura) {
    return peso / (altura ** 2);
  }

  // URL da sua API de alunos
  const apiUrl = 'https://treino-certo-production.up.railway.app/alunos';

  try {
    // Fazendo uma solicitação GET para obter dados dos alunos
    const response = await axios.get(apiUrl);

    // Extraindo os dados dos alunos da resposta
    const alunos = response.data;

    // Iterando sobre os alunos e calculando o IMC
    const resultadosIMC = alunos.map(aluno => {
      const pesoAluno = Number(aluno.peso);
      const alturaAluno = Number(aluno.altura);

      const imcAluno = calcularIMC(pesoAluno, alturaAluno);

      return `${aluno.nome}: IMC = ${imcAluno.toFixed(2) + '<br>' } `;
    });

    res.send(resultadosIMC.join('\n'));
  } catch (error) {
    res.status(500).send(`Erro ao obter dados dos alunos: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

*/
