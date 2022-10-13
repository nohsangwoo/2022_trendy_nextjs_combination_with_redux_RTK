import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { debounce } from 'lodash'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

export type TodosType = {
  completed: boolean
  id: number
  title: string
  userId: number
}
export const getTodos = async (index: number): Promise<TodosType> => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${index}`,
  )
  return data
}

export const useTodosQuery = () => {
  const [index, setIndex] = useState(1)
  const [iIndex, setIindex] = useState(1)

  const {
    data: todosData,
    isLoading: isLoadingTodos,
    refetch: refetchTodos,
    isError: isErrorTodos,
    isSuccess: isSuccessTodos,
  } = useQuery<TodosType>(['todos', index], () => getTodos(index), {
    cacheTime: 1000 * 60 * 60 * 24, // 캐시 유지 시간(기본적으로 5분)
    retry: 3, // retry 횟수(기본적으로 3회 시도함)
  })

  // debouncing example
  // HACK
  useEffect(() => {
    if (!!index) {
      refetchTodos()
    }
  }, [index, refetchTodos])

  const debouncedSetIndex = useRef(
    debounce(value => {
      setIndex(value)
    }, 3000),
  ).current

  useEffect(() => {
    return () => {
      debouncedSetIndex.cancel()
    }
  }, [debouncedSetIndex])

  const onChangeNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setIindex(+e.target.value)
      debouncedSetIndex(e.target.value)
    },
    [debouncedSetIndex, setIindex],
  )
  //  end of debouncing example

  return {
    todosData,
    isLoadingTodos,
    refetchTodos,
    isErrorTodos,
    isSuccessTodos,
    iIndex,
    onChangeNumber,
  }
}

// export const useUserQuery...
// export const useKeyQuery...
// export const useMoviesQuery...
