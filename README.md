<div align="center">

# 🧪 Test Local App

### *Uma aplicação Node.js moderna para desenvolvimento e testes locais*

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18+-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

*Criado com ❤️ usando **Amazon Q Developer***

</div>

## 📋 Índice

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Começando](#-começando)
- [🐳 Docker](#-docker)
- [📡 API Endpoints](#-api-endpoints)
- [🛠️ Tecnologias](#️-tecnologias)
- [📸 Screenshots](#-screenshots)
- [🤝 Contribuindo](#-contribuindo)
- [📄 Licença](#-licença)

## 🎯 Sobre o Projeto

O **Test Local App** é uma aplicação web simples e elegante construída com Node.js e Express, projetada para facilitar o desenvolvimento e testes locais. Com uma interface moderna e responsiva, oferece tanto uma experiência visual agradável quanto uma API RESTful funcional.

### 🎨 Características Principais

- 🎨 **Interface moderna** com design responsivo
- ⚡ **Performance otimizada** com Express.js
- 🐳 **Docker ready** para containerização
- 🔄 **Hot reload** para desenvolvimento
- 📊 **API RESTful** com dados em tempo real
- 🛡️ **Código limpo** e bem documentado

## ✨ Funcionalidades

- ✅ Servidor web com interface HTML moderna
- ✅ API REST com dados em tempo real
- ✅ Suporte completo ao Docker
- ✅ Scripts automatizados para desenvolvimento
- ✅ Monitoramento de uptime e timestamp
- ✅ Design responsivo e acessível

## 🚀 Começando

### 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente vem com Node.js)
- [Docker](https://www.docker.com/) (opcional, para containerização)

### 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/fch-bsp/amazon-q-teste.git
   cd amazon-q-teste
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute a aplicação**
   ```bash
   npm start
   ```

4. **Acesse no navegador**
   ```
   http://localhost:3000
   ```

### 🔥 Modo Desenvolvimento

Para desenvolvimento com auto-reload:

```bash
npm run dev
```

## 🐳 Docker

### 🚀 Execução Rápida

Use o script automatizado:

```bash
chmod +x docker-run.sh
./docker-run.sh
```

### 🛠️ Comandos Manuais

**Build da imagem:**
```bash
docker build -t test-local-app .
```

**Executar container:**
```bash
docker run -d -p 3000:3000 --name test-app test-local-app
```

**Parar e remover:**
```bash
docker stop test-app
docker rm test-app
```

## 📡 API Endpoints

| Método | Endpoint | Descrição | Resposta |
|--------|----------|-----------|----------|
| `GET` | `/` | Interface web principal | HTML |
| `GET` | `/api` | Dados da aplicação em JSON | JSON |

### 📊 Exemplo de Resposta da API

```json
{
  "message": "API funcionando!",
  "timestamp": "2025-07-03T23:00:00.000Z",
  "uptime": 3600.123,
  "environment": "local"
}
```

## 🛠️ Tecnologias

<div align="center">

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white) | 18+ | Runtime JavaScript |
| ![Express](https://img.shields.io/badge/Express-4.18+-000000?style=flat-square&logo=express&logoColor=white) | 4.18+ | Framework web |
| ![Docker](https://img.shields.io/badge/Docker-Latest-2496ED?style=flat-square&logo=docker&logoColor=white) | Latest | Containerização |
| ![HTML5](https://img.shields.io/badge/HTML5-Latest-E34F26?style=flat-square&logo=html5&logoColor=white) | 5 | Estrutura web |
| ![CSS3](https://img.shields.io/badge/CSS3-Latest-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Estilização |

</div>

## 📸 Screenshots

<div align="center">

### 🖥️ Interface Principal
*Interface moderna e responsiva com design clean*

### 📊 API Response
*Dados estruturados em JSON com informações em tempo real*

</div>

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. 🍴 Faça um fork do projeto
2. 🌿 Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push para a branch (`git push origin feature/AmazingFeature`)
5. 🔄 Abra um Pull Request

### 📝 Padrões de Commit

- ✨ `feat:` nova funcionalidade
- 🐛 `fix:` correção de bug
- 📚 `docs:` documentação
- 🎨 `style:` formatação
- ♻️ `refactor:` refatoração
- ✅ `test:` testes
- 🔧 `chore:` manutenção

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

### 🌟 Se este projeto foi útil, considere dar uma estrela!

**Desenvolvido com 💙 por [Fernando Horas](https://github.com/fch-bsp)**

*Powered by Amazon Q Developer* 🤖

[![GitHub](https://img.shields.io/badge/GitHub-fch--bsp-181717?style=for-the-badge&logo=github)](https://github.com/fch-bsp)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/fernando-horas)

</div>