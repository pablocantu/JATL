export default interface ContextProps {
	coins: number;
	onEarnCoins: (amount: number) => void;
	onRemoveCoins: (amount: number) => void;
}
