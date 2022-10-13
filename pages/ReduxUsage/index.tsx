import counterSlice, {
  allCounterStateSelector,
  noticountSelector,
} from '@src/store/reducers/counterSlice.saga'
import { useAppDispatch, useAppSelector, wrapper } from '@src/store/store'
import { GetServerSideProps, GetServerSidePropsContext } from 'next/types'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

function Home() {
  const { num, noti } = useSelector(allCounterStateSelector)

  const dispatch = useAppDispatch()

  console.log('state num: ', num)
  console.log('state noti ', noti)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increase(1))}
        >
          Increment
        </button>
        <span>{num}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrease(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    store.dispatch(counterSlice.actions.increase(1))
    console.log('State on server counter', store.getState().counter)

    return {
      props: {},
    }
  })

/* export const getServerSideProps = wrapper.getServerSideProps(
  store =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(counterSlice.actions.increase(1))
      console.log('State on server', store.getState())
      return {
        props: {
          authState: false,
        },
      }
    },
)
 */
export default Home
