import { createLocales } from '@designable/core'
import { Field } from './Field'

export const NumberPicker = createLocales(Field, {
  'zh-CN': {
    title: '数字输入',
    settings: {
      'x-component-props': {
        formatter: {
          title: '格式转换器',
          tooltip: '格式：function(value: number | string): string',
        },
        keyboard: '启用快捷键',
        parser: {
          title: '格式解析器',
          tooltip:
            '指定从 格式转换器 里转换回数字的方式，和 格式转换器 搭配使用,格式：function(string): number',
        },
        decimalSeparator: '小数点',
        precision: '数字精度',
        max: '最大值',
        min: '最小值',
        step: '步长',
        stringMode: {
          title: '字符串格式',
          tooltip: '开启后支持高精度小数。同时 onChange 将返回 string 类型',
        },
      },
    },
  },
  'en-US': {},
})
