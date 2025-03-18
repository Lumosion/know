<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
</script>

<template>
  <main>
    <h1>Hello,I'M Lumoison😜</h1>
    <br />
    <h1>👦Explore With Heart / 用 心 探 索</h1>
    <div class="card">
      <var-card title="🌱 正在学习 Go 和 PostgreSQL" description="" />
      <!-- 换行 -->
      <br />
      <var-card title="💬 XCPC" description="" />
      <br />
      <var-card title="😄 通过 Azure 进行探索" description="" />
      <br />
      <var-card title="😭 即将上班" description="" />
      <br />
      <var-alert message="我也说不准是在什么时间，什么地点，看见你的什么神情，听见你的什么言语，便开始爱上了你。" />
    </div>
    <!-- <var-skeleton :loading="loading" rows="10">加载的数据</var-skeleton> -->
    <var-back-top :duration="300" />
  </main>
</template>
<style scoped>
main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;
  width: 90vw;
  margin-left: 10vw;
  margin-top: 10vh;
  justify-content: flex-start;
  font-family: 'Lovelo-Black';
}

@font-face {
  font-family: 'Lovelo-Black';
  src: url('@/assets/text/Lovelo-Black.ttf');
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  font-family: 'Lovelo-Black';
}




.card {
  margin: 10px;
}
</style>