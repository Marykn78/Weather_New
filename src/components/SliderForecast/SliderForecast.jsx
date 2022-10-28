// import axios from 'axios';
import React,{useState} from 'react';
import { useEffect } from 'react';
import SingleForecast from '../SingleForecast/SingleForecast';
import './Slider.style.scss'
const SliderForecast = ({forecastData,cityid}) => {
    const counter=[
        0,1,2,3,4
    ]
    // const c=[0,8,16,24]
    const [futurdata,setFuturdata]=useState([])
    const handleHour=(forecastData,futurdata)=>{
        for (let i = 0; i <5; i++) {
          const item = forecastData.list[i];
          futurdata.push({date:item.dt_txt,icon:item.weather[0].icon,description:item.weather[0].description,clouds:item.clouds.all,wind:item.wind.speed,temp:item.main.temp});
        }
        return futurdata;
    }

    useEffect(()=>{
      handleHour(forecastData,futurdata)
    },[])

    const [currentIndex,setCurrentIndex]=useState(0)

    const left={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        left:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const right={
        position:"absolute",
        top:"50%",
        transform:"translate(0,-50%)",
        right:"32px",
        fontSize:"45px",
        color:"#fff",
        zIndex:1,
        cursor:"pointer"

    };
    const goToPrev=()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex=isFirstSlide?counter.length-1 : currentIndex-1;
        setCurrentIndex(newIndex)
    }
    const goToNext=()=>{
        const isLastSlide=currentIndex===counter.length-1;
        const newIndex=isLastSlide?0: currentIndex+1;
        setCurrentIndex(newIndex);
    }
    return ( 
        <div className='slide__section'>
          <div style={{position:"relative"}}>
            <div style={left} onClick={goToPrev}><iconify-icon icon="ep:arrow-left-bold"></iconify-icon></div>
           {futurdata.filter((day,index)=>(index===currentIndex)).map((day)=>(
                <SingleForecast key={cityid} day={day} cityid={cityid}/>
          ))}
          <div style={right} onClick={goToNext}><iconify-icon icon="ep:arrow-left-bold" rotate="180deg"></iconify-icon></div>
          </div>
    



        </div>
     );
}
 
export default SliderForecast;