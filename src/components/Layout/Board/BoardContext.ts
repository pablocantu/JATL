import Todo from 'models/Todo';
import Hero from 'models/Hero';

export default interface ContextProps {
	todos: Todo[];
	heroes: Hero[];
	hero: Hero;
	onAddTodo: (todo: Todo) => void;
	onCheckTodo: (id: string) => void;
	onRemoveTodo: (id: string) => void;
	onRestoreTodo: (id: string) => void;
	onClearCompleted: () => void;
	onSelectHero: (hero: Hero) => void;
	onUnlockHero: (hero: Hero) => void;
}
