// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  css: [
    '@/assets/scss/styles.scss',
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
      ],
      script: [
        // { src: '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js', async: true}
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { charset: 'utf-8' },
        { name: 'msapplication-TileColor', content: '#2b5797' },
        { name: 'theme-color', content: '#ffffff' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
  devtools: { enabled: true }
})
