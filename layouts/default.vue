<template>
  <div id="app">
    <app-header 
        title="Tech - Base de Conhecimento"
        @toggleMenu="changeIcon"
        :hideToggle="showIcon"
        />
    <app-menu />
    <app-content>
        <nuxt />
    </app-content>
    <app-footer />
  </div>
</template>

<script>
    import Header from '@/components/template/Header'
    import Menu from '@/components/template/Menu'
    import Content from '@/components/template/Content'
    import Footer from '@/components/template/Footer'

    export default{
        components:{
          appHeader: Header,
          appMenu: Menu,
          appContent: Content,
          appFooter: Footer
        },
        data(){
          return {
            showIcon: false
          }
        },
        methods: {
          changeIcon(){
           this.showIcon = !this.showIcon
        }
      }
    }
</script>

<style>

    *{
      font-family: "Lato", sans-serif;
    }
    body{
      margin: 0;
    }

    #app{
      -webkit-font-smoothig: antialiaed;
      -moz-osx-font-smoothig: grayscale;

      height: 100vh;
      display: grid;
      grid-template-rows: 60px 1fr 40px;
      grid-template-columns: 300px 1fr;
      grid-template-areas: 
          "header header"
          "menu content"
          "menu footer";
    }
</style>
