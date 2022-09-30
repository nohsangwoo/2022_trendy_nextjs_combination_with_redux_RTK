import { Resolver, Query, Arg } from 'type-graphql'

import { Hello } from './hello'

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello, { nullable: true })
  sayHello(@Arg('name', () => String) name: string): Hello | undefined {
    return { name: name, say: `hello ${name}` }
  }

  @Query(() => Hello)
  sayJustHello(): Hello {
    return { name: 'anonymouse', say: 'hello cuty☺️' }
  }
}
