<script setup lang="ts">
import bonusLogo from '@/assets/icons/logo-bonus.svg'
import logo from '@/assets/icons/logo.svg'

const props = defineProps<{
	score: number
	mode: GameMode
}>()
</script>

<template>
	<section class="header">
		<h1 class="header__title">
			<img
				:src="mode === 'standart' ? logo : bonusLogo"
				alt="Rock, Paper, Scissors logo"
				class="header__title-img"
			/>
		</h1>

		<div class="header__score">
			<h2 class="header__score-label">Счет</h2>
			<span class="header__score-value">{{ props.score }}</span>
		</div>
	</section>
</template>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
	margin-bottom: 40px;
	padding: 0 30px;
	border: 2px solid #46556f;
	border-radius: 10px;

	@media screen and (max-width: 475px) {
		padding: 0 15px;
	}

	&__title {
		display: flex;
		align-items: center;
	}

	&__title-img {
		max-height: 100px;

		@media screen and (max-width: 475px) {
			max-height: 70px;
		}
	}

	&__score {
		display: flex;
		flex-flow: column nowrap;

		background-color: white;
		text-align: center;
		padding: 20px 35px;
		margin: 20px 0;
		border-radius: 0.25em;
		line-height: 0.9;
		gap: 0.2em;

		@media screen and (max-width: 475px) {
			padding: 10px 17px;
		}
	}

	&__score-label {
		color: #0027c5;
		font-weight: bold;
		font-size: 15px;
		text-transform: uppercase;
		letter-spacing: 0.3px;
	}

	&__score-value {
		margin-top: 4px;
		font-size: 40px;
		color: #3a4262;

		@media screen and (max-width: 475px) {
			font-size: 30px;
		}
	}
}
</style>
