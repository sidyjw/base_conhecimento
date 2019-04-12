const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Base de Conhecimento',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel:"stylesheet", 
        href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css", 
        integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",
        crossorigin: "anonymous"
      },
      {
        href: "https://fonts.googleapis.com/css?family=Lato",
        rel: "stylesheet"
      }

    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '@/plugins/page-title',
      '@/plugins/toasted',
      '@/plugins/show-error'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // '@nuxtjs/toast',
    'nuxt-fontawesome',
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Toast module configuration
  */
  // toast: { // Global configuration
  //   iconPack: 'fontawesome',
  //   duration: 3000,
  //   register: [ // Register custom toasts
  //     {
  //       name: 'defaultSuccess',
  //       message: 'Operação realizada com sucesso!',
  //       options: { type: 'success', icon: 'check'}
  //     },
	 //   {
	 //      name: 'my-error',
	 //      message: 'Oops...Something went wrong',
	 //      options: {
	 //        type: 'error'
	 //      }
	 //    }
  //     // {
  //     //   name: 'defaultError',
  //     //   message: payload => !payload.msg ? 'Oops... Erro inesperado.' : payload.msg,
  //     //   options: { type: 'error', icon: 'times'}
  //     // }
  //   ]
  // },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
