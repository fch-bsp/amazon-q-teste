#!/bin/bash

echo "🐳 Testando aplicação no Docker..."

# Build da imagem
echo "📦 Construindo imagem..."
docker build -t test-local-app .

# Rodar container
echo "🚀 Iniciando container..."
docker run -p 3000:3000 --name test-app test-local-app