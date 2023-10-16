// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic'],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  app:{
    head: {
      // Load a google font acroos all pages
      title: 'Nuxt TypeScript Starter',
      link: [
        // { rel: 'Preconnect', href: '/https://font.googleapis.com' },
        // { rel: 'stylesheet', href: '/https://font.googleapis.com' },
      ],
    }
  },
  devtools: { enabled: true },
  components:[{
    path: '~/components',
    pathPrefix: false,
  }],
  css: ['@/scss/main.scss'],
  runtimeConfig: {
    // Will be available in both server and client
    axios: {
      baseURL: process.env.NUXT_API_URL,
    },
  },
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
