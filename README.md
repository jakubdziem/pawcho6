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
