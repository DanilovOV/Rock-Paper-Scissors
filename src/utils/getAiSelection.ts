import { gameElements } from '@/gameElements'

export const getAiSelection = (mode: GameMode) => {
	const selectionNumber = Math.floor(
		Math.random() * (mode === 'standart' ? 3 : 5)
	)

	return Object.keys(gameElements)[selectionNumber] as GameEntities
}
