import { fileURLToPath, URL } from 'url'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,

  app: {
    rootId: 'app',
    rootAttrs: {
      class: 'app',
    },

    head: {
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    },

    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'slide', mode: 'out-in' },
  },
  css: ['@/assets/styles/global.css'],

  plugins: [
    '~/plugins/gsapDirective/gsapDirective.client.js',
    '~/plugins/gsapDirective/gsapDirective.server.js',
  ],

  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
          @use "@/assets/styles/scss/_media.scss" as *; 
          @use "@/assets/styles/scss/_mixins.scss" as *; 
        `,
        },
      },
    },
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt', '@nuxt/fonts'],
  srcDir: 'src/',

  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
    '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Helvetica', provider: 'google' },
    ],
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  compatibilityDate: '2025-02-04',
})
