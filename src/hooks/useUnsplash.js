import { useState } from "react";
import { useEffect } from "react";
import unsplashApi from '../api/unsplash.js';

// search for all photos based on query
const useUnsplash = (query) => {

   const [ data, setData ] = useState(null);
   const [ error, setError ] = useState(null);
   const [ isLoading, setIsLoading ] = useState(true);

   // search for image with corresponding keywords 
   useEffect(() => {
      unsplashApi.search.getPhotos({ query,  orientation: 'landscape' })
         .then(data => {
            const imageData = data.response.results;
            setData(imageData);
            setIsLoading(false);
         })
         .catch((err) => {
            console.log("ERROR!", err);
            setError(error)
         })
   }, [ query ])

   return { data, error, isLoading };
}
 
export default useUnsplash;