const CyanComponents = require.context('@/components/demo', true, /\.vue$/) // 注册的组件
const ComponentsName = [] // 组件名称
CyanComponents.keys().forEach((item, index) => {
  const comp = CyanComponents(item)
  const name = comp.default.name
  ComponentsName.push(name)
  CyanComponents[name] = comp.default
})

export default {
  components: CyanComponents,
  name: ComponentsName
}
