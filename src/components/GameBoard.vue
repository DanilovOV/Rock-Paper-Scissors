<script setup lang="ts">
import GameButton from './GameButton.vue'
import { gameElements } from '@/gameElements'

defineProps<{ mode: GameMode }>()
</script>

<template>
	<div class="board">
		<div v-if="mode === 'standart'" class="board__standart">
			<GameButton :data="gameElements.Rock" />
			<GameButton :data="gameElements.Paper" />
			<GameButton :data="gameElements.Scissors" />
		</div>

		<div v-if="mode === 'bonus'" class="board__bonus">
			<GameButton :data="gameElements.Rock" />
			<GameButton :data="gameElements.Paper" />
			<GameButton :data="gameElements.Scissors" />
			<GameButton :data="gameElements.Lizard" />
			<GameButton :data="gameElements.Spock" />
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
		background: url('/bg-pentagon.svg');
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: 50%;

		@media screen and (max-width: 475px) {
			margin-top: 5px;
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
