```yaml
meta:
  type: 组件
  category: 数据输入
title: 选择器 Select
description: 当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。
```

@import ./__demo__/basic.md

@import ./__demo__/clear.md

@import ./__demo__/multiple.md

@import ./__demo__/size.md

@import ./__demo__/loading.md

@import ./__demo__/create.md

@import ./__demo__/search.md

@import ./__demo__/scroll.md

@import ./__demo__/group.md

@import ./__demo__/label.md

@import ./__demo__/linkage.md


### `<select>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|multiple|是否开启多选模式|`boolean`|`false`|
|model-value **(v-model)**|绑定值|`string \| number \| Array<string \| number>`|`-`|
|default-value|默认值（非受控模式）|`string \| number \| Array<string \| number>`|`'' | []`|
|input-value **(v-model)**|输入框的值|`string`|`-`|
|default-input-value|输入框的默认值（非受控模式）|`string`|`''`|
|size|选择框的大小|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
|placeholder|占位符|`string`|`-`|
|loading|是否为加载中状态|`boolean`|`false`|
|disabled|是否禁用|`boolean`|`false`|
|error|是否为错误状态|`boolean`|`false`|
|allow-clear|是否允许清空|`boolean`|`false`|
|allow-search|是否允许搜索|`boolean`|`(props: Data) => props.multiple`|
|allow-create|是否允许创建|`boolean`|`false`|
|max-tag-count|多选模式下，最多显示的标签数量。0 表示不限制|`number`|`0`|
|popup-container|弹出框的挂载容器|`string \| HTMLElement \| null \| undefined`|`-`|
|popup-visible **(v-model)**|是否显示下拉菜单|`boolean`|`-`|
|unmount-on-close|是否在下拉菜单关闭时销毁元素|`boolean`|`true`|
|filter-option|是否过滤选项|`boolean`|`true`|
|options|选项数据|`Option[]`|`[]`|
|virtual-list-props|传递虚拟列表属性，传入此参数以开启虚拟滚动 [VirtualListProps](#virtuallistprops)|`VirtualListProps`|`-`|
|format-label|格式化显示内容|`(data: OptionInfo) => string`|`-`|
### `<select>` Events

|事件名|描述|参数|
|---|---|---|
|change|值发生改变时触发|-|
|input-value-change|输入框的值发生改变时触发|-|
|popup-visible-change|下拉框的显示状态改变时触发|-|
|clear|点击清除按钮时触发|-|
|remove|点击标签的删除按钮时触发|-|
|search|用户搜索时触发|-|
|dropdown-scroll|下拉菜单发生滚动时触发|-|
|dropdown-reach-bottom|下拉菜单滚动到底部时触发|-|
### `<select>` Slots

|插槽名|描述|参数|
|---|:---:|---|
|label|选项的显示内容|data: `OptionInfo`|
|empty|选项为空时的显示内容|-|

