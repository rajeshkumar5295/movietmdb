import axios from 'axios'

const BASE_URL='https://api.themoviedb.org/3';

// const token=import.meta.env.VITE_APP_TMDB_TOKEN;
const token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWQ0ODQ4N2QxMjkzZjUwNWVhOGU5MTRlOGFjNmQxMSIsInN1YiI6IjY1OGMwMjczNGQyM2RkMDcyYmM1MTZhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nxTY-xe8w5h1gspcv3Zn5LiW2DVAfjmP0WY0-Q47Vyw"

// const config={
//     'Content-Type':"application/json",
//     headers:{
//         Authorization:`bearer ${token}`
//     }
// }

const headers={
    Authorization:`bearer ${token}`
}
  
// const headers={
//     Authorization:"bearer " + token,
// }
// console.log("checking token ",token)


 export const fetchDatafromApi=async(url,params)=>{
    try {
             
            // console.log("checking url",url);
            console.log("checking params",params)
        const {data}=await axios.get(`${BASE_URL}${url}`,{headers,params})
        // const {data}=await axios.get(BASE_URL + url,{headers,params});

        return data ;
        
    } catch (error) { 
        console.log(error)
        return error
        
    }
}