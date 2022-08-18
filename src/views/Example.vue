<template>
  <div>
    Example
    <component :is="item" v-for="(item, index) in componentName" :key="index"></component>
  </div>
</template>

<script>
// 导入 components/demo 下所有的组件
import CyanComponents from '@/components/demo.js'
export default {
  name: 'Example',
  data() {
    return {
      componentName: CyanComponents.name // 注册的组件名称
    }
  },
  components: { ...CyanComponents.components }
}
</script>

<style>

</style>
