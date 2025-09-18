# 📧 Configuração do Formulário de Contato

## 🚀 Setup do EmailJS (Gratuito)

### 1. **Criar Conta no EmailJS**
1. Acesse: https://www.emailjs.com/
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

### 2. **Configurar Serviço de Email**
1. No dashboard, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_xxxxxxx`)

### 3. **Criar Template de Email**
1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Use este template:

```html
De: {{from_name}} ({{from_email}})
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado através do portfólio de Jocerlan Oliveira
```

4. **Anote o Template ID** (ex: `template_xxxxxxx`)

### 4. **Obter Chave Pública**
1. Vá em **"Account"** → **"General"**
2. **Anote a Public Key** (ex: `xxxxxxxxxxxxxxxx`)

### 5. **Configurar no Código**
Abra o arquivo `script.js` e substitua:

```javascript
// Linha 96: Substitua YOUR_PUBLIC_KEY
emailjs.init("SUA_CHAVE_PUBLICA_AQUI");

// Linha 130: Substitua YOUR_SERVICE_ID
'SEU_SERVICE_ID_AQUI',

// Linha 131: Substitua YOUR_TEMPLATE_ID
'SEU_TEMPLATE_ID_AQUI',
```

## 🔧 Configuração Alternativa (Formspree)

Se preferir usar Formspree (mais simples):

### 1. **Criar Conta no Formspree**
1. Acesse: https://formspree.io/
2. Crie uma conta gratuita
3. Crie um novo formulário
4. **Anote o endpoint** (ex: `https://formspree.io/f/xxxxxxx`)

### 2. **Atualizar o Código**
Substitua a função de envio no `script.js`:

```javascript
// Substituir a seção de envio de email (linhas 118-147)
try {
    const formData = new FormData(contactForm);
    formData.append('_subject', 'Contato do Portfólio - ' + formData.get('assunto'));
    
    const response = await fetch('SEU_ENDPOINT_FORMSPREE_AQUI', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });
    
    if (response.ok) {
        showMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
        contactForm.reset();
    } else {
        throw new Error('Erro ao enviar mensagem');
    }
} catch (error) {
    console.error('Erro ao enviar email:', error);
    showMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo email.', 'error');
}
```

## ✨ Funcionalidades Implementadas

### ✅ **Validação Completa**
- Nome obrigatório
- Email válido obrigatório
- Mensagem mínima de 10 caracteres
- Feedback visual para cada erro

### ✅ **UX/UI Melhorada**
- Botão com estado de loading
- Animações de feedback
- Mensagens coloridas (sucesso/erro)
- Auto-hide das mensagens

### ✅ **Responsividade**
- Funciona em todos os dispositivos
- Validação em tempo real
- Foco automático em campos com erro

## 🧪 Teste Local

1. **Configure as credenciais** do EmailJS ou Formspree
2. **Abra o portfólio** no navegador
3. **Preencha o formulário** com dados de teste
4. **Verifique se o email** chega na sua caixa de entrada

## 📧 Limites Gratuitos

### EmailJS
- **100 emails/mês** gratuitos
- **200 emails/mês** com verificação de domínio

### Formspree
- **50 envios/mês** gratuitos
- **1000 envios/mês** com verificação de domínio

## 🔒 Segurança

- ✅ Validação client-side e server-side
- ✅ Sanitização de dados
- ✅ Rate limiting (EmailJS/Formspree)
- ✅ Proteção contra spam

## 🎯 Próximos Passos

1. **Escolha um serviço** (EmailJS ou Formspree)
2. **Configure as credenciais** no código
3. **Teste o formulário** localmente
4. **Faça deploy** para produção
5. **Monitore os emails** recebidos

---

**Dica**: Recomendo começar com EmailJS por ser mais flexível e ter melhor integração com JavaScript! 🚀
