<script setup lang="ts">
import AppIcon from './global/AppIcon.vue'
import type { GameElementValue } from '@/gameElements'

defineProps<{ data: GameElementValue }>()
</script>

<template>
	<div class="game-button" :style="{ background: data.color }">
		<AppIcon :name="data.icon" />
	</div>
</template>

<style lang="scss" scoped>
.game-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background: #fff;
}
</style>
