export default interface ContextProps {
	coins: number;
	killcount: number;
	onEarnCoins: (amount: number) => void;
	onRemoveCoins: (amount: number) => void;
	onKillEnemy: () => void;
}
