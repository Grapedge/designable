import { createLocales } from '@designable/core'
import { Field } from './Field'

export const Transfer = createLocales(Field, {
  'zh-CN': {
    title: '穿梭框',
    settings: {
      'x-component-props': {
        oneWay: '单向展示',
        operations: { title: '操作文案集合', tooltip: '格式：string[]' },
        titles: { title: '标题集合', tooltip: '格式：string[]' },
        showSearchAll: '支持全选',
        filterOption: '选项筛选器',
      },
    },
  },
  'en-US': {},
})
