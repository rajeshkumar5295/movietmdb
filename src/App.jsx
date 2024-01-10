import { useState,useEffect } from 'react'
import './App.css'

import {fetchDatafromApi} from "./utils/api"
import { useSelector,useDispatch } from 'react-redux'

//actions 
import {getApiConfiguration,  getGenres} from "./store/homeSlice"


//components 
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Page404 from './pages/404/Page404'
import Detail from './pages/details/Detail'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
          
          const dispatch=useDispatch();
          const  homeReducer=useSelector((state)=>state.homeReducer);
          console.log("checking home Reducer", homeReducer);
        
    useEffect(()=>{ 
      fetchApiConfig();
      genresCall();
    },[])

    const fetchApiConfig=()=>{
      fetchDatafromApi("/configuration").then((res)=>{
                
            const url={
              backdrop:res.images.secure_base_url +  "original",
              poster:res.images.secure_base_url +  "original",
              // profile: res.images.secure_base_url +  "original",
              profile:`${res.images.secure_base_url}original`

            }

            console.log(res)
            dispatch(getApiConfiguration(url))
      })
    }

       // /3/genre/movie/list  

         const genresCall=async()=>{
            let promises=[];
            let endPoints=["tv","movie"];
            let allGenres={};

             endPoints.forEach((url)=>{ 
                     promises.push(fetchDatafromApi(`/genre/${url}/list`))
             })

             const data=await Promise.all(promises);

             console.log(data);
            //  data.map((item)=>{ console.log("checking genres",item.genres)})
             data.map(({genres})=>{ 
                   return genres.map((item)=>( 
                    
                   allGenres[item.id]=item
                     ));
             });

            //  console.log("checking allGenres",allGenres)


             dispatch(getGenres(allGenres))

          
          }



  

  return (    
        <>
        <Router>
          <Header/>
         <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/:mediaType/:id' element={<Detail/>} />
            <Route  path='/search/:query' element={<SearchResult/>} />
            <Route  path='/explore/:mediaType' element={<Explore/>} />
            <Route  path='*' element={<Page404/>} />
         </Routes>
         <Footer/>
      </Router>
        </>
  )
}

export default App
