import { useTodosQuery } from './useQueries'
import Todos from './Todos'
const ReactQueryHookWithQueries = () => {
  const {
    todosData,
    isLoadingTodos,
    refetchTodos,
    isErrorTodos,
    isSuccessTodos,
    iIndex,
    onChangeNumber,
  } = useTodosQuery()

  // useQuery가 여러개일땐? 그냥 여러개 쓰면됨
  /* 
  const {...} = useUserQuery()
  const {...} = useKeyQuery()
  const {...} = useMoviesQuery() 
  */

  return (
    <div>
      <input onChange={onChangeNumber} value={iIndex} />
      <button onClick={() => refetchTodos()}>refetch button</button>
      <div>
        {isLoadingTodos ? (
          <div>loading...</div> // loading 핸들링
        ) : isErrorTodos ? (
          <div>error</div> // 에러 핸들링
        ) : (
          todosData &&
          isSuccessTodos &&
          !isLoadingTodos && <Todos todosData={todosData} />
        )}
      </div>
    </div>
  )
}

export default ReactQueryHookWithQueries
