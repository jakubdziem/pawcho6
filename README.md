### Tworzenie repozytorium z użyciem folderu z poprzedniego laboratorium
![1](https://github.com/user-attachments/assets/24dc6dc5-cc23-4105-a922-eed2160d414b)

### Konfiguracja pliku config.json dla BuildKit
![dodane buildkit do pliku config json w docker](https://github.com/user-attachments/assets/edf58587-81bc-4f5f-8d63-33249385008b)

### Komenda do włączenia BuildKit w Dockerze
``` set DOCKER_BUILDKIT=1 ```

### Logowanie do GitHub Container Registry (ghcr)
![logowanie do ghcr](https://github.com/user-attachments/assets/5bbcde5d-a681-47a4-bb62-88a1224db9a7)

### Polecenia do budowania:
``` docker build --secret id=ssh_key,src=id_rsa.txt -f Dockerfile_stage2 -t ghcr.io/jakubdziem/pawcho6:lab6 . ```
### Wynik działania polecenia build:
```    
[+] Building 216.3s (18/18) FINISHED                                                                                                                                                          docker:desktop-linux
 => [internal] load build definition from Dockerfile_stage2                                                                                                                                                   0.0s
 => => transferring dockerfile: 1.47kB                                                                                                                                                                        0.0s
 => resolve image config for docker-image://docker.io/docker/dockerfile:1.4                                                                                                                                   1.0s
 => CACHED docker-image://docker.io/docker/dockerfile:1.4@sha256:9ba7531bd80fb0a858632727cf7a112fbfd19b17e94c4e84ced81e24ef1a0dbc                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [internal] load metadata for docker.io/library/nginx:latest                                                                                                                                               0.6s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                                                             0.7s
 => [internal] load build context                                                                                                                                                                             0.0s
 => => transferring context: 34B                                                                                                                                                                              0.0s
 => [build-stage 1/5] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e                                                                           0.0s
 => CACHED [stage-1 1/5] FROM docker.io/library/nginx:latest@sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692baebc19                                                                          0.0s
 => CACHED [build-stage 2/5] RUN apk add --no-cache openssh git                                                                                                                                               0.0s
 => [stage-1 2/5] RUN apt update && apt install -y curl nodejs npm                                                                                                                                          205.3s
 => [build-stage 3/5] RUN --mount=type=secret,id=ssh_key     mkdir -p ~/.ssh &&     chmod 700 ~/.ssh &&     cp /run/secrets/ssh_key ~/.ssh/id_rsa &&     chmod 600 ~/.ssh/id_rsa &&     ssh-keyscan github.c  5.8s
 => [build-stage 4/5] WORKDIR /usr/app                                                                                                                                                                        0.0s
 => [build-stage 5/5] RUN npm install                                                                                                                                                                        11.6s
 => [stage-1 3/5] WORKDIR /usr/app                                                                                                                                                                            0.0s
 => [stage-1 4/5] COPY --from=build-stage /usr/app /usr/app                                                                                                                                                   0.3s
 => [stage-1 5/5] COPY default.conf /etc/nginx/conf.d/default.conf                                                                                                                                            0.0s
 => exporting to image                                                                                                                                                                                        8.7s
 => => exporting layers                                                                                                                                                                                       8.7s
 => => writing image sha256:63243a6b36a1497a65a93a83aeb6d483fcc583cd054861a50cdd430242ab267a                                                                                                                  0.0s
 => => naming to ghcr.io/jakubdziem/pawcho6:lab6                                                                                                                                                              0.0s
``` 
### Polecenia do pushu do ghcr:
``` docker push ghcr.io/jakubdziem/pawcho6:lab6 ```
### Wynik działania polecenia push:
```
The push refers to repository [ghcr.io/jakubdziem/pawcho6]
0a2262ba8620: Pushed
48e5f779ee85: Pushed
e563b64e82fa: Pushed
7d4f206edc24: Pushed
03d9365bc5dc: Pushed
d26dc06ef910: Pushed
aa82c57cd9fe: Pushed
d98dcc720ae0: Pushed
ad2f08e39a9d: Pushed
135f786ad046: Pushed
1287fbecdfcc: Pushed
lab6: digest: sha256:5c15db0cb68b843c1265af4130b6d91476a1a0b4a5ac64cb45deb660202319ef size: 2617
```
### Polecenie do uruchomienia:
``` docker run -d -p 80:80 ghcr.io/jakubdziem/pawcho6:lab6 ```
### Polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji
``` docker ps ```
```
CONTAINER ID   IMAGE                             COMMAND                  CREATED          STATUS                    PORTS                          NAMES
91ba4729d4f9   ghcr.io/jakubdziem/pawcho6:lab6   "/docker-entrypoint.…"   16 seconds ago   Up 14 seconds (healthy)   0.0.0.0:80->80/tcp, 8080/tcp   infallible_williamson
```
### Zrzut ekranu potwierdzający wymaganą funkcjonalność.
![działanie](https://github.com/user-attachments/assets/0f2502bc-eac4-4c5d-a936-042b2cd0e04a)

### Obraz dostępny na repozytorium git jest widoczny w zakładce packages.
