FROM nginx:1.18-alpine AS deploy
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
RUN ls
ENTRYPOINT ["nginx", "-g", "daemon off;"]
