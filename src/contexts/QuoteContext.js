import React, { useState, createContext } from 'react';

export const QuoteContext = createContext();

const QuoteContextProvider = (props) => {
	const [quotes, setQuotes] = useState([
		{
			title:
				'When something is important enough, you do it even if the odds are not in your favour.',
			id: 1,
		},
		{
			title:
				'You should take the approach that you’re wrong. Your goal is to be less wrong.',
			id: 2,
		},
		{
			title:
				'You get paid in direct proportion to the difficulty of problems you solve',
			id: 3,
		},
		{
			title:
				'It is possible for ordinary people to choose to be extraordinary.',
			id: 4,
		},
	]);
	return (
		<QuoteContext.Provider value={{ quotes }}>
			{props.children}
		</QuoteContext.Provider>
	);
};

export default QuoteContextProvider;
