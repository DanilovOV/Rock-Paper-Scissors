<script setup lang="ts">
import GameBoard from './components/GameBoard.vue'
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

const getMode = (): GameMode => {
	return (localStorage.getItem('rps-score') as GameMode) || 'standart'
}

const setMode = (value: GameMode) => {
	localStorage.setItem('rps-score', String(value))
	gameMode.value = value
}

const toggleMode = () => {
	setMode(gameMode.value === 'standart' ? 'bonus' : 'standart')
}

onMounted(() => {
	gameMode.value = getMode()
	score.value = getScore()
})
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<div class="game">
				<TheHeader :score="score" :mode="gameMode" />
				<GameBoard :mode="gameMode" class="game__board" />
				<TheAside :mode="gameMode" @change-mode="toggleMode" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	height: 100%;
	padding: 60px 0;
}

.container {
	max-width: min(80vw, 800px);
	height: 100%;
	margin: 0 auto;
}

.game {
	display: flex;
	flex-direction: column;
	height: 100%;

	&__board {
		flex: 1;
		margin-top: 40px;
	}
}
</style>
