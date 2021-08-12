import ThemeProvider from "@material-ui/styles/ThemeProvider";

import ImageList from "./components/ImageList";
import SearchForm from "./components/SearchForm";
import theme from './material-ui/theme.js';


function App() {

	return (
	
		<ThemeProvider theme={ theme }>
			<div className="App">

				<SearchForm />

				<ImageList />

			</div>
		</ThemeProvider>
	);
}

export default App;
