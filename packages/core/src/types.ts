import { IEventProps, Event } from '@designable/shared'
import { ISchema } from '@formily/json-schema'
import {
  Engine,
  ITreeNode,
  ScreenType,
  Shortcut,
  Viewport,
  Workbench,
  Workspace,
  TreeNode,
} from './models'

export type IEngineProps<T = Event> = IEventProps<T> & {
  sourceIdAttrName?: string //拖拽源Id的dom属性名
  nodeIdAttrName?: string //节点Id的dom属性名
  contentEditableAttrName?: string //原地编辑属性名
  contentEditableNodeIdAttrName?: string //原地编辑指定Node Id属性名
  clickStopPropagationAttrName?: string //点击阻止冒泡属性
  outlineNodeIdAttrName?: string //大纲树节点ID的dom属性名
  nodeHelpersIdAttrName?: string //节点工具栏属性名
  defaultComponentTree?: ITreeNode[] //默认组件树
  defaultScreenType?: ScreenType
  shortcuts?: Shortcut[]
}

export type IEngineContext = {
  workspace: Workspace
  workbench: Workbench
  engine: Engine
  viewport: Viewport
}

export interface IDesignerProps {
  package?: string //npm包名
  registry?: string //web npm注册平台地址
  version?: string //semever版本号
  path?: string //组件模块路径
  title?: string //标题
  description?: string //描述
  icon?: string //icon
  sourceIcon?: string //source icon
  group?: string //分类
  droppable?: boolean //是否可作为拖拽容器，默认为true
  draggable?: boolean //是否可拖拽，默认为true
  deletable?: boolean //是否可删除，默认为true
  cloneable?: boolean //是否可拷贝，默认为true
  resizable?: boolean //是否可修改尺寸，默认为false
  inlineLayout?: boolean //是否是内联布局
  inlineChildrenLayout?: boolean //子节点是否内联
  selfRenderChildren?: boolean //是否自己渲染子节点
  propsSchema?: ISchema //Formily JSON Schema
  defaultProps?: any //默认属性
  getDragNodes?: (node: TreeNode) => TreeNode | TreeNode[] //拦截转换Drag节点
  getDropNodes?: (node: TreeNode, parent: TreeNode) => TreeNode | TreeNode[] //拦截转换Drop节点
  getComponentProps?: (node: TreeNode) => any //拦截属性
  allowAppend?: (target: TreeNode, sources?: TreeNode[]) => boolean
  allowSiblings?: (target: TreeNode, sources?: TreeNode[]) => boolean
  allowDrop?: (target: TreeNode) => boolean
  [key: string]: any
}

export type IDesignerPropsMap = Record<string, IDesignerProps>

export type IDesignerControllerProps =
  | IDesignerProps
  | ((node: TreeNode) => IDesignerProps)

export type IDesignerControllerPropsMap = Record<
  string,
  IDesignerControllerProps
>

export type LocaleMessages = {
  [ISOCode: string]: {
    [key: string]: any
  }
}
export interface IDesignerLocales {
  global: LocaleMessages
  components: LocaleMessages
  sources: LocaleMessages
  language: string
}

export type WorkbenchTypes =
  | 'DESIGNABLE'
  | 'PREVIEW'
  | 'JSONTREE'
  | 'MARKUP'
  | (string & {})
