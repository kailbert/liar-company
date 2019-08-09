const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page test
  */
  head: {
    title: "L.I.A.R. – Life is a rehearsal",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "LIAR - eine außergewöhnliche Theaterproduktion bestehend aus physischem Theater, Bewegung, Akrobatik, speziellen Effekten, Live-Musik und vor allem: viel Humor."}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  generate: {
    dir: 'wwwroot'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#C7C72E' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
  ],
  styleResources: {
    // your settings here
    sass: [], // alternative: scss
    stylus: ['./assets/sharedstyles/*.styl']
  },
  markdownit: {
    preset: 'default',
    html:true,  
  },
  /*
  ** Build configuration
  */
 build: {
  extend(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
    }
  }
}
}
