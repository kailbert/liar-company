<template lang="pug">
  .app
    nuxt
    Footer
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components:{
    Footer
  }
}

</script>

<style lang="stylus" src="./styles/reset.styl"></style>
<style lang="stylus" src="./styles/typography.styl"></style>
<style lang="stylus" src="./styles/pagetransitions.styl"></style>
<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap')
body
  color $text
  background $bg
  font-family 'Montserrat', sans-serif
img
  display block
  max-width 100%
  width 100%
</style>
