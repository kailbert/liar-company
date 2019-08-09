<template lang="pug">
    p Your IP is: {{mydata}}
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            mydata: "placeholder will be replaced by created axios"
        }
    },
   created(){
        axios.get('http://icanhazip.com')
            .then(res => this.mydata = res.data)
            .catch(err => console.log(err))
    }
}
</script>

<style lang="stylus" scoped>

</style>
