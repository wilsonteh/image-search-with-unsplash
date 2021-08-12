import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { useState } from "react";

import ImageList from "./components/ImageList";
import SearchForm from "./components/SearchForm";
import theme from './material-ui/theme.js';


function App() {

   const [ searchQuery, setSearchQuery ] = useState(null);

	console.log(searchQuery)

	return (
	
		<ThemeProvider theme={ theme }>
			<div className="App">

				<SearchForm setSearchQuery={ setSearchQuery } />

				<ImageList searchQuery={ searchQuery } />

			</div>
		</ThemeProvider>
	);
}

export default App;
