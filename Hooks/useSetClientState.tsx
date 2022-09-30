import { useQueryClient } from 'react-query'

export const useSetClientState = (key: any) => {
  const queryClient = useQueryClient()
  return (state: any) => queryClient.setQueryData(key, state)
}
