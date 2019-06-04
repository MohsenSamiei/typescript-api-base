# Typescript api base infrastructure

## Preparing the development environment
```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```
```sh
export NVM_DIR="${XDG_CONFIG_HOME/:-$HOME/.}nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
```sh
nvm install
npm run dev
```

## Build Source code and run
```sh
npm run lint
npm run build
npm start
```

## Run application tests
```sh
npm run test
```

## Build docker image
```sh
npm run prod
```
