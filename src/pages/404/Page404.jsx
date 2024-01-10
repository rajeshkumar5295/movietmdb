import React from 'react'

import { IoMdArrowBack } from "react-icons/io";

import "./style.scss"
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';


const Page404 = () => {
  const navigate=useNavigate(); 
  return (
   <div className="pageNotFound">
      <ContentWrapper>
          <span className="bitText">404</span>
          <span className="smallText">Page not found !</span>
                <span  className='goback'  style={{cursor:"pointer",  }}    onClick={()=>{navigate("/")}}  >   <IoMdArrowBack/>   GoBack    </span>
      </ContentWrapper>
   </div>
  )
}

export default Page404;
