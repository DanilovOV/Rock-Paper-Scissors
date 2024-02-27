<script setup lang="ts">
type ButtonTypes = 'default' | 'filled'

withDefaults(defineProps<{ type?: ButtonTypes }>(), {
	type: 'default',
})
</script>

<template>
	<button :class="['button', type]"><slot /></button>
</template>

<style lang="scss" scoped>
.button {
	padding: 10px 20px;
	border: 2px solid var(--c-white);
	border-radius: 15px;
	color: var(--c-text-base);
	transition: color 0.3s ease, background 0.3s ease;
	font-weight: bold;

	&:hover {
		background: var(--c-white);
		color: var(--c-text-dark);
	}

	&.filled {
		background: var(--c-white);
		color: var(--c-text-dark);

		&:hover {
			background: transparent;
			color: var(--c-text-base);
		}
	}
}
</style>
