import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

export default function ReactQueryMutation() {
  const {
    data, // The data returned from the mutation
    error, // The error thrown by the mutation
    isError, // Whether or not the mutation resulted in an error
    isIdle, // Whether or not the mutation is in the idle state
    isLoading, // Whether or not the mutation is in the loading state
    isPaused, // Whether or not the mutation is paused
    isSuccess, // Whether or not the mutation resulted in a success
    mutate, // The mutate function to trigger the mutation
    mutateAsync, // The async version of the mutate function
    reset, // A function to reset the mutation state to its initial value
    status, // The current status of the mutation
  } = useMutation(
    () => {
      return axios.post('https://jsonplaceholder.typicode.com/posts', {
        data: {
          title: 'foo',
          body: 'bar',
          userId: 1,
        },
      })
    },
    {
      onMutate: variables => {
        // A mutation is about to happen!
        // optimistic update 기능 ,
        // 먼저 화면에 렌더링하고 서버에 요청을 보내는 기능(서버에 요청을 보내는 동안 화면에 렌더링된 데이터를 보여줌)
        // Optionally return a context containing data to use when for example rolling back
        return { id: 1 }
      },
      //   onError: (error, variables, context) => {
      //     // An error happened!
      //     console.log(`rolling back optimistic update with id ${context.id}`)
      //   },
      onSuccess: (data, variables, context) => {
        console.log('data!: ', data)
        console.log('variables!: ', variables)
        console.log('context!: ', context)
        // Boom baby!
      },
      //   onSettled: (data, error, variables, context) => {
      //     // Error or success... doesn't matter!
      //   },
    },
  )

  console.log('res data after mutation: ', data)
  return (
    <div>
      {isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {/* {isError ? <div>An error occurred: {error.message}</div> : null} */}

          {isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
              mutate()
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
//
// queryClient.invalidateQueries(['todos']) // 해당 키를 가진 모든 쿼리는 stale 취급되며 ,모든 todos 쿼리를 백그라운드에서 다시 refetch
