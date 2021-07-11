import axios from 'axios'

export const FETCH_MOVIES_BEGIN   = 'FETCH_MOVIES_BEGIN';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesBegin = () => ({
    type: FETCH_MOVIES_BEGIN
  });
 
 export const fetchMoviesSuccess = movies => ({
   type: FETCH_MOVIES_SUCCESS,

   
   payload:  movies 
 });
 
 export const fetchMoviesFailure = error => ({
   type: FETCH_MOVIES_FAILURE,
   payload: { error }
 });

 export function fetchMovies(){
   console.log("in fetchMovies!!")
   return dispatch=>{
     dispatch(fetchMoviesBegin());
    /*** IP Address***/
    return axios.get('http://192.1.1.1:6700/latestmovies')
    /*** Localhost Address***/
    //return axios.get('http://localhost:6700/latestmovies')
     .then(resp=>{
       const movies= resp.data;
       dispatch(fetchMoviesSuccess(movies))
     })
     .catch(error=>{
       dispatch(fetchMoviesFailure(error.message))
     })

   }
 }

 