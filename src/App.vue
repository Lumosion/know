<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="maxbox">
    <div class="topinfo">
      <top />
    </div>
    <div class="leftbox">
      <leftnav />
    </div>
  </div>


  <RouterView />
</template>

<style scoped>
/* header在页面顶端，宽度最宽 */
.topinfo {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-left: 1%;
}

/* maxbox内容纵向分布 */
.maxbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 10vh;
  margin-left: 0;
  float: left;
}

/* leftbox左侧导航栏 */
.leftbox {
  height: 90vh;
  border-right: 1px solid #e0e0e0;
  position: fixed;
  overflow: auto;
  float: left;
  left: 0;
  top: 10vh;
}
</style>
