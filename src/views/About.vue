<template>
  <div class="about">
    <h1>--------This is an about page----------</h1>
    <span ref="myRef">{{txt}}</span>
    <p>count: {{state.counter}}</p>
    <p>optionapi: {{optionApi}}</p>
    <label  @click="add">add按钮</label>
    <teleport to="#app">
        <div v-if="visbile" class="toast-wrap">
          <div class="toast-msg">我是一个 Toast 文案</div>
        </div>
    </teleport>
    <button @click="showToast" class="btn">打开 toast</button>
  </div>
</template>
<script lang="ts">
import { onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, ref } from 'vue'
import useConter from '../hook/useCounter'
export default {
  props: {
    txt: {
      type: Number,
      default: 0
    }
  },
  setup (props:any, context: any) {
    const { state, optionApi, add } = useConter()
    const visbile = ref(false)
    const showToast = () => {
      visbile.value = !visbile.value
    }
    const myRef = ref(null)
    // 生命周期
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate1')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onMounted(() => {
      console.log('onMounted', myRef.value)
    })
    onBeforeMount(() => {
      console.log('onBeforeMount', myRef.value)
    })
    console.log('setup', myRef.value) // vue2 beforeC
    return {
      visbile,
      showToast,
      myRef,
      state,
      add,
      optionApi
    }
  }
}
</script>
