import { useEffect } from "react";
import { useState } from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import SliderForecast from "../../components/SliderForecast/SliderForecast";
const Forecastpage = () => {
  const {cityid} =useParams() 
  const [forecastData,setForecast]=useState()
  const [pending,setpending]=useState(true)
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityid}&lang=fa&units=metric&appid=196944c23663e73dfaf15cfcdeb48277`

  const forecastHandler =async()=>{
    const data =await axios(url).then(response=>response?.data)
    if(data.cod==='200'){
      setForecast(data)
    }
  }
  useEffect(()=>{
    if(forecastData?.list?.length){
      setpending(false)
    }
  },[forecastData])
  useEffect(()=>{
    forecastHandler()
  },[])

  if(pending){
    return <div>pending</div>
  }
  return(
    <>
    <SliderForecast forecastData={forecastData} cityid={cityid} />      
    </>
  )
};

export default Forecastpage;