<script setup lang="ts">
import { computed } from 'vue'

import imgRules from '@/assets/icons/image-rules.svg'
import imgBonus from '@/assets/icons/image-rules-bonus.svg'
import AppIcon from './global/AppIcon.vue'

const props = defineProps<{
	mode: GameMode
}>()

const emits = defineEmits<{
	close: []
}>()

const rulesText = computed((): string =>
	props.mode === 'standart'
		? 'Бумага побеждает камень, Камень побеждает ножницы, Ножницы побеждают бумагу'
		: 'Ножницы побеждают бумагу, Бумага побеждает камень, Рок побеждает Ящерицу, Ящерица побеждает Спока, Спок побеждает Ножницы, Ножницы побеждают Ящерицу, Бумага побеждает Спока, Камень побеждает ножницы, Ящерица побеждает бумагу, Спок побеждает Рока'
)

const isOpen = defineModel<Boolean>()

const closeModal = () => {
	isOpen.value = false
}
</script>

<template>
	<div :class="['dialog', { open: isOpen }]" @click.self="closeModal">
		<div class="dialog__inner">
			<h3 class="dialog__title">Правила</h3>

			<img
				:src="mode === 'standart' ? imgRules : imgBonus"
				:alt="rulesText"
				class="dialog__img"
				draggable="false"
			/>

			<button class="dialog__close" @click="closeModal">
				<AppIcon name="Close" stroke />
			</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.dialog {
	$this: &;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);

	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s ease;

	&.open {
		opacity: 1;
		pointer-events: all;
		transform: none;

		#{$this}__inner {
			transform: none;
		}
	}

	&__inner {
		position: relative;
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		padding: 24px;
		background-color: var(--c-white);
		border-radius: 32px;

		transform: translateY(-30px);
		transition: transform 0.3s ease;
	}

	&__title {
		margin-bottom: 20px;
		color: var(--c-text-dark);
		font-size: 24px;
		font-weight: bold;
		text-align: center;
		text-transform: uppercase;
	}

	&__img {
		max-width: 300px;
	}

	&__close {
		padding: 16px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: transparent;
		color: #b5b8c8;
		transition: color 0.3s ease;

		&:hover {
			color: var(--c-dark);
		}
	}
}
</style>
