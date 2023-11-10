import axios from 'axios';

export const baseUrl = 'https://api.themoviedb.org/3'
export const baseImgUrl = 'https://image.tmdb.org/t/p/w300'
export const header = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDEwMTM5NmI2MGZjNDAxNGJlMmY5YjgxMDQ4ZjdkZSIsInN1YiI6IjY1NGNlNjcwMjg2NmZhMTA5MjhiNzM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qh8u02zNoddsNEvbyCVQtpON2_TkesRM15UBGiJXQl0'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDEwMTM5NmI2MGZjNDAxNGJlMmY5YjgxMDQ4ZjdkZSIsInN1YiI6IjY1NGNlNjcwMjg2NmZhMTA5MjhiNzM3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qh8u02zNoddsNEvbyCVQtpON2_TkesRM15UBGiJXQl0'
    }
  };
  
//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// export default FetchAPi
// const response = await axios.get(`http://18.141.56.154:8000/admin/classes/tickets?page=${page}`, {
//                         headers: {
//                             'Authorization': `Bearer ${token}`
//                         }
//                     });