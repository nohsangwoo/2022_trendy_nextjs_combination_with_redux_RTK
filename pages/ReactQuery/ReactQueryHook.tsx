import axios from 'axios'
import { ChangeEvent, useCallback, useEffect, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { debounce } from 'lodash'
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

const ReactQueryHook = () => {
  const [index, setIndex] = useState(1)
  const [iIndex, setIindex] = useState(1)
  const {
    data, // api로부터 받아온 데이터(실패시 retry옵션의 횟수 만큼 재시도함)
    dataUpdatedAt, // data가 업데이트된 시간
    error, // 에러가 발생했을 때, 에러 객체
    errorUpdatedAt, // error가 업데이트된 시간
    failureCount, // 실패 횟수
    isError, // error가 발생했는지 여부
    isFetched, // query가 fetch되었는지 여부
    isFetchedAfterMount, // query가 mount 이후에 fetch되었는지 여부
    isFetching, // query가 fetch되고 있는지 여부
    isPaused, // query가 일시정지 되었는지 여부
    isLoading, // query가 loading되고 있는지 여부
    isLoadingError, // query가 loading되는 도중 error가 발생했는지 여부
    isPlaceholderData, // query가 placeholderData를 사용하고 있는지 여부
    isPreviousData, // query가 이전 데이터를 사용하고 있는지 여부
    isRefetchError, // query가 refetch되는 도중 error가 발생했는지 여부
    isRefetching, // query가 refetch되고 있는지 여부
    isStale, // query가 stale 상태인지 여부 (staleTime이 지나지 않았는지 여부)
    isSuccess, // query가 성공적으로 fetch되었는지 여부
    refetch, // query를 refetch하는 함수
    remove, // query를 삭제하는 함수
    status, // query의 상태
    fetchStatus, // query의 fetch 상태
  } = useQuery(['todos', index], () => getTodos(index), {
    // cacheTime: 1000 * 60 * 60 * 24, // 캐시 유지 시간(기본적으로 5분)
    // enabled: true, // component가 mount 되었을 때, query를 실행할지 여부(기본적으로 true)
    // networkMode, // query가 fetch되는 도중에 새로운 query가 실행되었을 때, 기존 query를 취소할지 여부(기본적으로 'all')
    // initialData, // 초기 데이터
    // initialDataUpdatedAt, // 초기 데이터가 업데이트된 시간
    // isDataEqual, // data가 변경되었는지 여부를 판단하는 함수
    // keepPreviousData, // query가 fetch되는 도중에 새로운 query가 실행되었을 때, 기존 query의 data를 유지할지 여부(기본적으로 false)
    // meta, // query의 메타 데이터
    // notifyOnChangeProps, // query의 상태가 변경되었을 때, notify할 props
    // onError, // query가 error가 발생했을 때, 실행할 함수
    // onSettled, // query가 성공적으로 fetch되었거나 error가 발생했을 때, 실행할 함수(즉, 쿼리가 완료 됐을때 실행하는 함수 )
    // onSuccess, // query가 성공적으로 fetch되었을 때, 실행할 함수
    // placeholderData, // query가 fetch되기 전에 사용할 placeholder data
    // queryKeyHashFn, // query key를 hash하는 함수
    // refetchInterval: 10000, // query를 일정 시간마다 refetch하는 함수
    // refetchIntervalInBackground, // query를 일정 시간마다 refetch하는 함수가 background에서 실행되는지 여부
    // refetchOnMount, // component가 mount 되었을 때, query를 refetch할지 여부(기본적으로 true)
    // refetchOnReconnect, // query가 fetch되는 도중에 reconnect가 발생했을 때, query를 refetch할지 여부(기본적으로 true)
    // refetchOnWindowFocus, // query가 fetch되는 도중에 window focus가 발생했을 때, query를 refetch할지 여부(기본적으로 true)
    retry: 3, // retry 횟수(기본적으로 3회 시도함)
    // retryOnMount, // component가 mount 되었을 때, query를 retry할지 여부(기본적으로 true)
    // retryDelay, // retry 간격
    // select, // 성공시 가져온 데이터를 가공하는 함수
    // staleTime, // query의 stale 시간(기본적으로 0)
    // structuralSharing, // query의 data를 shallow compare하는지 여부(기본적으로 true)
    // suspense, // query가 fetch되는 도중에 suspense를 사용할지 여부(기본적으로 false)
    // useErrorBoundary, // query가 error가 발생했을 때, error boundary를 사용할지 여부(기본적으로 false)
  })

  console.log(
    'api로부터 받아온 데이터(실패시 retry옵션의 횟수 만큼 재시도함): ',
    !isLoading && !isError && data,
  )
  console.log('data가 업데이트된 시간: ', new Date(dataUpdatedAt))
  console.log('에러가 발생했을 때, 에러 객체: ', error)
  console.log('error가 업데이트된 시간: ', errorUpdatedAt)
  console.log('실패 횟수: ', failureCount)
  console.log('error가 발생했는지 여부: ', isError)
  console.log('query가 fetch되었는지 여부: ', isFetched)
  console.log('query가 mount 이후에 fetch되었는지 여부: ', isFetchedAfterMount)
  console.log('query가 fetch되고 있는지 여부: ', isFetching)
  console.log('query가 일시정지 되었는지 여부: ', isPaused)
  console.log('query가 loading되고 있는지 여부: ', isLoading)
  console.log(
    'query가 loading되는 도중 error가 발생했는지 여부: ',
    isLoadingError,
  )

  console.log(
    'query가 placeholderData를 사용하고 있는지 여부: ',
    isPlaceholderData,
  )

  console.log('query가 이전 데이터를 사용하고 있는지 여부: ', isPreviousData)

  console.log(
    'query가 refetch되는 도중 error가 발생했는지 여부: ',
    isRefetchError,
  )
  console.log('query가 refetch되고 있는지 여부: ', isRefetching)
  console.log('query가 stale 상태인지 여부: ', isStale)
  console.log('query가 성공적으로 fetch되었는지 여부: ', isSuccess)
  // console.log('query를 refetch하는 함수: ', refetch)
  // console.log('query를 삭제하는 함수: ', remove)
  console.log('query의 상태: ', status)
  console.log('query의 fetch 상태: ', fetchStatus)

  useEffect(() => {
    console.log('ReactQueryHooks example components updated!')
  })

  // debouncing example
  // HACK
  useEffect(() => {
    if (!!index) {
      refetch()
    }
  }, [index, refetch])

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
  return (
    <div>
      <input onChange={onChangeNumber} value={iIndex} />
      <button onClick={() => refetch()}>refetch button</button>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : isError ? (
          <div>error</div>
        ) : (
          <div>
            <div>completed: {String(data.completed)}</div>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
            <div>userId: {data.userId}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReactQueryHook
