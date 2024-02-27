<script setup lang="ts">
import type { GameElementValue } from '@/gameElements'

defineProps<{ data: GameElementValue; disabled?: boolean; big?: boolean }>()
</script>

<template>
	<div
		:class="['game-button', { disabled, big }]"
		:style="{ background: data.color }"
	>
		<div class="game-button__inner">
			<img :src="data.src" class="game-button__img" draggable="false" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.game-button {
	$this: &;
	display: flex;
	justify-content: center;
	align-items: center;
	width: clamp(90px, 30vw, 155px);
	height: clamp(90px, 30vw, 155px);
	border-radius: 50%;
	box-shadow: inset 0 -4px 2px 1px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	user-select: none;

	&.disabled {
		pointer-events: none;
	}

	&.big {
		width: clamp(90px, 30vw, 255px);
		height: clamp(90px, 30vw, 255px);
	}

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
		width: 80%;
		height: 80%;
		border-radius: 50%;
		background: var(--c-white);
		color: var(--c-dark);
		box-shadow: inset 0 4px 2px 1px rgba(0, 0, 0, 0.2);
		transition: all 0.3s ease;
	}

	&__img {
		width: 50%;
	}
}
</style>
