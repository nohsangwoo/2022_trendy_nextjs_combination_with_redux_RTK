import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class Hello {
  @Field(() => ID)
  name: string

  @Field(() => String)
  say: string
}
