import React ,{useState,useEffect} from 'react'
import "./switch.scss";

const SwitchTab = ({data,onTabChange}) => {

     const [ selectedTab,setSelectedTab ]=useState(0);
     const [ left,setLeft ]=useState(0) ;

     const activeTab=(tab,index)=>{
      console.log("checking tab and index",tab,index)
      setLeft(index*100)
      setTimeout(()=>{ 
        setSelectedTab(index)
      },200)

      onTabChange(tab,index);
     }

  return (
         <div className="switchingTabs">
                  <div className="tabItems">
                    {
                      data.map((tab,index)=>(
                        <span 
                         className={`tabItem ${selectedTab===index?"active":""} `} 
                         key={index} 
                         onClick={()=>activeTab(tab,index)}
                          > {tab}  </span>
                      ))
                    }

                    <span className='movingBg'style={{left}}  />

                  </div>
         </div>
  )
}

export default SwitchTab;
