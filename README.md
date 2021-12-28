## Setup Project

install knex globally

```bash
  npm install -g knex
```

install packages

```bash
  yarn add
  or
  npm install
```

run database migrations

```bash
  yarn run latest
```

rollback database migrations

```bash
  yarn run rollback
```

run server

```bash
  yarn start
```

## custom module paths using [module-alias](https://github.com/ilearnio/module-alias)

Example

```javascript
const router = require("@/routers");
```
