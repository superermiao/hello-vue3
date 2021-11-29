import { computed, reactive, ref } from 'vue'
interface STATE_ITEM {
    counter: number;
    doubleCounter: number;
}
const useCounter = () => {
  const state:STATE_ITEM = reactive({
    counter: 0,
    // 计算属性computed的使用更灵活了
    doubleCounter: computed(() => state.counter * 2)
  })
  const optionApi = ref(0)
  const add = () => {
    state.counter++
    optionApi.value++
  }

  return {
    state,
    optionApi,
    add
  }
}
export default useCounter
