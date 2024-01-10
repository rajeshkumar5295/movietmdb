import React, { useState } from 'react'
import "./style.scss";
import DetailBanner from './detailsBanner/DetailBanner';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Cast from './cast/Cast';
import VideoSection from './videoSection/VideoSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendation';




const Detail = () => {
   // console.log("checking useParams",useParams());  //we can directely accesss the useParams() in DetailBanner.jsx  
  const { mediaType, id } = useParams();
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/videos`);
  const { data:credits, loading:creditsLoading  } = useFetch(`/${mediaType}/${id}/credits`);
      // console.log(data,credits)
     
       
  return (
    <div>
      <DetailBanner  video={data?.results?.[0]}  crew={credits?.crew}  />
      <Cast   data={credits?.cast} loading={creditsLoading}   />
      <VideoSection  video={data} loading={loading}    />
      <Similar mediaType={mediaType} id={id}   />
      <Recommendation mediaType={mediaType} id={id} />
      
    
    </div>
  )
}

export default Detail
