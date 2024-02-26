import { gameElements } from '@/gameElements'

export const getAiSelection = (mode: GameMode) => {
	const selectionNumber = Math.floor(
		Math.random() * (mode === 'standart' ? 2 : 4)
	)
	return Object.keys(gameElements)[selectionNumber] as GameEntities
}
