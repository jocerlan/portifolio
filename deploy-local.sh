#!/bin/bash

# Script de deploy local para testar
echo "🚀 Iniciando deploy local..."

# Verificar se estamos no diretório correto
if [ ! -f "index.html" ]; then
    echo "❌ Erro: Execute este script no diretório raiz do projeto"
    exit 1
fi

# Verificar se Docker está rodando
if ! docker info > /dev/null 2>&1; then
    echo "❌ Erro: Docker não está rodando"
    exit 1
fi

echo "📦 Construindo imagem Docker..."
docker build -t jocerlan-portfolio .

echo "🛑 Parando container existente (se houver)..."
docker stop jocerlan-portfolio 2>/dev/null || true
docker rm jocerlan-portfolio 2>/dev/null || true

echo "🚀 Iniciando novo container..."
docker run -d --name jocerlan-portfolio -p 8080:80 jocerlan-portfolio

echo "✅ Deploy local concluído!"
echo "🌐 Acesse: http://localhost:8080"
echo ""
echo "Para parar o container: docker stop jocerlan-portfolio"
echo "Para remover o container: docker rm jocerlan-portfolio"
