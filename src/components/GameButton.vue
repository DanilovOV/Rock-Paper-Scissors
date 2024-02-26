<script setup lang="ts">
import AppIcon from './global/AppIcon.vue'
import type { GameElementValue } from '@/gameElements'

defineProps<{ data: GameElementValue }>()
</script>

<template>
	<div class="game-button" :style="{ background: data.color }">
		<div class="game-button__inner">
			<AppIcon :name="data.icon" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.game-button {
	$this: &;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 125px;
	height: 125px;
	border-radius: 50%;
	box-shadow: inset 0 -4px 2px 1px rgba(0, 0, 0, 0.3);
	cursor: pointer;

	&:hover {
		#{$this}__inner {
			opacity: 0.85;
			box-shadow: inset 0 4px 4px 4px rgba(0, 0, 0, 0.2);
		}
	}

	&__inner {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: var(--c-white);
		color: var(--c-dark);
		box-shadow: inset 0 4px 2px 1px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}
}
</style>
