import { useRuntimeConfig } from '#app'
import { useFetch } from 'nuxt/app'

// export const useApiFetch = (endpoint: string, method: any = 'GET') => {
//   const config = useRuntimeConfig()

//   const { data, pending, error } = useFetch(`${config.public.apiBaseUrl}${endpoint}`, {
//     method: method,
//     redirect: 'follow',
//   })

//   return { data, pending, error }
// }

export const useApiFetch = (endpoint: string, method: string = 'GET', options: any = {}) => {
  const config = useRuntimeConfig()

  return useFetch(`${config.public.apiBaseUrl}/${endpoint}`, {
    method: method,
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  })
}
