# UserApp

✨ **This is a test project. Created byb Roopesh K** ✨

## Install the app locally

To start locally run `npm install.

## Start the app locally

To start locally run `npx nx run-many --target=serve`. Open your browser and navigate to http://localhost:4200/.!

## Running Unit test case

To execute front end:

```
npx nx run user—app-server:test
```

To execute shared library::

```
nx run shared:test
```

## Running E2E

To execute back end:

```
npx nx run user—app-server-e2e:e2e
```

## Dockerizing the application

Execute below two commands:

```
docker build . -t user-app-base-image:nx-base
```

```
docker-compose up
```
