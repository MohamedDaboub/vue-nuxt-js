// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic', '@pinia/nuxt'],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vite'],
  build: {
    extractCSS: true,
    transpile: ['vue-final-modal'],
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    assets: {
      // Assurez-vous que ce chemin correspond à la structure de votre projet
      // Par défaut, c'est 'static' dans Nuxt 2.x
      prefix: '/assets/'
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
