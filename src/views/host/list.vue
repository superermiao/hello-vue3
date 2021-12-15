<template>
  <div class="list-host">
    <a-button type="primary" class="btn"><router-link to="/host/detail?type=new">新建主机</router-link></a-button>
    <a-table :dataSource="dataSource" :columns="TABLE_COLUMNS" :pagination="false">
        <template #action="{record}">
           <a-space>
               <a @click="operate(record, 'edit')">编辑</a>
               <a style="color: red" @click="operate(record, 'delete')">删除</a>
           </a-space>
        </template>
    </a-table>
  </div>

</template>

<script lang="ts">
import { ref, onMounted } from 'vue'
import { TABLE_COLUMNS, DATA_TABLE } from './conf'
import { getHostList } from '../../apis/host'

export default {
  setup () {
    const dataSource = ref<DATA_TABLE[]>([])
    // 获取列表数据
    const getList = () => {
      // todo请求列表接口获取数据
      getHostList().then((res) => {
        dataSource.value = res.data
      })
    }
    // 操作表格
    const operate = (record: DATA_TABLE, type: string) => {
      switch (type) {
        case 'edit':
          // todo 跳到编辑
          break
        case 'delete':
          // todo 删除
          break
      }
    }
    onMounted(() => {
      getList()
    })
    return {
      dataSource,
      getList,
      TABLE_COLUMNS,
      operate
    }
  }
}
</script>

<style lang="less">
.list-host {
    .btn {
        margin-bottom: 12px;
    }
}
</style>
