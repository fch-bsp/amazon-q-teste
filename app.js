const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Teste Local</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f2f5; }
            .container { max-width: 800px; margin: 0 auto; }
            .card { background: white; border-radius: 10px; padding: 20px; margin: 20px 0; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            h1 { color: #333; text-align: center; }
            .btn { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin: 5px; }
            .btn:hover { background: #0056b3; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="card">
                <h1>🧪 App de Teste Local v1</h1>
                <p>Servidor rodando em: <strong>http://localhost:${PORT}</strong></p>
                <p>Hora atual: <strong>${new Date().toLocaleString('pt-BR')}</strong></p>
                <button class="btn" onclick="location.reload()">🔄 Recarregar</button>
                <button class="btn" onclick="window.open('/api', '_blank')">📊 Ver API</button>
            </div>
        </div>
    </body>
    </html>
  `);
});

app.get('/api', (req, res) => {
  res.json({
    message: 'API funcionando!',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: 'local'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});