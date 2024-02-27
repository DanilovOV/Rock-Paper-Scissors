<script setup lang="ts">
import GameButton from './GameButton.vue'
import { gameElements } from '@/gameElements'

defineProps<{ mode: GameMode }>()
const emits = defineEmits<{
	buttonChoosen: [GameEntities]
}>()
</script>

<template>
	<div class="board">
		<div v-if="mode === 'standart'" class="board__standart">
			<GameButton
				:data="gameElements.rock"
				@click="emits('buttonChoosen', 'rock')"
			/>
			<GameButton
				:data="gameElements.paper"
				@click="emits('buttonChoosen', 'paper')"
			/>
			<GameButton
				:data="gameElements.scissors"
				@click="emits('buttonChoosen', 'scissors')"
			/>
		</div>

		<div v-if="mode === 'bonus'" class="board__bonus">
			<GameButton
				:data="gameElements.rock"
				@click="emits('buttonChoosen', 'rock')"
			/>
			<GameButton
				:data="gameElements.paper"
				@click="emits('buttonChoosen', 'paper')"
			/>
			<GameButton
				:data="gameElements.scissors"
				@click="emits('buttonChoosen', 'scissors')"
			/>
			<GameButton
				:data="gameElements.lizard"
				@click="emits('buttonChoosen', 'lizard')"
			/>
			<GameButton
				:data="gameElements.spock"
				@click="emits('buttonChoosen', 'spock')"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__standart,
	&__bonus {
		position: relative;
		width: clamp(210px, 70vw, 400px);
		height: clamp(210px, 70vw, 400px);
	}

	&__standart {
		background: url('/bg-triangle.svg');
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: 50% 40%;

		& > div {
			position: absolute;

			&:nth-child(1) {
				bottom: 15%;
				left: 50%;
				transform: translateX(-50%);
			}

			&:nth-child(2) {
				top: 0;
				left: 0;
			}

			&:nth-child(3) {
				top: 0;
				right: 0;
			}
		}
	}

	&__bonus {
		margin-top: 40px;
		margin-bottom: 50px;
		background: url('/bg-pentagon.svg');
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: 50%;

		@media screen and (max-width: 475px) {
			margin-top: 5px;
			padding-bottom: 0;
		}

		& > div {
			position: absolute;

			&:nth-child(1) {
				top: -10%;
				left: 50%;
				transform: translateX(-50%);
			}

			&:nth-child(2) {
				top: 20%;
				right: -10%;
			}

			&:nth-child(3) {
				bottom: -7%;
				right: 5%;
			}

			&:nth-child(4) {
				bottom: -7%;
				left: 5%;
			}

			&:nth-child(5) {
				top: 20%;
				left: -10%;
			}
		}
	}
}
</style>
