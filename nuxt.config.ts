// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      // Load a google font acroos all pages
      title: 'Nuxt TypeScript Starter',
      link: [
        { rel: 'Preconnect', href: '/https://font.googleapis.com' },
        { rel: 'stylesheet', href: '/https://font.googleapis.com' },
      ],
    }
  },
  devtools: { enabled: true },
  components:[{
    path: '~/components',
    pathPrefix: false,
  }],
  css: ['@/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/scss/foundations/_variables.scss"; @import "@/scss/foundations/_mixins.scss";',
        },
      },
    },
  }
})
