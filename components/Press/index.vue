<template lang="pug">
    .press(v-if="isEng")
        h3 Press
        ul(v-for="i in text.press")
            li
                a(:href="i.link" target="_blank") {{i.titleEN}}
    .press(v-else)
        h3 Presse
        ul(v-for="i in text.press")
            li
                a(:href="i.link" target="_blank") {{i.titleDE}}
</template>

<script>
import texts from "~/content/Texts.js"

export default {
    props:{
        isEng:{
            type:Boolean,
            default: false
        }
    },
    data(){
        return{
            text:texts
        }
    }
}
</script>

<style lang="stylus">
.press
    section()
</style>

