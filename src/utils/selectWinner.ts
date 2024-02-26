import { loses } from '@/brackets'

export default function selectWinner(
	userValue: GameEntities,
	aiValue: GameEntities
): ComparsionStatus {
	if (userValue === aiValue) {
		return 'Draw'
	} else if (loses[userValue].includes(aiValue)) {
		return 'AI'
	} else {
		return 'User'
	}
}
