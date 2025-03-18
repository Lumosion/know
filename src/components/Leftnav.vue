<script setup>
import { ref } from 'vue'
const successTheme = {
    '--rate-primary-color': 'var(--color-success)',
    '--button-primary-color': 'var(--color-success)',
    '--switch-handle-active-background': 'var(--color-success)',
    '--switch-track-active-background': 'var(--color-success)',
}
const active = ref(0)
</script>

<template>
    <var-tabs class="tabs-example-vertical" elevation indicator-position="reverse" layout-direction="vertical"
        scrollable="auto" color="white" v-model:active="active">
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
        <var-tab>选项1</var-tab>
        <var-tab>选项2</var-tab>
        <var-tab>选项3</var-tab>
    </var-tabs>
</template>

<style>
.tabs-example-vertical {
    width: 10vw !important;
    height: 100%;
    --tab-font-size: 18px;
    --tab-active-font-size: 18px;
}

.tabs-example-vertical .var-tab {
    height: 60px;
}
</style>