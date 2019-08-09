<template lang="pug">
    .artists(v-if="isEng")
        h2 The Artists
        .artist(v-for="a in artists")
            h4 {{a.title}}
            p {{a.textEN}}
    .artists(v-else)
        h2 Die Künstler
        .artist(v-for="a in artists")
            h4 {{a.title}}
            p {{a.textDE}}
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
            artists:texts.artists,
        }
    }
}
</script>

<style lang="stylus">
.artists
    section()
    .artist
        margin-top 3.2rem
</style>
