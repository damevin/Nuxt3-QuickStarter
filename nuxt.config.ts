// https://v3.nuxtjs.org/api/configuration/nuxt.config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', 'nuxt-purgecss', '@nuxt/image-edge'],
  ssr: false,
  app: {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Quickstarter Nuxt3',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Dekko&family=Raleway:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
