<template>
  <h1 style="text-align: center">composition-api</h1>
  <div class="api">
    <p>count: {{state.counter}}</p>
    <p>optionapi: {{optionApi}}</p>
    <!-- <p>doubleCount: {{state.doubleCounter}}</p>
    <p>threeCount: {{threeCounter}}</p> -->
    <p>watchCount: {{watchCount}}</p>
    <p>watchEffectData: {{watchEffectData}}</p>
    <!-- <p>currentCount: {{currentCount}}</p> -->
    <div class="button">
      <label  @click="add">add按钮</label>
      <label style="margin-left: 12px" @click="changeVisible">切换aboue显示：{{aboutVisible}}</label>
    </div>
    <about v-if="aboutVisible" :txt="state.counter"></about>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'
import about from './About.vue'
import useConter from '../hook/useCounter'
interface STATE_ITEM {
  counter: number;
  doubleCounter: number;
}
export default defineComponent({
  // 作为入口
  components: {
    about
  },
  setup () {
    // let currentCount = 101
    // const optionApi = ref(0)
    const aboutVisible = ref(false)
    const watchCount = ref(0)
    const { state, optionApi, add } = useConter()
    // const state:STATE_ITEM = reactive({
    //   counter: 0,
    //   // 计算属性computed的使用更灵活了
    //   doubleCounter: computed(() => state.counter * 2)
    // })
    const watchEffectData = ref(0)
    // computed也可单独使用
    const threeCounter = computed(() => state.counter * 3)
    watch(() => state.counter, (newVal) => {
      console.log(newVal)
      watchCount.value = newVal
    })
    watchEffect(() => {
      watchEffectData.value = state.counter
    })
    // const add = () => {
    //   currentCount++
    //   state.counter++
    //   optionApi.value++
    // }
    const changeVisible = () => {
      aboutVisible.value = !aboutVisible.value
    }
    return {
      state,
      add,
      changeVisible,
      aboutVisible,
      threeCounter,
      // currentCount,
      optionApi,
      watchCount,
      watchEffectData
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    addO () {
      this.optionApi++
    }
  }
})
</script>
<style lang="less">
.api {
  text-align: center
}
.button label{
  border: 1px solid;
  padding: 8px 12px;
  border-radius: 4px;
}
</style>
