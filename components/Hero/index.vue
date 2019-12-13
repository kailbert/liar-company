<template lang="pug">
    div
        .hero
            .text(v-if="isEng")
                img(:src="liarImg")
                p {{text.en.subtitle}}
                a(:href="text.trailer" target="_blank").btn Watch Trailer
            .text(v-else)
                img(:src="liarImg")
                p {{text.de.subtitle}}
                a(:href="text.trailer" target="_blank").btn Trailer ansehen
        .intro(v-if="isEng")
            p {{text.en.intro}}
            .quote
                blockquote {{text.en.quote}}
                small {{text.en.quoter}}
        .intro(v-else)
            p {{text.de.intro}}
            .quote
                blockquote {{text.de.quote}}
                small {{text.de.quoter}}
        .intro(v-if="isEng")
            h2 {{text.en.sectionOneTitle}}
            p {{text.en.sectionOne}}
        .intro(v-else)
            h2 {{text.de.sectionOneTitle}}
            p {{text.de.sectionOne}}
            
</template>

<script>
import texts from "~/content/Texts.js"
import liarImg from './liar.jpg'

export default {
    props:{
        isEng:{
            type:Boolean,
            default: false
        }
    },
    data(){
        return{
            text:texts,
            liarImg
        }
    }
}
</script>

<style lang="stylus">
.hero
    width 100%
    min-height 100vh
    display flex
    justify-content center
    align-items center
    position relative
    &::after
        content ''
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-size cover
        background-position center center
        background-image url(./hero1.jpg)
        z-index -1
        opacity .5
    &::before
        content ''
        position absolute
        bottom 0
        left 0
        width 100%
        height 17.5vh
        background-image linear-gradient(to bottom, transparent 0%, $bg 100%)
    .text
        text-align center
        max-width 720px
        padding 2rem
        +bp($bp1)
            margin-top 5rem
        img
            border-radius .3rem
            max-width 520px
            margin 0 auto
        h1
            font-size 10vw
            margin-bottom 0rem
            line-height 1
            letter-spacing 1vw
        h2
            text-transform uppercase
            letter-spacing .8rem
            margin-top 0
        p
            margin 2.4rem 0
            font-size 2rem
            color white
            +bp($bp1)
                font-size 1.4rem
.intro
    section()
    .quote
        blockquote
            color $primary
            line-height 1.6
            text-align center
            margin 3.2rem 2rem 1.6rem 2rem
        small
            text-align center
            display block
</style>
