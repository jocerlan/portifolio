# Imagem base Nginx
FROM nginx:alpine

# Remover configurações padrão
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivos do site para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Expor a porta padrão
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
