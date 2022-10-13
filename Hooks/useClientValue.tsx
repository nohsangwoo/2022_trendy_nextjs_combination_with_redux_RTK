import { useQuery } from '@tanstack/react-query'

export const useClientValue = (key: string[], initialData: any) =>
  useQuery(key, {
    initialData,
    staleTime: Infinity,
  }).data
