<script setup lang="ts">
import AppButton from './AppButton.vue'
const props = defineProps<{ mode: GameMode }>()
const emits = defineEmits<{
	changeMode: []
}>()
</script>

<template>
	<aside class="aside">
		<AppButton @click="emits('changeMode')">{{
			props.mode === 'standart' ? 'Стандарт' : 'Бонус'
		}}</AppButton>
		<AppButton>Правила</AppButton>
	</aside>
</template>

<style scoped lang="scss">
.aside {
	position: fixed;
	right: 30px;
	bottom: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
