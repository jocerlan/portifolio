# 🚀 Guia de Deploy

## Problemas Corrigidos

### ❌ **Problema Original**
O script de deploy estava tentando acessar um diretório chamado `meu-site` que não existia, causando o erro:
```bash
bash: line 21: cd: meu-site: No such file or directory
```

### ✅ **Solução Implementada**
1. **Corrigido o nome do diretório** de `meu-site` para `portifolio` (nome real do repositório)
2. **Melhorado o fluxo de atualização** do repositório Git
3. **Adicionado configuração Nginx** otimizada para SPA
4. **Criado script de teste local** para validar antes do deploy

## 📁 Arquivos Modificados

### `.github/workflows/deploy.yml`
- ✅ Corrigido nome do diretório: `meu-site` → `portifolio`
- ✅ Melhorado fluxo de atualização Git
- ✅ Adicionado mensagem de sucesso

### `dockerfile`
- ✅ Adicionada configuração Nginx para SPA
- ✅ Configurado cache para assets estáticos
- ✅ Otimizado para Single Page Application

### Novos Arquivos
- ✅ `deploy-local.sh` - Script para testar localmente
- ✅ `.dockerignore` - Otimizar build do Docker
- ✅ `DEPLOY.md` - Este guia

## 🧪 Teste Local

Antes de fazer o deploy, teste localmente:

```bash
# Tornar o script executável
chmod +x deploy-local.sh

# Executar deploy local
./deploy-local.sh

# Acessar no navegador
# http://localhost:8080
```

## 🚀 Deploy Automático

O deploy será executado automaticamente quando você fizer push para a branch `main`:

1. **GitHub Actions** detecta o push
2. **Conecta no servidor** via SSH
3. **Atualiza o repositório** Git
4. **Reconstrói o container** Docker
5. **Reinicia o serviço** na porta 80

## 🔧 Configuração do Servidor

Certifique-se de que o servidor tem:

- ✅ **Docker** instalado e rodando
- ✅ **Git** configurado
- ✅ **Usuário `jocerlan`** com permissões sudo
- ✅ **Porta 80** liberada no firewall

## 📋 Secrets Necessários

Configure no GitHub Secrets:

- `EC2_SSH_KEY` - Chave privada SSH
- `EC2_HOST` - IP ou domínio do servidor

## 🐛 Troubleshooting

### Erro de Conexão SSH
```bash
# Testar conexão manualmente
ssh -i ~/.ssh/id_rsa jocerlan@SEU_IP
```

### Erro de Docker
```bash
# Verificar se Docker está rodando
sudo systemctl status docker

# Verificar containers
sudo docker ps -a
```

### Erro de Permissões
```bash
# Adicionar usuário ao grupo docker
sudo usermod -aG docker jocerlan
```

## ✅ Status do Deploy

- [x] Script de deploy corrigido
- [x] Dockerfile otimizado
- [x] Teste local funcionando
- [x] Deploy automático configurado
- [x] Documentação criada

---

**Próximo passo**: Faça commit e push das alterações para testar o deploy automático! 🚀
