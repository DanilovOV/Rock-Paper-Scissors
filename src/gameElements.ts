interface GameElement<T extends GameIcons> {
	icon: T
	color: GameColors
}

export const gameElements: { [key in GameIcons]: GameElement<key> } = {
	Rock: { icon: 'Rock', color: 'var(--rock-gradient)' },
	Paper: { icon: 'Paper', color: 'var(--paper-gradient)' },
	Scissors: { icon: 'Scissors', color: 'var(--scissors-gradient)' },
	Lizard: { icon: 'Lizard', color: 'var(--lizard-gradient)' },
	Spock: { icon: 'Spock', color: 'var(--spock-gradient)' },
}

type GameElements = typeof gameElements
export type GameElementValue = GameElements[keyof GameElements]
