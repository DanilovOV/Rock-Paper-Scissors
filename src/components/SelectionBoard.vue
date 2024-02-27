<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gameElements } from '@/gameElements'
import { getAiSelection } from '@/utils/getAiSelection'
import GameButton from './GameButton.vue'
import selectWinner from '@/utils/selectWinner'
import { UiComparsionStatus } from '@/global.elements'
import AppButton from './AppButton.vue'

const props = defineProps<{
	mode: GameMode
	userChoise: GameEntities | undefined
}>()
const emits = defineEmits<{
	comparsion: [ComparsionStatus]
	restart: []
}>()

const aiChoise = ref<GameEntities>()
const winner = ref<ComparsionStatus>()
onMounted(() => {
	aiChoise.value = getAiSelection(props.mode)

	if (props.userChoise) {
		winner.value = selectWinner(props.userChoise, aiChoise.value)
		emits('comparsion', winner.value)
	}
})
</script>

<template>
	<div v-if="userChoise && aiChoise && winner" class="board">
		<div class="board__choise">
			<div class="board__choise-text">Вы выбрали</div>
			<GameButton
				:data="gameElements[userChoise]"
				:class="{ winner: winner === 'User' }"
				disabled
				big
			/>
		</div>
		<div class="board__result">
			<div class="board__result-text">{{ UiComparsionStatus[winner] }}</div>
			<AppButton @click="emits('restart')" :type="'filled'"
				>Играть снова</AppButton
			>
		</div>
		<div class="board__choise">
			<div class="board__choise-text">
				Компьютер <br />
				выбрал
			</div>
			<GameButton
				:data="gameElements[aiChoise]"
				:class="{ winner: winner === 'AI' }"
				disabled
				big
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board {
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (max-width: 1024px) {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	&__choise {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}

	&__choise-text {
		display: flex;
		align-items: center;
		height: 40px;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;

		@media screen and (max-width: 475px) {
			font-size: 14px;
		}
	}

	&__result {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		text-transform: uppercase;
		letter-spacing: 2px;

		@media screen and (max-width: 1024px) {
			grid-column: 1/ 3;
			grid-row: 2 / 3;
			justify-self: center;
			margin-top: 40px;
		}
	}

	&__result-text {
		font-size: 26px;

		@media screen and (max-width: 475px) {
			font-size: 22px;
		}
	}
}

.winner {
	border-radius: 100%;
	z-index: -1;
	box-shadow: 0 0 3px 50px rgba(255, 255, 255, 0.03),
		0 0 3px 120px rgba(255, 255, 255, 0.03),
		0 0 3px 190px rgba(255, 255, 255, 0.03);

	@media screen and (max-width: 475px) {
		box-shadow: 0 0 3px 20px rgba(255, 255, 255, 0.03),
			0 0 3px 50px rgba(255, 255, 255, 0.03),
			0 0 3px 80px rgba(255, 255, 255, 0.03);
	}
}
</style>
