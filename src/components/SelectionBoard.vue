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
			<div>Вы выбрали</div>
			<GameButton :data="gameElements[userChoise]" disabled />
		</div>
		<div class="board__result">
			<div>{{ UiComparsionStatus[winner] }}</div>
			<AppButton @click="emits('restart')">Попробовать снова</AppButton>
		</div>
		<div class="board__choise">
			<div>Компьютер выбрал</div>
			<GameButton :data="gameElements[aiChoise]" disabled />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.board {
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__choise {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	&__result {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
	}
}
</style>
