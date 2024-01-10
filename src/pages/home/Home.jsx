import React from 'react'
import "./style.scss";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './toprated/TopRated';


const Home = () => {

  
  return (
           <div className="hoemPage">
             <HeroBanner/>
            <Trending/>
            <Popular/>
             <TopRated/>
           </div>
  )
}

export default Home
