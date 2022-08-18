<template>
  <figure>
    <div></div>
    <div></div>
    <div></div>
  </figure>
</template>

<script>
export default {
  name: 'demo-1-02'
}
</script>

<style lang="less" scoped>
  figure {
    background-color: silver;
    width: 350px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid black;
    }
  }
</style>
