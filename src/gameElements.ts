interface GameElement {
	src: string
	color: GameColors
}

export const gameElements: { [key in GameEntities]: GameElement } = {
	rock: { src: '/icon-rock.svg', color: 'var(--rock-gradient)' },
	paper: { src: '/icon-paper.svg', color: 'var(--paper-gradient)' },
	scissors: { src: '/icon-scissors.svg', color: 'var(--scissors-gradient)' },
	lizard: { src: '/icon-lizard.svg', color: 'var(--lizard-gradient)' },
	spock: { src: '/icon-spock.svg', color: 'var(--spock-gradient)' },
}

type GameElements = typeof gameElements
export type GameElementValue = GameElements[keyof GameElements]
