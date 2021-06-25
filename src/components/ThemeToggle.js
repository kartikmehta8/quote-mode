import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// class ThemeToggle extends Component {
// 	static contextType = ThemeContext;

// 	render() {
// 		const { toggleTheme } = this.context;
// 		return <button onClick={toggleTheme}>Toggle the theme</button>;
// 	}
// }

const ThemeToggle = () => {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<button className='toggle-theme' onClick={toggleTheme}>
			Toggle the Theme
		</button>
	);
};

export default ThemeToggle;