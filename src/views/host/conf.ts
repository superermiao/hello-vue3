const TABLE_COLUMNS = [
  {
    title: '主机名称',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '主机ip',
    dataIndex: 'ip',
    key: 'ip'
  },
  {
    title: '主机环境',
    dataIndex: 'env'
  },
  {
    title: '操作系统',
    dataIndex: 'type'
  },
  {
    title: '操作',
    dataIndex: 'action',
    slots: { customRender: 'action' }
  }
]

interface DATA_TABLE {
    id?: number | string;
    name: string;
    env: string;
    ip: string;
    type: string;
}

const ENV = [
  {
    name: '开发环境',
    value: 'dev'
  },
  {
    name: '测试环境',
    value: 'test'
  },
  {
    name: '线上环境',
    value: 'pro'
  }
]

const TYPE = ['linux', 'windows', 'macos']
export {
  TABLE_COLUMNS,
  DATA_TABLE,
  ENV,
  TYPE

}
