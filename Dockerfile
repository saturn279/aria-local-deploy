FROM nginx:1.18-alpine AS deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY . . 
ENTRYPOINT ["nginx", "-g", "daemon off;"]
