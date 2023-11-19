// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic', '@pinia/nuxt'],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening 
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/]
    }
  },
  app: {
    head: {
      title: 'Nuxt 3 app',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' }
      ]
    }
  },
  devtools: { enabled: true },
  components:[{
    path: '~/components',
    pathPrefix: false,
  }],
  css: ['@/scss/main.scss'],
  runtimeConfig: {
    public:{
      apiUrl:''
    }
  },
  vite: {
    resolve: {
      alias: {
        '@img': '/opt/build/repo/img', // Adjust the path accordingly
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/scss/foundations/_variables.scss"; @import "@/scss/foundations/_mixins.scss";',
        },
      },
    },
  }
  
})
