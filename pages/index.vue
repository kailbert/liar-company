<template lang="pug">
	.mainpage
		.languageselector(@click="switchlang")
			p(v-if="isEnglish") Deutsch
			p(v-else) English
		div(v-if="isEnglish")
			Hero(isEng)
			Artists(isEng)
			Press(isEng)
		div(v-else)
			Hero
			Artists
			Press
</template>

<script>
import Hero from '~/components/Hero'
import Artists from '~/components/Artists'
import Press from '~/components/Press'

export default{
	transition: 'pageup',
	components:{
		Hero,
		Artists,
		Press
	},
	data(){
		return{
			isEnglish: false
		}
	},
	methods:{
		switchlang: function(){
			this.isEnglish = !this.isEnglish
		}
	}
}
</script>

<style lang="stylus">
.mainpage
	position relative
	.languageselector
		position absolute
		cursor pointer
		padding .8rem 2.4rem
		border 1px solid white
		border-radius 3px
		top 2rem
		right 2rem
		z-index 100
		p
			color white
</style>
