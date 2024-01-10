import React,{useState,useEffect} from 'react'
import "../style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

import SwitchTab from '../../../components/switchTabs/switchTab';

import useFetch from '../../../hooks/useFetch';

import Carousel from '../../../components/carousel/Carousel';
const Trending = () => {
        
      // /3/trending/all/{time_window}
           
           const [endPoint,setEndPoint]=useState("day");
          const {data,loading}= useFetch(`/trending/all/${endPoint}`)
          console.log("Checking data in trending" ,data)

         const onTabChange=(tab)=>{
            console.log("Checking tab " ,tab)
             setEndPoint(tab==="Day"?"day":"week");
         };
  return (
        <div className="carouselSection">
              <ContentWrapper>
                  <span className="carouselTitle">Trending</span>
                  <SwitchTab   data={["Day","Week"]}  onTabChange={onTabChange}  />
              </ContentWrapper>

              {/* carousel section  */}
             <Carousel  data={data?.results} loading={loading}  endpoint={endPoint}  />
        </div>
  )
}

export default Trending
