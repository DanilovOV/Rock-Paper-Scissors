<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

interface Props {
	name: string
	width?: number
	height?: number
	stroke?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	width: 20,
	height: 20,
})

const icon = defineAsyncComponent(
	() => import(`../icons/Icon${props.name}.vue`)
)
</script>

<template>
	<component
		:is="icon"
		:class="['svg', stroke ? 'stroke' : 'fill']"
		:style="{ width, height }"
	/>
</template>

<style lang="scss">
.svg {
	&.fill {
		path {
			fill: currentColor;
		}
	}

	&.stroke {
		path {
			stroke: currentColor;
		}
	}
}
</style>
