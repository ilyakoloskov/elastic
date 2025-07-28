import { useRuntimeConfig } from '#app'
import { useFetch } from 'nuxt/app'

export const useApiFetch = (endpoint: string) => {
  const config = useRuntimeConfig()

  const { data, pending, error } = useFetch(`${config.public.apiBaseUrl}${endpoint}`, {
    method: 'GET',
    redirect: 'follow',
  })

  return { data, pending, error }
}
