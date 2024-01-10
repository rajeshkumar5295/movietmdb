import React,{useState,useEffect} from 'react'
import "../style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import SwitchTab from '../../../components/switchTabs/SwitchTab';

import useFetch from '../../../hooks/useFetch';

import Carousel from '../../../components/carousel/Carousel';
const TopRated = () => {
        
      // /3/trending/all/{time_window}
           
           const [endPoint,setEndPoint]=useState("movie");
          const {data,loading}= useFetch(`/${endPoint}/top_rated`)
        //   console.log("Checking data in trending" ,data)

         const onTabChange=(tab)=>{
            console.log("Checking tab " ,tab)
             setEndPoint(tab==="Movies"?"movie":"tv");
         };
  return (
        <div className="carouselSection">
              <ContentWrapper>
                  <span className="carouselTitle">Top Rated</span>
                  <SwitchTab   data={["Movies","Tv Shows"]}  onTabChange={onTabChange}  />
              </ContentWrapper>

              {/* carousel section  */}
             <Carousel  data={data?.results} loading={loading} endpoint={endPoint}  />
        </div>
  )
}

export default TopRated ;
