import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => ({
    state: '',
    test: 0
  }),
  persist: true,
  actions: {
    setState(value: string) {
      console.log('set state')
      this.state = value
    }
  }
})

export default useAppStore
