import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../material-ui/theme";

const useStyles = makeStyles({
   container: {
      width: '600px',
      margin: '2rem auto', 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', 
   }, 
   search_bar: {
      width: '60%',
      fontSize: '1rem', 
      padding: '0.5rem',
      margin: '0 0.5rem 0 0',
      boxShadow: theme.shadows[1],
   },
})

const SearchForm = ({ setSearchQuery }) => {
   
   const classes = useStyles();

   const handleSearch = (e) => {
      // target is button
      if (e.target.localName === 'button') {
         const searchBar = e.target.previousSibling; 
         setSearchQuery(searchBar.value)
      } 
      // target is label
      else if (e.target.localName === 'span') {
         const searchBar = e.target.parentElement.previousSibling;
         setSearchQuery(searchBar.value)
      }
   }


   return (
      
      <div className={ classes.container }>
         <input type="text" id="search-bar" className={ classes.search_bar } 
            placeholder='Search image keyword' />
         
         <Button variant='contained' color='primary' onClick={ handleSearch } > 
            Search 
         </Button>
      </div>   

   );
}
 
export default SearchForm;