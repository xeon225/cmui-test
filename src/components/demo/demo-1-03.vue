<template>
  <figure class="traffic-light">
    <div class="light red"></div>
    <div class="light yellow"></div>
    <div class="light green"></div>
  </figure>
</template>

<script>
export default {
  name: 'demo-1-03'
}
</script>

<style lang="less" scoped>
  .traffic-light {
    background-color: silver;
    width: 350px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .light {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 1px solid black;
      &.red{
        background-color: coral;
      }
      &.yellow{
        background-color: gold;
      }
      &.green{
        background-color: lightgreen;
      }
    }
  }
</style>
