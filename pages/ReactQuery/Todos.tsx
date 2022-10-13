import { CSSProperties } from 'react'
import { TodosType } from './useQueries'

interface Props {
  todosData: TodosType
}
const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  width: '300px',
  height: '300px',
  margin: '10px',
  padding: '10px',
}

const Todos = ({ todosData }: Props) => {
  return (
    <div style={containerStyle}>
      <div>completed: {String(todosData.completed)}</div>
      <div>id: {todosData.id}</div>
      <div>title: {todosData.title}</div>
      <div>userId: {todosData.userId}</div>
    </div>
  )
}

export default Todos
