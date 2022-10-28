// import { data } from "../../Data/db";
import axios from "axios";
import { useState } from "react";
import "./Home.style.scss";
import {useDispatch} from 'react-redux'
import Forecastday from "../../components/Forecastdays/Forecast";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import { addCity } from "../../redux/reducer/weatherslice";

const Homepage = () => {
    const [dataa,setDataa] =useState({})
    const [location,setLocation]=useState('')
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=fa&units=metric
    &appid=196944c23663e73dfaf15cfcdeb48277`

    const dispatch =useDispatch()
    const searchCity = async (e)=>{
        if(e.key === 'Enter'){
            await axios.get(url).then((response)=>{
                dispatch(addCity(setDataa(response.data)))
            })
        }
    }
    return (
    <div className="card-container">
        <div className="main_card">
            <Header dataa={dataa} searchCity={searchCity} location={location} setLocation={setLocation}/>
            <Cards dataa={dataa}/>
            <Link to={`/forecast/${location}`}>
                <Forecastday/>
            </Link>
        </div>
    </div>
  );
};

export default Homepage;

    // const searchCity =()=>{
    //     axios.get(url).then((response)=>{
    //         setDataa(response.data)
    //         console.log(response.data)
    //     })
    //     setLocation('') 
        
    //     if(e.key === 'Enter'){
    //         axios.get(url).then((response)=>{
    //             setDataa(response.data)
    //             // console.log(response.data)
    //         })
    //         setLocation('')
    //     }  
    // }
    // const handleOption=(e)=>{
    //     setValue(e.target.value)
        
    // }
    // const weather =useSelector(state=>(state.weather))