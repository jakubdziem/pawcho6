# Budowa aplikacji Node.js
FROM node:18-alpine as build-stage

# Ustawienie katalogu roboczego
WORKDIR /usr/app

# Kopiowanie package.json i instalacja zależności
COPY package.json ./
RUN npm install

# Kopiowanie pliku aplikacji
COPY ./index.js ./

# Etap 2: Konfiguracja serwera Nginx + Node.js
FROM nginx:latest

# Instalacja narzędzi do obsługi Node.js
RUN apt update && apt install -y curl nodejs npm

# Ustawienie katalogu roboczego
WORKDIR /usr/app

# Kopiowanie aplikacji Node.js
COPY --from=build-stage /usr/app /usr/app

# Kopiowanie konfiguracji Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Eksponowanie portów
EXPOSE 80 8080

# Dodanie HEALTHCHECK do sprawdzania dostępności serwisów
HEALTHCHECK --interval=10s --timeout=5s\
    CMD curl -f http://localhost:80 || exit 1

# Uruchomienie aplikacji Node.js oraz serwera Nginx
CMD ["sh", "-c", "node /usr/app/index.js & nginx -g 'daemon off;'"]
