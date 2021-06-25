import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { QuoteContext } from '../contexts/QuoteContext';

//class QuoteList extends Component {
//	static contextType = ThemeContext;
//
//	render() {
//		const { isLightTheme, light, dark } = this.context;
//		const theme = isLightTheme ? light : dark;
//		return (
//			<div
//				className='book-list'
//				style={{ color: theme.syntax, background: theme.bg }}
//			>
//				<ul>
//					<li style={{ background: theme.ui }}>Oliver Twist</li>
//					<li style={{ background: theme.ui }}>Adventure of Tom Sawyer</li>
//					<li style={{ background: theme.ui }}>Adventure of Huckleberry Fin</li>
//				</ul>
//			</div>
//		);
//	}
//}

const QuoteList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const { quotes } = useContext(QuoteContext);
	const theme = isLightTheme ? light : dark;
	return (
		<div
			className='quote-list'
			style={{ color: theme.syntax, background: theme.bg }}
		>
			<ul>
				{quotes.map((quote) => {
					return (
						<li key={quote.id} style={{ background: theme.ui }}>
							{quote.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default QuoteList;
