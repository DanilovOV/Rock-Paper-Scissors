<script setup lang="ts">
import GameBoard from './components/GameBoard.vue'
import SelectionBoard from './components/SelectionBoard.vue'
import TheAside from './components/TheAside.vue'
import TheHeader from './components/TheHeader.vue'
import { onMounted, ref } from 'vue'

const score = ref<number>(0)
const getScore = (): number => {
	return Number(localStorage.getItem('rps-score')) | 0
}
const setScore = (newScore: number) => {
	localStorage.setItem('rps-score', String(newScore))
	score.value = newScore
}

const isComparsion = ref(false)
const handleComparsion = (status: ComparsionStatus) => {
	if (status === 'Draw') return
	if (status === 'User') setScore(getScore() + 1)
	if (status === 'AI') setScore(getScore() - 1)
}

const userChoise = ref<GameEntities>()
const handleUserChoise = (choise: GameEntities) => {
	userChoise.value = choise
	isComparsion.value = true
}

const gameMode = ref<GameMode>('standart')
const getMode = (): GameMode => {
	return (localStorage.getItem('rps-mode') as GameMode) || 'standart'
}
const setMode = (value: GameMode) => {
	localStorage.setItem('rps-mode', value)
	gameMode.value = value
}
const toggleMode = () => {
	setMode(gameMode.value === 'standart' ? 'bonus' : 'standart')
	setScore(0)
	isComparsion.value = false
}

const restart = () => {
	setScore(0)
	isComparsion.value = false
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
				<GameBoard
					v-if="!isComparsion"
					:mode="gameMode"
					class="game__board"
					@button-choosen="handleUserChoise"
				/>
				<SelectionBoard
					v-else
					:mode="gameMode"
					:user-choise="userChoise"
					@comparsion="handleComparsion"
					@restart="isComparsion = false"
				/>
				<TheAside
					:mode="gameMode"
					@change-mode="toggleMode"
					@restart="restart"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	min-height: 100%;
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
	}
}
</style>
