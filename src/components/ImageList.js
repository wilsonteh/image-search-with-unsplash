import { makeStyles } from '@material-ui/core';
import useUnsplash from '../hooks/useUnsplash.js';
import theme from '../material-ui/theme.js';

const useStyles = makeStyles({
   image_list: {
      // backgroundColor: 'purple',
      width: '1080px',
      margin: '2rem auto',
      display: 'grid',
      gridGap: '4rem 1rem',
      gridTemplateColumns: 'repeat(3, 1fr)',
      // gridAutoRows: '1fr',
   }, 
   card_wrapper: {
      boxSizing: 'border-box',
   },
   image: {
      width: '100%',
      height: '100%',
      cursor: 'pointer',
      opacity: '0.9',   
      border: '1px solid black',
      boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
      '&:hover': {
         opacity: '1',
      }
   },
   posted: {
      opacity: '.6',
   }, 
   username: {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
      '&:hover': {
         textDecoration: 'underline',
      }
   }


})

const ImageList = ({ searchQuery }) => {

   const classes = useStyles();
   const { data: images, error, isLoading } = useUnsplash(searchQuery);

   console.log(images);

   return (
      <div className={ classes.image_list }>

         { !images && isLoading && <div> Loading ... </div> }
         { !isLoading && error && <div> ERROR! </div> }
         
         {/* each individual image */}
         { images && images.map((image) => (
         
            <div className={ classes.card_wrapper } key={ image.id }>
               <img src={ image.urls.regular } className={ classes.image } alt={ image.alt_description } />
               <div className={ classes.posted }> 
                  Posted by: <a href="/" className={ classes.username }> { image.user.username} </a>
               </div>
            </div>

         ))}

      </div>    
   )

}
 
export default ImageList;