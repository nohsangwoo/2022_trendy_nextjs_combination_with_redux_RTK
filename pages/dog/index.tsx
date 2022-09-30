import { dehydrate, useQuery } from 'react-query'
import Head from 'next/head'
import Link from 'next/link'
import { Grid, Card, Image, Text, Title } from '@mantine/core'

import { queryClient, getDogs, sayHello, sayJustHello } from '@src/api'
import { useClientValue } from 'Hooks/useClientValue'

export async function getServerSideProps() {
  // 서버에서 이미 한번 불러와서 초기값을 준다.
  await queryClient.prefetchQuery(['dogs'], () => getDogs())
  await queryClient.prefetchQuery(['sayhello'], () =>
    sayHello({ name: 'sangwoo' }),
  )
  await queryClient.prefetchQuery(['sayjusthello'], () => sayJustHello())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  const { data } = useQuery(['dogs'], () => getDogs())
  const { data: shDt } = useQuery(['sayhello'], () => getDogs())
  const { data: sjhDt } = useQuery(['sayjusthello'], () => getDogs())
  const test = useClientValue('test', 'test')

  console.log('test:', test)

  console.log('그냥안녕: ', sjhDt)
  console.log('안녕: ', shDt)
  console.log('그냥안녕: ', sjhDt)
  console.log('안녕: ', shDt)

  return (
    <div>
      <Grid>
        {data?.dogs.map((f, i) => (
          <Grid.Col xs={12} md={6} lg={4} key={[f.name, i].join(':')} p={5}>
            <Link href={`/dog/${f.name}`} passHref>
              <Card>
                <Card.Section>
                  <Image height={350} src={f.image} alt="green iguana" />
                </Card.Section>
                <Title order={3}>{f.name}</Title>
                <Text>
                  {f.weight} pound {f.ageInWeeks} weeks old{' '}
                  {f.sex.toLowerCase()} {f.breed.toLowerCase()}
                </Text>
              </Card>
            </Link>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  )
}
