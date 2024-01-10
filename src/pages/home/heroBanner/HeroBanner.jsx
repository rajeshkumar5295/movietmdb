import React from 'react'
import "./style.scss";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector,useDispatch } from 'react-redux';
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyloadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {


  const navigate=useNavigate();
  const [query,setQuery]=useState("");
  const [background,setBackground]=useState("");

  // useFetch hookes (fetching upcoming moving)
    const {data,error,loading}=useFetch("/movie/upcoming");
    console.log("checking useFetch data",data);

    const homeReducer=useSelector((state)=>state.homeReducer);
    const {url}=homeReducer;
    console.log(url)
    
   useEffect(()=>{
         
          const bg= url?.backdrop +
          data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
          setBackground(bg);
         

   },[data,url])
   console.log("checking backdrop_path",background)


  const searchQueryHandler=(e)=>{
          console.log("checking evern on keyUp",e);

          if(e.key==="Enter" && query?.length>0){
            navigate(`/search/${query}`);
          }
  }


  console.log( "checking query " ,query,query.length)
  return (
    <div className="heroBanner">
       {/* //background img */}
          {
             !loading && <div className="backdrop-img">
             <Img src={background} />
             </div>
          }

          <div className="opacity-layer"></div>
      <ContentWrapper>
    
         <div className="heroBannerContent">
             <span className="title">Welcome </span>
             <span className="subTitle">
               Millions of movies, TV shows and people to discover.
               Explore now.
             </span>
             <div className="searchInput">
               <input 
               type="text"
               placeholder='Search for a movie or tv show...'
                onChange={(e)=>setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                />
                <button>Search </button>
             </div>
         </div>
  
      </ContentWrapper>
</div>
  )
}

export default HeroBanner
