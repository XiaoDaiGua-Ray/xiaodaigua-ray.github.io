/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2022-12-08
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

import {
  NLayout,
  NCard,
  NTag,
  NButton,
  NGridItem,
  NSelect,
  NInput,
  NDatePicker,
  NInputNumber,
  NSpace,
} from 'naive-ui'
import RayTable from '@/components/RayTable/index'
import RayCollapseGrid from '@/components/RayCollapseGrid/index'

import type { DataTableColumns } from 'naive-ui'

type RowData = {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

const TableView = defineComponent({
  name: 'TableView',
  setup() {
    const baseColumns = [
      {
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Age',
        key: 'age',
      },
      {
        title: 'Address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        render: (row: RowData) => {
          const tags = row.tags.map((tagKey) => {
            return h(
              NTag,
              {
                style: {
                  marginRight: '6px',
                },
                type: 'info',
                bordered: false,
              },
              {
                default: () => tagKey,
              },
            )
          })

          return tags
        },
      },
      {
        title: 'Action',
        key: 'actions',
        render: (row: RowData) =>
          h(
            NButton,
            {
              size: 'small',
            },
            { default: () => 'Send Email' },
          ),
      },
    ]
    const actionColumns = ref<DataTableColumns<RowData>>(
      [...baseColumns].map((curr) => ({ ...curr, width: 400 })),
    )
    const tableData = ref([
      {
        key: 0,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: 1,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow'],
      },
      {
        key: 2,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ])
    const tableMenuOptions = [
      {
        label: '编辑',
        key: 'edit',
      },
      {
        label: () => h('span', { style: { color: 'red' } }, '删除'),
        key: 'delete',
      },
    ]
    const gridItemCount = ref(4)
    const gridCollapsedRows = ref(1)

    const handleMenuSelect = (key: string | number, idx: number) => {
      if (key === 'delete') {
        tableData.value.splice(idx, 1)
      }
    }

    return {
      tableData,
      actionColumns,
      baseColumns,
      tableMenuOptions,
      handleMenuSelect,
      gridItemCount,
      gridCollapsedRows,
    }
  },
  render() {
    return (
      <NLayout>
        <NCard title="RayTable">
          <p>
            该组件基于 Naive UI DataTable 组件封装. 实现右键菜单, 表格标题,
            导出为 excel 操作栏等功能
          </p>
          <p>RayTable 完全继承 DataTable 的所有属性与方法</p>
          <p>
            相关拓展 props 属性, 可以在源码位置
            src/components/RayTable/src/props.ts 中查看相关代码与注释
          </p>
          <p>该组件可以配合 RayCollapseGird 组件使用实现可折叠搜索栏</p>
        </NCard>
        <NCard style={['margin-top: 18px']}>
          {{
            default: () => (
              <NSpace vertical>
                <NSpace style={['margin-top: 18px']}>
                  该组件基于 NGird 实现, 但是由于 css grid 限制, 不能对于
                  NGridItem 组件进行二次封装, 所以使用时必须配合 NGridItem
                  使用才能实现示例效果(使用 NGridItem 包裹元素即可).
                </NSpace>
                <NSpace style={['margin-top: 18px']}>
                  <NSpace align="center">
                    数量 <NInputNumber v-model:value={this.gridItemCount} />
                  </NSpace>
                  <NSpace align="center">
                    行数 <NInputNumber v-model:value={this.gridCollapsedRows} />
                  </NSpace>
                </NSpace>
                <RayCollapseGrid
                  collapsedRows={this.gridCollapsedRows}
                  cols={this.gridItemCount}
                  onUpdateValue={(value: boolean) =>
                    window.$message.info(
                      `我是 RayCollapseGrid 组件${
                        value ? '收起' : '展开'
                      }的回调函数`,
                    )
                  }
                >
                  {{
                    action: () => (
                      <>
                        <NButton>搜索</NButton>
                        <NButton>重置</NButton>
                      </>
                    ),
                    default: () => (
                      <>
                        <NGridItem>
                          <NSelect />
                        </NGridItem>
                        <NGridItem>
                          <NInput />
                        </NGridItem>
                        <NGridItem>
                          <NDatePicker type="datetimerange" clearable />
                        </NGridItem>
                        <NGridItem>
                          <NInput />
                        </NGridItem>
                        <NGridItem>
                          <NInput />
                        </NGridItem>
                      </>
                    ),
                  }}
                </RayCollapseGrid>
              </NSpace>
            ),
          }}
        </NCard>
        <NCard title="基础使用" style={['margin-top: 18px']}>
          <RayTable
            title="基础使用"
            data={this.tableData}
            columns={this.baseColumns}
            action={false}
            pagination={{
              pageSize: 10,
            }}
          >
            {{
              tableFooter: () => '表格的底部内容区域，有时候你可能会用上',
            }}
          </RayTable>
        </NCard>
        <NCard style={['margin-top: 18px']}>
          {{
            header: () => (
              <div>
                <p>
                  使用响应式方法代理 columns 并且打开 action
                  则可以启用操作栏(v-model:columns)
                </p>
                <p>拖拽操作栏动态切换表格列</p>
                <p>点击左右固定按钮, 即可动态固定列</p>
                <p>点击修改列宽度, 即可拖动列修改宽度</p>
                <p>点击导出按钮即可导出 excel 表格, 默认以列为表头输出</p>
                <p>点击打印按钮即可打印该表格</p>
              </div>
            ),
            default: () => (
              <RayTable
                title={h(NInput, {
                  placeholder: '请输入检索条件',
                  style: ['width: 200px'],
                })}
                data={this.tableData}
                v-model:columns={this.actionColumns}
              />
            ),
          }}
        </NCard>
        <NCard title="右键菜单" style={['margin-top: 18px']}>
          <RayTable
            title="右键菜单表格"
            action={false}
            data={this.tableData}
            columns={this.baseColumns}
            rightClickMenu={this.tableMenuOptions}
            onMenuSelect={this.handleMenuSelect.bind(this)}
          />
        </NCard>
      </NLayout>
    )
  },
})

export default TableView
