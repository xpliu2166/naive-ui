<markdown>
# 自定义展开图标

</markdown>

<template>
  <n-data-table :columns="columns" :data="data" default-expand-all />
  <br>
  <n-data-table :columns="columns1" :data="data1" default-expand-all />
</template>

<script lang="ts">
import { h, defineComponent } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { ArrowForward, ArrowForwardCircleOutline } from '@vicons/ionicons5'

type RowData = {
  name: string
  key: string
  children?: RowData[]
}

const createData = (): RowData[] => [
  {
    name: 'John Brown',
    key: '1'
  },
  {
    name: 'Jim Green',
    key: '2'
  },
  {
    name: 'Joe Black',
    key: '3'
  }
]

const columns: DataTableColumns<RowData> = [
  {
    type: 'expand',
    renderExpand: (rowData) => {
      return `${rowData.name} is a good guy.`
    },
    renderExpandIcon: (expanded) => {
      return h(ArrowForward, {
        style: expanded ? 'transform: rotate(90deg);' : undefined
      })
    }
  },
  {
    title: '#',
    key: 'key',
    render: (_, index) => {
      return `${index + 1}`
    }
  },
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'index',
    key: 'key'
  }
]

const columns1: DataTableColumns<RowData> = [
  {
    type: 'selection'
  },
  {
    title: 'name',
    key: 'name',
    renderExpandIcon: (expanded) => {
      return h(ArrowForwardCircleOutline, {
        style: expanded ? 'transform: rotate(90deg);' : undefined
      })
    }
  },
  {
    title: 'index',
    key: 'key'
  }
]

const data1: RowData[] = [
  {
    name: '07akioni',
    key: '07',
    children: [
      {
        name: '08akioni',
        key: '08',
        children: [
          {
            name: '09akioni',
            key: '09'
          },
          {
            name: '10akioni',
            key: '10'
          }
        ]
      }
    ]
  },
  {
    name: '11akioni',
    key: '11'
  }
]

export default defineComponent({
  setup () {
    return {
      data: createData(),
      columns,
      columns1,
      data1
    }
  }
})
</script>
