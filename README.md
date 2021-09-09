## technology to use

- backend nodejs ( express )
- frontend react nextjs
- database postgresql
- authentication ( jwt token )

## users type

- website administrator
- store administrator
- costumer and self seller

## Client Action:

- list all items ( get all items on api and listed in page)
- list item by store ( get all items by store name and listed )
- show by store
- show by Category
- List by ( latest to old , old to latest , price )
- show between ( low price - hight price)

## Public Services

- login
- register
- get all items
- get single item ( by id)
- get store items ( by store name)

## Protected Services ( routes & api request )

- Customer and seller

  - add item
  - delete item yourself
  - update item yourself
  - update information ( like password , email, location) yourself

- store admin ( just store admin can see and do this )
  - add item to store
  - delete item in store
  - change store information
- website admin ( just website admin can see and do this)
  - add admin
  - delete admin
  - update admin info
  - add store
  - delete store
  - delete costumer & sellers
  - list stores
  - list users

## Modals

- item Modal
  - get all items
  - get single item
  - get items by store
  - insert item
  - update item
  - delete item
  - get tags item
- users Modal
  - insert user
  - get user
  - get user role
  - check user password

## Routes

- auth

  - api/auth/login {POST} {PUBLIC}
  - api/auth/register {POST} {PUBLIC}
  - api/auth/logout {POST} {PROTECT}
  - api/auth/changePassword {POST} {PROTECT} user or store can change our password by old password
  - api/auth/forgetPassword {POST} {PUBLIC} user or store can forget password by email
  - api/auth/refreshToken {POST} {PROTECT} refreshing access token after expire with refresh token return new access token
  - api/auth/getUserInformation {PROTECT}

- item

  - api/items {GET} {PUBLIC} return all items
  - api/item {POST} {PROTECT} create new item costumer or store can do this
  - api/:user/items {GET} {PUBLIC} return user items
  - api/item/:id {GET} {PUBLIC} return single item
  - api/item/:id {PUT} {PROTECT} update item
  - api/item/:id {DELETE} {PROTECT} delete item

- store
  - api/stores {GET} {PUBLIC} return all stores
  - api/store/:storeName {GET} {PUBLIC} return store information by name
  - api/store/:storeName/items {GET} {PUBLIC} return store items by store name
