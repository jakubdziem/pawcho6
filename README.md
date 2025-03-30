# Stage 1

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
![abc](https://github.com/user-attachments/assets/1b9c1d87-c3da-43c0-b344-e6423c652aff)

# Stage 2

### Polecenia do budowania:
``` docker build --build-arg VERSION=1.0.2 -f Dockerfile_stage2 -t zadanie_2 . ```
### Wynik działania polecenia build:
``` 
[+] Building 7.1s (5/15)                                                                           docker:desktop-linux- => [internal] load .dockerignore                                                                                  0.0s
[+] Building 7.3s (5/15)                                                                           docker:desktop-linux
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [build-stage 1/5] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0  5.2s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8c  0.0s
 => => sha256:dd71dde834b5c203d162902e6b8994cb2309ae049a0eabc4efea161b2b5a3d0e 40.01MB / 40.01MB                   3.4s
 => => sha256:1e5a4c89cee5c0826c540ab06d4b6b491c96eda01837f430bd47f0d26702d6e3 1.26MB / 1.26MB                     0.5s
 => => sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e 7.67kB / 7.67kB                     0.0s
 => => sha256:929b04d7c782f04f615cf785488fed452b6569f87c73ff666ad553a7554f0006 1.72kB / 1.72kB                     0.0s
 => => sha256:ee77c6cd7c1886ecc802ad6cedef3a8ec1ea27d1fb96162bf03dd3710839b8da 6.18kB / 6.18kB                     0.0s
 => => sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870 3.64MB / 3.64MB                     0.5s
 => => extracting sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870                          0.2s
[+] Building 16.9s (9/15)                                                                          docker:desktop-linux
 => => resolve docker.io/library/nginx:latest@sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692bae  0.1s
 => => sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692baebc19 10.27kB / 10.27kB                   0.0s
 => => sha256:54809b2f36d0ff38e8e5362b0239779e4b75c2f19ad70ef047ed050f01506bb4 2.29kB / 2.29kB                     0.0s
 => => sha256:53a18edff8091d5faff1e42b4d885bc5f0f897873b0b8f0ace236cd5930819b0 8.58kB / 8.58kB                     0.0s
 => => sha256:6e909acdb790c5a1989d9cfc795fda5a246ad6664bb27b5c688e2b734b2c5fad 28.20MB / 28.20MB                   3.4s
[+] Building 17.1s (9/15)                                                                          docker:desktop-linux
 => => resolve docker.io/library/nginx:latest@sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692bae  0.1s
 => => sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692baebc19 10.27kB / 10.27kB                   0.0s
[+] Building 152.5s (16/16) FINISHED                                                               docker:desktop-linux
 => [internal] load build definition from Dockerfile_stage2                                                        0.1s
 => => transferring dockerfile: 1.05kB                                                                             0.0s
 => [internal] load metadata for docker.io/library/nginx:latest                                                    1.9s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                  1.9s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [build-stage 1/5] FROM docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0  7.1s
 => => resolve docker.io/library/node:18-alpine@sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8c  0.0s
 => => sha256:dd71dde834b5c203d162902e6b8994cb2309ae049a0eabc4efea161b2b5a3d0e 40.01MB / 40.01MB                   3.4s
 => => sha256:1e5a4c89cee5c0826c540ab06d4b6b491c96eda01837f430bd47f0d26702d6e3 1.26MB / 1.26MB                     0.5s
 => => sha256:8d6421d663b4c28fd3ebc498332f249011d118945588d0a35cb9bc4b8ca09d9e 7.67kB / 7.67kB                     0.0s
 => => sha256:929b04d7c782f04f615cf785488fed452b6569f87c73ff666ad553a7554f0006 1.72kB / 1.72kB                     0.0s
 => => sha256:ee77c6cd7c1886ecc802ad6cedef3a8ec1ea27d1fb96162bf03dd3710839b8da 6.18kB / 6.18kB                     0.0s
 => => sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870 3.64MB / 3.64MB                     0.5s
 => => extracting sha256:f18232174bc91741fdf3da96d85011092101a032a93a388b79e99e69c2d5c870                          0.2s
 => => sha256:25ff2da83641908f65c3a74d80409d6b1b62ccfaab220b9ea70b80df5a2e0549 446B / 446B                         0.8s
 => => extracting sha256:dd71dde834b5c203d162902e6b8994cb2309ae049a0eabc4efea161b2b5a3d0e                          3.0s
 => => extracting sha256:1e5a4c89cee5c0826c540ab06d4b6b491c96eda01837f430bd47f0d26702d6e3                          0.1s
 => => extracting sha256:25ff2da83641908f65c3a74d80409d6b1b62ccfaab220b9ea70b80df5a2e0549                          0.0s
 => [internal] load build context                                                                                  0.1s
 => => transferring context: 1.45kB                                                                                0.1s
 => [stage-1 1/5] FROM docker.io/library/nginx:latest@sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52  9.4s
 => => resolve docker.io/library/nginx:latest@sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692bae  0.1s
 => => sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692baebc19 10.27kB / 10.27kB                   0.0s
 => => sha256:54809b2f36d0ff38e8e5362b0239779e4b75c2f19ad70ef047ed050f01506bb4 2.29kB / 2.29kB                     0.0s
 => => sha256:53a18edff8091d5faff1e42b4d885bc5f0f897873b0b8f0ace236cd5930819b0 8.58kB / 8.58kB                     0.0s
 => => sha256:6e909acdb790c5a1989d9cfc795fda5a246ad6664bb27b5c688e2b734b2c5fad 28.20MB / 28.20MB                   3.4s
 => => sha256:5eaa34f5b9c2a13ef2217ceb966953dfd5c3a21a990767da307be1f57e5a1e4f 43.95MB / 43.95MB                   4.2s
 => => sha256:417c4bccf5349be7cd4ba91b1a2077ecf0ab50b3831bb071ba31f2c8bac02ed1 627B / 627B                         3.7s
 => => sha256:e7e0ca015e553ccff5686ec2153c895313675686d3f6940144ce935c07554d85 955B / 955B                         3.8s
 => => extracting sha256:6e909acdb790c5a1989d9cfc795fda5a246ad6664bb27b5c688e2b734b2c5fad                          3.2s
 => => sha256:373fe654e9845b69587105e1b82833209521db456bdc5bc26ac7260e3eb2dd52 405B / 405B                         4.0s
 => => sha256:97f5c0f51d43d499970597eef919f9170954289eff0c5d7b8f8afd73dbb57977 1.21kB / 1.21kB                     4.1s
 => => sha256:c22eb46e871ad1cda19691450312c6b5c25eb5e6836773821d8091cffb6327cc 1.40kB / 1.40kB                     4.2s
 => => extracting sha256:5eaa34f5b9c2a13ef2217ceb966953dfd5c3a21a990767da307be1f57e5a1e4f                          2.0s
 => => extracting sha256:417c4bccf5349be7cd4ba91b1a2077ecf0ab50b3831bb071ba31f2c8bac02ed1                          0.0s
 => => extracting sha256:e7e0ca015e553ccff5686ec2153c895313675686d3f6940144ce935c07554d85                          0.0s
 => => extracting sha256:373fe654e9845b69587105e1b82833209521db456bdc5bc26ac7260e3eb2dd52                          0.0s
 => => extracting sha256:97f5c0f51d43d499970597eef919f9170954289eff0c5d7b8f8afd73dbb57977                          0.0s
 => => extracting sha256:c22eb46e871ad1cda19691450312c6b5c25eb5e6836773821d8091cffb6327cc                          0.0s
 => [build-stage 2/5] WORKDIR /usr/app                                                                             0.3s
 => [build-stage 3/5] COPY package.json ./                                                                         0.1s
 => [build-stage 4/5] RUN npm install                                                                              7.6s
 => [stage-1 2/5] RUN apt update && apt install -y curl nodejs npm                                               132.0s
 => [build-stage 5/5] COPY ./index.js ./                                                                           0.0s
 => [stage-1 3/5] WORKDIR /usr/app                                                                                 0.0s
 => [stage-1 4/5] COPY --from=build-stage /usr/app /usr/app                                                        0.3s
 => [stage-1 5/5] COPY default.conf /etc/nginx/conf.d/default.conf                                                 0.0s
 => exporting to image                                                                                             8.3s
 => => exporting layers                                                                                            8.2s
 => => writing image sha256:046bad585a39fd8553aff75f06c4020c9a6080e752e12259e5dfe99047cb0b4b                       0.0s
 => => naming to docker.io/library/zadanie_2                                                                       0.0s
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
![abc2](https://github.com/user-attachments/assets/0e2d1e88-0a7e-4d18-9730-0c31d54e9a56)

