import React from 'react'
import {  useSelector } from 'react-redux'
import './style.scss';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyloadImage/Img';
import avatar from "../../../assets/avatar.png"

const Cast = ({data,loading}) => {
   console.log(data);
    const homeReducer=useSelector((state)=>state.homeReducer)
      const {url}=homeReducer;  
       
      const skeleton=()=>{
        return (
            <div className="skItem">
                <div className="circle skeleton "></div>
                <div className="row  skeleton"></div>
                <div className="row2 skeleton "></div>

          </div>
        )
      }


  return (
         <div className="castSection">
              <ContentWrapper >
                    <div className="sectionHeading"> Top Cast </div>
                    {
                        !loading ? (
                              <div className="listItems">
                                   {
                                    data?.map((item)=>{
                                        const ImgUrl=item.profile_path ? url.profile + item.profile_path : avatar ;
                                        return (
                                          <div key={item.id}   className="listItem">
                                              <div className="profileImg">
                                                  <Img  src={ImgUrl} />
                                              </div>
                                              <div className="name"> {item.name}  </div>
                                              <div className="charecter"> {item.character} </div>
                                          </div>
                                        )
                                    })
                                   }
                              </div>
                        ):(
                            <div className="castSkeleton">
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}
                                {skeleton()}

                            </div>
                        )
                    }
              </ContentWrapper>
         </div>
  )
}

export default Cast
