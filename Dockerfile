FROM scratch

ADD alpine-minirootfs-3.21.3-aarch64.tar /

ARG VERSION

ENV APP_VERSION=${VERSION}

# Deklaracja katalogu roboczego
WORKDIR /usr/app

RUN apk add --no-cache nodejs npm

# # Kopiowanie niezbędnych zaleności 
COPY ./package.json ./
# Instalacja tych zaleności 
RUN npm install

# Kopiowanie kodu aplikacji do wewnątrz obrazu
COPY ./index.js ./

# Informacja o porcie wewnętrznym kontenera, 
# na ktorym "nasluchuje" aplikacja
EXPOSE 8080

# Domyśle polecenie przy starcie kontenera 
CMD ["npm", "start"]
