const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.json());

function calcularTreino(imc) {  
    if (imc > 25) {
        return 'Treino A = Perda de peso';
    } else if (imc < 18.5) {
        return 'Treino C = Hipertrofia ou Saúde';
    } else {
        return 'Treino B = Hipertrofia';
    }
}



app.post('/calcular_imc', (req, res) => {
    try {
        const { imc } = req.body;
        const tipoTreino = calcularTreino(imc);

        // Enviar para o servidor no Railway
        enviarParaServidor(tipoTreino);

        res.json({ tipoTreino });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

function enviarParaServidor(tipoTreino) {
    const urlRailway = 'PEGAR URL RAILWAY';

    // Dados a serem enviados para o servidor do Railway
    const dados = { tipoTreino };

    // Enviar a requisição POST para o servidor do Railway
    axios.post(urlRailway, dados)
        .then(response => {
            console.log('Enviado para o servidor do Railway:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar para o servidor do Railway:', error.message);
        });
}

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


//startserver node app.js
// http://localhost:6000/

