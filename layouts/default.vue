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
body
  color $text
  background $bg
  font-family 'Montserrat', sans-serif
img
  display block
  max-width 100%
  width 100%
</style>
