import { useGlobalsStore } from '@/store/globalsStore'

export const useGlobals = () => {
  const store = useGlobalsStore()
  const { getNavigation, getSocials, getPhone, getAddress } = storeToRefs(store)

  return {
    getNavigation,
    getSocials,
    getPhone,
    getAddress,
  }
}
