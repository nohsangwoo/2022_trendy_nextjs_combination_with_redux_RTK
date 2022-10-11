- db connection setting ✔
- ts 전환 ✔
- graphql적용

## typegraphql version issue

- typegraphql이랑 버젼 맞춰줘야함 이번에는 15.3버젼을 맞춰준다

## next connect

- ref: https://www.npmjs.com/package/next-connect

## graphql setting

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

## redux ssr 적용 밑 사용예제 첨부

## tailwind css

- ref: https://tailwindcss.com/docs/guides/nextjs

```
yarn add -D tailwindcss postcss autoprefixer

```

## tailwind/form 적용

클래스명 정렬

- Ref: https://github.com/tailwindlabs/tailwindcss-forms

`
// 요거 두개 설치해야 프리티어랑 연동됨
$ yarn add -D prettier prettier-plugin-tailwindcss
`

## mui apply

yarn add @mui/icons-material @mui/material @mui/styles @mui/x-date-pickers

## prisma

- ref: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-planetscale

```
$ yarn add prisma typescript ts-node @types/node --save-dev
```

- yarn add @prisma/client

## planetscale

- ref: https://planetscale.com/docs/concepts/planetscale-environment-setup
