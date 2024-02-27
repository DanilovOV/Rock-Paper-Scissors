<script setup lang="ts">
import { ref } from 'vue'
import AppButton from './AppButton.vue'
import RulesDialog from './RulesDialog.vue'

const props = defineProps<{ mode: GameMode }>()

const isOpenRules = ref(false)
const emits = defineEmits<{
	changeMode: []
	restart: []
}>()

const openRulesModal = () => {
	isOpenRules.value = true
}
</script>

<template>
	<aside class="aside">
		<AppButton @click="emits('restart')">Рестарт</AppButton>
		<AppButton @click="emits('changeMode')">{{
			props.mode === 'standart' ? 'Бонус' : 'Стандарт'
		}}</AppButton>
		<AppButton @click="openRulesModal">Правила</AppButton>
	</aside>

	<RulesDialog :mode="mode" v-model="isOpenRules" />
</template>

<style scoped lang="scss">
.aside {
	position: fixed;
	right: 30px;
	bottom: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@media screen and (max-width: 1280px) {
		position: static;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		margin-top: 60px;
	}
}
</style>
