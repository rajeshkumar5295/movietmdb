
import React  from 'react'
import { useState,useEffect } from 'react'

import { fetchDatafromApi  } from '../utils/api'

const useFetch=(url)=>{
        const [data,setData]=useState(null);
        const[loading,setLoading]=useState(null);
        const[error,setError]=useState(null);

        useEffect(()=>{
               setData(null);
               setLoading("loading...")
               setError(null)

               fetchDatafromApi(url).then((res)=>{
                setLoading(false)
                setData(res)
               }).catch((err)=>{
                setLoading(false)
                setError("Something went wrong!")
               })
        },[url])


        return {data,loading,error} ;
}

export default useFetch;

