import React, { Component } from 'react';
import Navbar from './components/Navbar';
import QuoteList from './components/QuoteList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import QuoteContextProvider from './contexts/QuoteContext';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<ThemeContextProvider>
					<AuthContextProvider>
						<Navbar />
						<QuoteContextProvider>
							<QuoteList />
						</QuoteContextProvider>
						<ThemeToggle />
					</AuthContextProvider>
				</ThemeContextProvider>
			</div>
		);
	}
}

export default App;
