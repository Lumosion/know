import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletImportResolver()],
    }),
    vueDevTools(),
    autoImport({
      resolvers: [VarletImportResolver({ autoImport: true })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
