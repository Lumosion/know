<script setup lang="ts">
import { ref } from 'vue'
import { ImagePreview } from '@varlet/ui'
const type = ref('primary')
const show = ref(false)
const images = ref([
    'https://q1.qlogo.cn/g?b=qq&nk=2834535844&s=640'
])

</script>
<template>
    <main>
        <div class="site-header">
            <div class="site-header__lead" @click="show = true">
                <var-image src="https://q1.qlogo.cn/g?b=qq&nk=2834535844&s=640" width="32px" height="32px" />
                <div class="site-header__title">Lumosion</div>
            </div>
            <div class="site-header__tail">
                <div class="site-header__versions">
                    <var-select margin-right="4px" v-model="type" width="100px">
                        <var-option label="3.x" value="default" />
                        <var-option label="2.x" value="primary" />
                    </var-select>
                </div>

                <var-icon name="account-circle" />
            </div>
        </div>
        <var-image-preview closeable :images="images" v-model:show="show" />
    </main>
</template>
<style scoped>
.site-header {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10vh;
    padding: 0 30px;
    justify-content: space-between;
    user-select: none;
    z-index: 9;
    background: var(--site-config-color-bar);
    border-bottom: 1px solid var(--site-config-color-border);
    box-sizing: border-box;
    --site-config-color-bar: #fff;
    --site-config-color-border: #f0f0f0;
    --field-decorator-standard-normal-margin-top: 2px;
}

.site-header__lead {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
}

.site-header__title {
    font-size: 22px;
    margin-left: 12px;
    color: var(--site-config-color-text);
}

.site-header__tail {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
}

.site-header__versions {
    border-radius: 3px;
    height: 40px;
    display: flex;
    align-items: center;
    padding-right: 10px;
    padding-left: 18px;
    position: relative;
    cursor: pointer;
    transition: background-color .25s;
    margin-right: 4px;
}

.var-select{
    width:5vw
}
</style>