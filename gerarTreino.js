const express = require('express');
const app = express();
const port = 3000;

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function gerarTreino() {
  console.log("Iniciando a função gerarTreino");

  // Lista de exercícios para cada grupo muscular
  const exercicios = {
    peito: ['Supino', 'Flexão de braço', 'Peck deck'],
    triceps: ['Tríceps pulley', 'Tríceps testa', 'Tríceps banco'],
    costas: ['Barra fixa', 'Puxada alta', 'Remada'],
    biceps: ['Rosca direta', 'Rosca martelo', 'Rosca alternada'],
    ombro: ['Desenvolvimento militar', 'Elevação lateral', 'Elevação frontal'],
    pernas: ['Agachamento', 'Leg press', 'Cadeira extensora']
  };

  // Tipos de treino
  const tiposTreino = ['A', 'B', 'C'];

  // Escolher aleatoriamente um tipo de treino
  const tipoTreino = tiposTreino[Math.floor(Math.random() * tiposTreino.length)];

  // Gerar treino com base no tipo escolhido
  let treino = [];
  switch (tipoTreino) {
    case 'A':
      treino = treino.concat(exercicios.peito, exercicios.triceps);
      break;
    case 'B':
      treino = treino.concat(exercicios.costas, exercicios.biceps, exercicios.ombro);
      break;
    case 'C':
      treino = treino.concat(exercicios.pernas);
      break;
    default:
      console.log('Tipo de treino inválido.');
  }

  // Embaralhar a ordem dos exercícios
  treino = shuffleArray(treino);

  // Exibir o treino gerado
  console.log(`Treino ${tipoTreino}: ${treino.join(', ')}`);
  console.log("Finalizando a função gerarTreino");
}

// Gerar e exibir um treino aleatório
gerarTreino();

app.get('/gerarTreino', (req, res) => {
  res.send(gerarTreino());
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
