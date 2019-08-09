<template lang="pug">
    footer
        .footer
            p © {{date}} L.I.A.R.
            ul
                li
                    nuxt-link(to="legal") Legal
</template>

<script>
export default {
    data(){
        return{
            date: new Date().getFullYear()
        }
    }
}
</script>

<style lang="stylus">
    footer
        .footer
            display flex
            justify-content space-between
            align-items center
            padding 2rem
            p
                color darken($text,50%)
                font-size 1.2rem
            ul
                display flex
                justify-content flex-end
                li
                    margin-left 1.6rem
                    font-size 12px
</style>
