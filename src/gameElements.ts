interface GameElement {
	src: string
	color: GameColors
}

export const gameElements: { [key in GameIcons]: GameElement } = {
	Rock: { src: '/icon-rock.svg', color: 'var(--rock-gradient)' },
	Paper: { src: '/icon-paper.svg', color: 'var(--paper-gradient)' },
	Scissors: { src: '/icon-scissors.svg', color: 'var(--scissors-gradient)' },
	Lizard: { src: '/icon-lizard.svg', color: 'var(--lizard-gradient)' },
	Spock: { src: '/icon-spock.svg', color: 'var(--spock-gradient)' },
}

type GameElements = typeof gameElements
export type GameElementValue = GameElements[keyof GameElements]
