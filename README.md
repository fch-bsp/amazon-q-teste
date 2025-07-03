# 🧪 App de Teste Local

Aplicação Node.js simples para testes locais.

## Como usar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar aplicação
```bash
npm start
```

### 3. Desenvolvimento com auto-reload
```bash
npm run dev
```

### 4. Acessar
- Interface: http://localhost:3000
- API: http://localhost:3000/api

## 🐳 Teste com Docker

### Opção 1: Script automático
```bash
./docker-run.sh
```

### Opção 2: Comandos manuais
```bash
# Build
docker build -t test-local-app .

# Run
docker run -d -p 3000:3000 --name test-app test-local-app

```

### Parar container
```bash
docker stop test-app
docker rm test-app
```

## Endpoints

- `/` - Interface web
- `/api` - Dados JSON

pkill -f "node.*app.js" || lsof -ti:3000 | xargs kill -9