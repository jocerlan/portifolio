# Imagem base Nginx
FROM nginx:alpine

# Remover configurações padrão
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivos do site para a pasta padrão do Nginx
COPY . /usr/share/nginx/html

# Configurar Nginx para SPA
RUN echo 'server { \
    listen 80; \
    server_name _; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 1y; \
        add_header Cache-Control "public, immutable"; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expor a porta padrão
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
