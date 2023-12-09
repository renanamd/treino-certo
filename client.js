const http = require('http');

function calculateIMC(peso, altura) {
    const data = JSON.stringify({ peso, altura });

    const options = {
        hostname: 'localhost',
        port: 8080,
        path: '/calculateIMC',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    };

    const req = http.request(options, res => {
        res.on('data', d => {
            process.stdout.write('IMC Calculado: ' + d);
        });
    });

    req.on('error', error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

// Exemplos de uso
calculateIMC(70, 1.75);
calculateIMC(50, 1.55);
calculateIMC(140, 1.85);
calculateIMC(75, 1.90);

