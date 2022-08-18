<template>
  <figure class="tree">
    <div class="branch">
      <span class="leaf"></span>
      <span class="leaf"></span>
      <span class="leaf"></span>
    </div>
    <div class="branch">
      <span class="leaf"></span>
      <span class="leaf"></span>
    </div>
  </figure>
</template>

<script>
export default {
  name: 'demo-1-04'
}
</script>

<style lang="less" scoped>
  .tree {
    width: 30px;
    height: 300px;
    background-color: saddlebrown;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .branch {
      width: 160px;
      height: 20px;
      background-color: peru;
      border-radius: 10px;
      display: flex;
      justify-content: flex-end;
      transform: rotate(-30deg);
      .leaf {
        width: 40px;
        height: 40px;
        border-radius: 100% 0 100% 0;
        background-color: green;
        transform: translateY(-100%);
      }
    }
  }
</style>
