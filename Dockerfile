
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # emits /app/dist with index.html + copied /public files

# ---- Serve ----
FROM httpd:2.4-alpine
RUN echo "IncludeOptional conf/extra/spa.conf" >> /usr/local/apache2/conf/httpd.conf
COPY --from=build /app/dist/ /usr/local/apache2/htdocs/
COPY spa.conf /usr/local/apache2/conf/extra/spa.conf
EXPOSE 80
