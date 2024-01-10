import React from 'react'
import "./style.scss"; 
import { useSelector } from 'react-redux';
   

const Genres = ( {data} ) => { 
      // console.log("checking data" ,data);
          
      const homeReducer=useSelector((state)=>state.homeReducer);
       const {genres}=homeReducer;
      //  console.log(genres)

  return (
    <div className='genres'> 
         {
             data?.map((g)=>{  
                return (
                    <div  key={g}  className="genre">
                              {genres[g]?.name}
                    </div>
                )
                
             })
         }
      
    </div>
  )
}

export default Genres
