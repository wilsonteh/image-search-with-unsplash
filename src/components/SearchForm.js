import { Button } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "../material-ui/theme";


const useStyles = makeStyles({
   container: {
      width: '600px',
      margin: theme.spacing(2, 'auto'), 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center', 
   }, 
   search_bar: {
      width: '60%',
      fontSize: '1rem', 
      padding: theme.spacing(1),
      margin: theme.spacing(0, 1, 0, 0),
      boxShadow: theme.shadows[1],
   },
})

const SearchBar = () => {
   
   const classes = useStyles();

   return (
      
      <div className={ classes.container }>
         <input type="text" id="search-bar" className={ classes.search_bar } 
            placeholder='Search image keyword' />
         
         <Button variant='contained' color='primary' > 
            Search 
         </Button>
      </div>   


   );
}
 
export default SearchBar;