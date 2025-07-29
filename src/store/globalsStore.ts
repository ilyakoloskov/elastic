import { defineStore } from 'pinia'

export const useGlobalsStore = defineStore('globals', {
  state: () => ({
    navigation: {},
    socials: {},
    phone: {},
    address: {},
  }),
  getters: {
    getNavigation(state) {
      return state.navigation
    },
    getSocials(state) {
      return state.socials
    },
    getPhone(state) {
      return state.phone
    },
    getAddress(state) {
      return state.address
    },
  },
  actions: {
    setGlobalsData(data: any) {
      this.navigation = data?.header?.navigation
      this.socials = data?.footer?.socials
      this.phone = data?.footer.phone
      this.address = data?.footer?.address
    },
  },
})
