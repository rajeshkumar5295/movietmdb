import React, { useState } from 'react';
import "./style.scss";
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { PlayIcon } from '../PlayButton';
import Img from '../../../components/lazyloadImage/Img';
import VideoPopUp from '../../../components/videoPopUp/VideoPopUp';


const VideoSection = ({video,loading}) => {  
  
  // console.log(video);
              
       const[show,setShow]=useState(false);
       const[videoId,setVideoId]=useState(null);

       const loadingSkeleton=()=>{
         return (
             <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className=" row skeleton"></div>
                <div className="row2 skeleton"></div>
             </div>
         )
       }

       
  return (
         <div className="videosSection"> 
            <ContentWrapper>
                <div className="sectionHeading">Official Videos </div>
                {
                    !loading  ? ( 
                        <div className="videos"> 
                                {
                                    video?.results?.map((video)=>(
                                      <div className="videoItem" 
                                       key={video.id} 
                                       onClick={()=>{ 
                                          setVideoId(video?.key);
                                          setShow(true);
                                       }}
                                       >  
                                       <div className="videoThumbnail">
                                         <Img 
                                            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                          />
                                          <PlayIcon/>
                                       </div>
                                       <div className="videoTitle">
                                        {video.name}
                                       </div>
                                          
                                      </div>
                                    ))
                                }
                        </div>
                     ) : ( 
                        <div className="videoSkeleton">
                            {  loadingSkeleton()}
                            {  loadingSkeleton()}
                            {  loadingSkeleton()}
                            {  loadingSkeleton()}
                            {  loadingSkeleton()}
                        </div>
                     )
                }
             

            </ContentWrapper>

            <VideoPopUp 
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
             
         </div>
  )
}

export default VideoSection
