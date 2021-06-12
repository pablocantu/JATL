import { ThemeType } from 'types';

export default interface ContextProps {
	theme: ThemeType;
	setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
