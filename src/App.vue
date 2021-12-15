<template>
  <a-layout class="app-main">
    <a-layout-header class="header">
      <div>主机管理系统</div>
      <div>管理员</div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          :style="{ height: '100%', borderRight: 0 }"
        >
         <a-menu-item :key="item.path" v-for="item in menu">
           <router-link :to="item.path">
              {{item.title}}
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
export default defineComponent({
  setup () {
    const selectedKeys2 = ref(['/host'])
    const menu = reactive([
      { path: '/host', title: '主机管理' },
      { path: '/host-group', title: '主机组管理' }
    ])
    return {
      selectedKeys2,
      menu
    }
  }
})
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.app-main {
  height: 100%;
  .header {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
