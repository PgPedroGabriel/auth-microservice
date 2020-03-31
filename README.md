# Authentication Microservice

## Features

* User SingUp
* User SigIn returning JWT
* User check authentication with JWT
* User authenticated can update your data
* User authenticated can delete your account
* Search user by Id

### Checks

- [ ] make sure that .env file is created
- [ ] make sure if you will use docker

### Using docker

1. To build:

``` docker-compose up --build -d ```

### Using your local machine

1. download yarn
2. yarn install
3. yarn dev

To build to production

``` yarn run build ```

the dist folder will be generated


To test

``` yarn test ```


### Deploy using a docker image

Build your own docker image, remember to change .env vars

``` docker build -f .\Dockerfile.prod -t auth-microservice-prod . ```

### Trick to vscode devolopment

Install plugins
1. ESLINT
2. Prettier
3. REST Client
4. Editorconfig
5. Docker
6. REST Client (to run requests inside vscode on requests file in root folder)


### Development pending tasks

- [x] Code coverge > 80%
- [ ] Recovery password development
- [ ] Send confirmation e-mail and recovery password with Queue with RabbitMQ
- [ ] Invalidate tokens of user when as deleted
- [ ] Add Logging traces
- [ ] Add ALARM when errors occur
- [ ] Revison of production dockerfile builder
- [ ] Create CI/CD pipelines with docker-compose to GCP Cloud Builder
- [ ] Send pod to Kubernets Cluster
