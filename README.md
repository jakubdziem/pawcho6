# Stage 1

Początkowo cały proces budowy aplikacji i konfiguracji serwera był zawarty w jednym pliku Dockerfile. Dopiero po wykonaniu zadania podzieliłem ten plik na Dockerfile_stage1 i Dockerfile_stage2.

### Polecenia do budowania:
``` docker build --build-arg VERSION=1.0.1 -f Dockerfile_stage1 -t zadanie_1 . ```
### Wynik działania polecenia build:
```    
[+] Building 0.3s (10/10) FINISHED                                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile_stage1                                                        0.0s
 => => transferring dockerfile: 594B                                                                               0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 981B                                                                                  0.0s
 => CACHED [1/6] ADD alpine-minirootfs-3.21.3-aarch64.tar /                                                        0.0s
 => CACHED [2/6] WORKDIR /usr/app                                                                                  0.0s
 => CACHED [3/6] RUN apk add --no-cache nodejs npm                                                                 0.0s
 => CACHED [4/6] COPY ./package.json ./                                                                            0.0s
 => CACHED [5/6] RUN npm install                                                                                   0.0s
 => [6/6] COPY ./index.js ./                                                                                       0.0s
 => exporting to image                                                                                             0.1s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:a4334fc12a5f05e87c18c4893e6d5899a63459b984a2f20b5303f49945122391                       0.0s
 => => naming to docker.io/library/zadanie_1                                                                       0.0s
``` 
### Polecenie do uruchomienia:
``` docker run -d --rm -p 8080:8080 zadanie_1 ```
### Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji
``` docker ps ```
```
CONTAINER ID   IMAGE       COMMAND       CREATED         STATUS         PORTS                    NAMES
d60ea40b9fab   zadanie_1   "npm start"   3 seconds ago   Up 2 seconds   0.0.0.0:8080->8080/tcp   epic_mclean
```
### Zrzut ekranu potwierdzający wymaganą funkcjonalność.


# Stage 2

### Polecenia do budowania:
``` docker build --build-arg VERSION=1.0.2 -f Dockerfile_stage2 -t zadanie_2 . ```
### Wynik działania polecenia build:
``` 

``` 
### Polecenie do uruchomienia:
``` docker run -d --rm -p 80:80 zadanie_2 ```
### Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji
``` docker ps ```
```
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS                    PORTS                          NAMES
007f4aca1db2   zadanie_2   "/docker-entrypoint.…"   44 seconds ago   Up 44 seconds (healthy)   0.0.0.0:80->80/tcp, 8080/tcp   sleepy_mirzakhani
```
### Zrzut ekranu potwierdzający wymaganą funkcjonalność.


