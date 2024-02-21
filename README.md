# Challenge MercadoLibre - Frontend

## Local

Requirements: Node >= 21

#### Install

```
npm install
```

#### Lint

```
npm run lint
```

#### Build

```
npm run build
```

#### Test

```
npm run test
```

#### Development

```
npm run dev
```

#### API docs

```
http://localhost:5000/api-docs
```

&nbsp;
&nbsp;

## Docker

Requirements: Docker

#### Build

```sh
docker build -t meli-frontend-image .
```

#### Run

```sh
docker run --name meli-frontend-container -p 3000:3000 meli-frontend-image
```

#### Visit

```
http://localhost:3000/
```
