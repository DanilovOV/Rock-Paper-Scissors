<script setup lang="ts">
import AppButton from './AppButton.vue'
</script>

<template>
	<aside class="aside">
		<AppButton>Бонус</AppButton>
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
