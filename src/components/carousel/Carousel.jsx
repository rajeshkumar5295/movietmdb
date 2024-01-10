import React from 'react';
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import Img from "../lazyloadImage/Img"
import posterFallback from "../../assets/no-poster.png"
import "./carousel.scss";
import { useRef } from 'react';

import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import CircleCleRating from '../circleRating/CircleCleRating';
import Genres from '../genres/Genres';



const Carousel = ( {data,loading ,endpoint,title} ) => { 
          
  console.log("Checing data and loading in carousel",data,loading);
    const carouselContainer=useRef();

    const homeReducer=useSelector((state)=>state.homeReducer)
     const {url}=homeReducer;
    console.log(url)

    const navigate=useNavigate();

     const skItem=()=>{
       return (
            <div className="skeletonItem">
                 <div className="posterBlock skeleton ">
                  <div className="textBlock">
                     <div className="title  skeleton ">
                       <div className="date  skeleton ">
                          
                       </div>
                     </div>
                  </div>
                 </div>

            </div>
       )
     }

             
       const navigation=(dir)=>{
        
        const container=carouselContainer.current;
          // console.log(container.offsetWidth,container.offsetHeight,container.scrollLeft,container.scrollHeight)
          const scrollAmount=dir==="left"?container.scrollLeft - (container.offsetWidth):
                                       container.scrollLeft + (container.offsetWidth + 20);
                          container.scrollTo({
                            left:scrollAmount,
                            behavior:"smooth",
                          })
                      
            
       }
    
    

     




  return (
              <div className="carousel"> 
                <ContentWrapper>

                       {
                         title && <div className='carouselTitle' > {title}   </div>
                       }
                      < BsFillArrowLeftCircleFill
                          className='carouselLeftNav arrow'
                          onClick={()=>navigation("left")}
                      /> 
                        <BsFillArrowRightCircleFill 
                           className='carouselRighttNav arrow' 
                           onClick={()=>navigation("right")}
                         />

                 {
                   !loading  ? ( 
                      <div className="carouselItems"  
                        ref={carouselContainer} 
                      >
                       {
                        data?.map((item)=>{
                            const posterUrl=item.poster_path ? url.poster+item.poster_path:posterFallback;
                          return(
                            <div 
                              key={item.id}
                              className="carouselItem" 
                              // /:mediaType/:id
                              onClick={()=>{navigate(`/${item?.media_type || endpoint}/${item?.id}`)}}
                             > 
                                <div className="posterBlock">
                                   <Img  src={posterUrl} />
                                   <CircleCleRating  rating={item?.vote_average.toFixed(1) }   />
                                   <Genres  data={item?.genre_ids.slice(0,2)}   />
                                </div>
                                <div className="textBlock">
                                   <span className="title">
                                    {item.title||item.name} 
                                   </span> 
                                   <span className="date">
                                    {dayjs(item.release_date).format("MMM D,YYYY")}
                                   </span>
                                </div>
                               
                            </div>
                          )
                        })
                       }
                      </div> 
                   ):
                   (
                    <div className="loadingSkeleton">
                         { skItem() }
                         { skItem() }
                         { skItem() }
                         { skItem() }
                         { skItem() }

                    </div>
                   )
                 }

                </ContentWrapper>

              </div>
  )
}

export default Carousel
