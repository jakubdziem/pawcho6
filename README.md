# Stage 1

### Polecenia do budowania:
``` docker build -f Dockerfile -t zadanie_1 . ```
### Wynik działania polecenia build:
``` [+] Building 0.2s (10/10) FINISHED                                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 589B                                                                               0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 977B                                                                                  0.0s
 => CACHED [1/6] ADD alpine-minirootfs-3.21.3-aarch64.tar /                                                        0.0s
 => CACHED [2/6] WORKDIR /usr/app                                                                                  0.0s
 => CACHED [3/6] RUN apk add --no-cache nodejs npm                                                                 0.0s
 => CACHED [4/6] COPY ./package.json ./                                                                            0.0s
 => CACHED [5/6] RUN npm install                                                                                   0.0s
 => CACHED [6/6] COPY ./index.js ./                                                                                0.0s
 => exporting to image                                                                                             0.0s
 => => exporting layers                                                                                            0.0s
 => => writing image sha256:c9aee59302b83b4f7a6d5d2741e9dcc9fd56fca6b5d90e7e8a9b9c4dfa8b4832                       0.0s
 => => naming to docker.io/library/zadanie_1                                                                       0.0s
``` 
### Polecenie do uruchomienia:
``` docker run -d -e VERSION=1.0.0 -p 8080:8080 zadanie_1 ```
### Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji
``` docker ps ```
```
CONTAINER ID   IMAGE       COMMAND       CREATED         STATUS         PORTS                    NAMES
4ea08dee5330   zadanie_1   "npm start"   3 seconds ago   Up 2 seconds   0.0.0.0:8080->8080/tcp   clever_pike
```
### Zrzut ekranu potwierdzający wymaganą funkcjonalność.
![image](https://github.com/user-attachments/assets/3f3a2be0-d310-4cbd-9123-93462df811a1)

# Stage 2

### Polecenia do budowania:
``` docker build -f Dockerfile -t zadanie_2 . ```
### Wynik działania polecenia build:
``` 
[+] Building 1.5s (16/16) FINISHED                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                                               0.0s
 => => transferring dockerfile: 1.00kB                                                             0.0s
 => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 2)                     0.0s
 => [internal] load metadata for docker.io/library/nginx:latest                                    0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                  1.4s
 => [internal] load .dockerignore                                                                  0.0s
 => => transferring context: 2B                                                                    0.0s
 => [build-stage 1/5] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f24  0.0s
 => [internal] load build context                                                                  0.0s
 => => transferring context: 93B                                                                   0.0s
 => [stage-1 1/5] FROM docker.io/library/nginx:latest                                              0.0s
 => CACHED [stage-1 2/5] RUN apt update && apt install -y curl nodejs npm                          0.0s
 => CACHED [stage-1 3/5] WORKDIR /usr/app                                                          0.0s
 => CACHED [build-stage 2/5] WORKDIR /usr/app                                                      0.0s
 => CACHED [build-stage 3/5] COPY package.json ./                                                  0.0s
 => CACHED [build-stage 4/5] RUN npm install                                                       0.0s
 => CACHED [build-stage 5/5] COPY ./index.js ./                                                    0.0s
 => CACHED [stage-1 4/5] COPY --from=build-stage /usr/app /usr/app                                 0.0s
 => CACHED [stage-1 5/5] COPY default.conf /etc/nginx/conf.d/default.conf                          0.0s
 => exporting to image                                                                             0.0s
 => => exporting layers                                                                            0.0s
 => => writing image sha256:d77684b82caaa4073a83c54b8b3b0f96d4cd9277bd01f4a1580f6b6015f202c1       0.0s
 => => naming to docker.io/library/zadanie_2                                                       0.0s
``` 
### Polecenie do uruchomienia:
``` docker run -d -e VERSION=1.0.0 -p 80:80 zadanie_2 ```
### Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji
``` docker ps ```
```
CONTAINER ID   IMAGE       COMMAND                  CREATED          STATUS                    PORTS                          NAMES
a2e73fec8dfe   zadanie_2   "/docker-entrypoint.…"   21 seconds ago   Up 20 seconds (healthy)   0.0.0.0:80->80/tcp, 8080/tcp   jovial_lovelace
```
### Zrzut ekranu potwierdzający wymaganą funkcjonalność.
![image](https://github.com/user-attachments/assets/9529c7a2-fe08-4081-973a-a0ace5fed558)

