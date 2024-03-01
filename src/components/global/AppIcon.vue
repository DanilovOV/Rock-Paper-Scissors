<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

interface Props {
	name: string
	width?: number
	height?: number
	stroke?: boolean
	size?: number
	nativeSize?: boolean
}
const defaultSize = 20
const props = defineProps<Props>()

const iconWidth = computed(() => {
	return (
		props.size || props.width || (props.nativeSize ? undefined : defaultSize)
	)
})

const iconHeight = computed(() => {
	return (
		props.size || props.height || (props.nativeSize ? undefined : defaultSize)
	)
})

const icon = defineAsyncComponent(
	() => import(`../icons/Icon${props.name}.vue`)
)
</script>

<template>
	<component
		:is="icon"
		:class="['svg', stroke ? 'stroke' : 'fill']"
		:style="{ width: iconWidth, height: iconHeight }"
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
