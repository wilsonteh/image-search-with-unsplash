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
      // user hasn't enter anything in the search bar 
      // typically when the website is first loaded
      if (!query) {
         unsplashApi.search.getPhotos({ 
            query: 'photos', orientation: 'landscape', perPage: 30
         })
            .then(data => {
               console.log(data.response.results);
               const imageData = data.response.results;
               setData(imageData);
            })
            .catch(err => {
               console.error("Error when fetching random images")
               console.log(err);
            })
      } else {
         unsplashApi.search.getPhotos({ 
            query,  orientation: 'landscape', page: 1, perPage: 30  
         })
            .then(data => {
               const imageData = data.response.results;
               setData(imageData);
               setIsLoading(false);
            })
            .catch((err) => {
                  console.error("Error when fetching images with query")
                  setError(err)
            })
      }
      
   }, [ query ])

   return { data, error, isLoading };
}
 
export default useUnsplash;