import ThemeProvider from "@material-ui/styles/ThemeProvider";
import SearchForm from "./components/SearchForm";
import theme from './material-ui/theme.js';

function App() {
	
	return (
	
		<ThemeProvider theme={ theme }>
			<div className="App">

				<SearchForm />

			</div>
		</ThemeProvider>
	);
}

export default App;
