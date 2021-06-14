import Enemy from './Enemy';

export default interface Todo {
	id: string;
	title: string;
	completed: boolean;
	enemy: Enemy;
}
