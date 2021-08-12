import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import useUnsplash from '../hooks/useUnsplash.js';
import theme from '../material-ui/theme.js';

const useStyles = makeStyles({
   image_list: {
      // backgroundColor: 'purple',
      width: theme.breakpoints.values.lg,
      margin: theme.spacing(0, 'auto'),
      display: 'grid',
      gridGap: theme.spacing(2),
      gridTemplateColumns: '1fr 1fr 1fr',
   }, 
   image_wrapper: {
      border: '2px dashed black',
   },
   image: {
      width: '100%',
      height: '100%',
   }
})

const ImageList = () => {

   const classes = useStyles();
   // const [ images, setImages ] = useState(null);
   const { data: images, error, isLoading } = useUnsplash('laptop');

   console.log(images)

   return (
      <div className={ classes.image_list }>

         { isLoading && <div> Loading ... </div> }
         { error && <div> ERROR! </div> }
         
         {/* each individual image */}
         { images && images.map((image) => (
            <div className={ classes.image_wrapper } key={ image.id }>
               <img src={ image.urls.regular } className={ classes.image } alt="" />
            </div>
         ))}

      </div>    
   )


}
 
export default ImageList;