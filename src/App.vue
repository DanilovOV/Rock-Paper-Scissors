<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import { ref } from 'vue'

const score = ref<number>(0)
</script>

<template>
	<div class="wrapper">
		<div class="container">
			<TheHeader :score="score" :mode="'bonus'" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	margin: 60px 0;
}
.container {
	max-width: min(80vw, 800px);
	margin: 0 auto;
}
</style>
