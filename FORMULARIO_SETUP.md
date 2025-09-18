# 📧 Configuração do Formulário de Contato

## 🚀 Setup Rápido (5 minutos)

### 1. **Criar Conta no Formspree**
1. Acesse: https://formspree.io/
2. Clique em **"Get Started"** 
3. Crie uma conta gratuita (50 envios/mês)
4. Confirme seu email

### 2. **Criar Novo Formulário**
1. No dashboard, clique em **"New Form"**
2. Escolha **"I want to receive emails"**
3. Digite seu email: `jocerlan.oliveira.dev@gmail.com`
4. Clique em **"Create Form"**

### 3. **Obter ID do Formulário**
1. Após criar, você verá uma URL como:
   ```
   https://formspree.io/f/xpzgkqwe
   ```
2. **Copie apenas a parte final**: `xpzgkqwe`

### 4. **Configurar no Código**
Abra o arquivo `index.html` e substitua:

```html
<!-- Linha 336: Substitua YOUR_FORM_ID -->
<form class="contact-form" id="contact-form" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
```

**Exemplo:**
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/xpzgkqwe" method="POST">
```

## ✅ **Pronto!**

Após fazer essa única alteração:
- ✅ Formulário funcionará automaticamente
- ✅ Emails chegarão no seu Gmail
- ✅ Validação completa incluída
- ✅ Feedback visual para o usuário

## 🧪 **Teste**

1. **Abra o portfólio** no navegador
2. **Preencha o formulário** com dados de teste
3. **Envie a mensagem**
4. **Verifique seu Gmail** - o email chegará em segundos!

## 📧 **Como Funciona**

1. **Usuário preenche** o formulário
2. **JavaScript valida** os dados
3. **Formspree recebe** os dados
4. **Email é enviado** para você automaticamente
5. **Usuário recebe** confirmação de sucesso

## 🎯 **Vantagens do Formspree**

- ✅ **Gratuito** até 50 envios/mês
- ✅ **Sem backend** necessário
- ✅ **Anti-spam** automático
- ✅ **Fácil configuração** (1 linha de código)
- ✅ **Confiável** e rápido

## 🔧 **Personalização (Opcional)**

### Alterar Assunto dos Emails
No arquivo `script.js`, linha 115:
```javascript
formData.append('_subject', 'Contato do Portfólio - ' + (formData.get('assunto') || 'Nova mensagem'));
```

### Adicionar Campos
No HTML, adicione novos campos:
```html
<div class="form-group">
    <label for="telefone">Telefone</label>
    <input type="tel" id="telefone" name="telefone">
</div>
```

## 🚨 **Importante**

- **Substitua `YOUR_FORM_ID`** pelo ID real do seu formulário
- **Teste sempre** após fazer a alteração
- **Verifique spam** se não receber emails

---

**Tempo total de configuração: 5 minutos** ⏱️
