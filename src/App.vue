<script setup lang="ts">
import TheAside from './components/TheAside.vue'
import TheHeader from './components/TheHeader.vue'
import { onMounted, ref } from 'vue'

const gameMode = ref<GameMode>('standart')
const score = ref<number>(0)

const getScore = (): number => {
	return Number(localStorage.getItem('rps-score')) | 0
}

const setScore = (newScore: number) => {
	localStorage.setItem('rps-score', String(newScore))
	score.value = newScore
}

const changeMode = () => {
	gameMode.value = gameMode.value === 'standart' ? 'bonus' : 'standart'
	setScore(0)
}

onMounted(() => {
	score.value = getScore()
})
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<TheHeader :score="score" :mode="gameMode" />

			<TheAside :mode="gameMode" @change-mode="changeMode" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	padding: 60px 0;
}
.container {
	max-width: min(80vw, 800px);
	margin: 0 auto;
}
</style>
