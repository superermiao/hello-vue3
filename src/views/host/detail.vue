<template>
    <a-form :label-col="labelCol" layout="vertical" :wrapper-col="wrapperCol" :model="formState">
        <a-form-item label="主机名称">
             <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="主机ip">
             <a-input v-model:value="formState.ip" />
        </a-form-item>
        <a-form-item label="主机环境">
            <a-select v-model:value="formState.env">
                <a-select-option v-for="item in ENV" :value="item.value" :key="item.value">{{item.name}}</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item label="主机系统">
            <a-select v-model:value="formState.type">
                <a-select-option v-for="item in TYPE" :value="item" :key="item">{{item}}</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item >
            <a-button><router-link to="/host">取消</router-link></a-button>
            <a-button type="primary" style="margin-left: 10px" @click="onSubmit">创建</a-button>
        </a-form-item>
    </a-form>
</template>

<script lang="ts">
import { onMounted, UnwrapRef, reactive } from 'vue'
import { DATA_TABLE, TYPE, ENV } from './conf'
import { createHost, updateHost } from '../../apis/host'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const formState:UnwrapRef<DATA_TABLE> = reactive({
      name: '',
      type: '',
      env: '',
      ip: ''
    })
    const onSubmit = async () => {
      // todo请求创建/x修改接口
      const data = route.query.type === 'new' ? await createHost(formState) : await updateHost(formState)
      router.push('/host')
    }
    onMounted(() => {
      // todo编辑的时候获取详情

    })
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      formState,
      ENV,
      TYPE,
      onSubmit
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
