- db connection setting ✔
- ts 전환 ✔
- graphql적용

## typegraphql version issue

- typegraphql이랑 버젼 맞춰줘야함 이번에는 15.3버젼을 맞춰준다

## next connect

- ref: https://www.npmjs.com/package/next-connect

## graphql settins

1. apollo server setup
   https://www.npmjs.com/package/apollo-server-micro

```
$ npm install micro apollo-server-micro graphql
```

2. typegraphql

- ref: https://typegraphql.com/

```
$ npm i class-validator type-graphql reflect-metadata
```

3. graphql-codegen
   - ref: https://www.graphql-code-generator.com/docs/getting-started/installation
   - ref: https://www.graphql-code-generator.com/docs/guides/front-end-typescript-only

```
$ npm i @graphql-codegen/cli @graphql-codegen/typescript -D
$ npm i @graphql-codegen/typescript-operations
$ npm i @graphql-codegen/typescript-graphql-request -D
$ npm i @graphql-codegen/typescript-react-query -D
```

4. generate type for frontside(about graphql)

서버 실행시킨 상태에서
yarn generate

5. react query 적용

```
$ yarn add react-query graphql-request
```

6. mantine ui 적용

- ref: https://mantine.dev/

```
yarn add @mantine/core @mantine/hooks @mantine/form  @mantine/next

yarn add tabler-icons-react
```
