import React,{useState,useEffect} from 'react'
import { useNavigate,useParams,useLocation } from 'react-router-dom';

import { HiOutlineSearch } from "react-icons/hi";
import { LuMenu } from "react-icons/lu";
import { RiCloseFill } from "react-icons/ri";

import logo from "../../assets/movix-logo.svg";
import ContentWrapper from '../contentWrapper/ContentWrapper';

import "./style.scss";
const Header = () => {

       const [show,setShow]=useState("top");
       const[ lastScrollY,setLastScrollY ]=useState(0)
       const[query,setQuery]=useState(false);
       const[showSearch,setShowSearch]=useState("");
       const [mobileMenu,setMobileMenu]=useState(false)
       const navigate=useNavigate();
       const location=useLocation();

       const openSearch=()=>{
        setMobileMenu(false);
        setShowSearch(true);

       }

       const openMobileMenu=()=>{
         setMobileMenu(true);
         setShowSearch(false);

       }


       const searchQueryHandler=(e)=>{
        // console.log("checking evern on keyUp",e);

        if(e.key==="Enter" && query?.length>0){
          navigate(`/search/${query}`);
          setTimeout(()=>{ setShowSearch(false) },1000)
        }
           }

     const navigationQueryHandler=(type)=>{
      console.log("checking type",type)
      if(type==="movie"){
        navigate("/explore/movie")
      }
      else{
        navigate("/explore/tv")
      }

     }

         const controllNavbar=()=>{
          // console.log("checking scroll event ",window.scrollY)

          if(window.scrollY>200){
          
            if(window.scrollY>lastScrollY  && !mobileMenu){
              setShow("hide");
            }else{
              setShow("show");
            }
                          
          }else{
           setShow("top");

          }
          setLastScrollY(window.scrollY)


         }

     useEffect(()=>{
            window.addEventListener("scroll",controllNavbar)
            
            return ()=>{
              window.removeEventListener("scroll",controllNavbar)
            }


     },[ lastScrollY])

    
  return (
   <header  className={`header ${mobileMenu ? "mobileView" :""}  ${show} `} >
        <ContentWrapper>
              <div className="logo" onClick={()=>navigate("/")}  >
                <img src={logo} alt="" />
              </div>
              <ul className="menuItems">
                <li className="menuItem" onClick={()=>navigationQueryHandler("movie")}  >Movies</li>
                <li className="menuItem" onClick={()=>navigationQueryHandler('tv')} >TV Shows</li>
                <li className="menuItem"> <HiOutlineSearch  onClick={openSearch}   /> </li>
              </ul>

            <div className="mobileMenuItems">
               <HiOutlineSearch onClick={openSearch} />
               {
                mobileMenu ?( <RiCloseFill  onClick={()=>setMobileMenu(false)}/> ):( <LuMenu  onClick={openMobileMenu} /> )
               }
            </div>

        </ContentWrapper>

       {
         showSearch && ( <div className="searchBar">
         <ContentWrapper>
         <div className="searchInput">
            <input 
            type="text"
            placeholder='Search for a movie or tv show...'
             onChange={(e)=>setQuery(e.target.value)}
             onKeyUp={searchQueryHandler}
             />
           <RiCloseFill onClick={()=>setShowSearch(false)}  />
          </div>
     </ContentWrapper>
     </div>)
       }
   </header>
  ) 
}

export default Header;
