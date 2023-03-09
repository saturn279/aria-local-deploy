FROM nginx:1.18-alpine AS deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./public .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
