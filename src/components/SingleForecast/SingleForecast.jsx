import { useNavigate } from "react-router-dom";
import "./SingleForecast.style.scss";
// forecastData,cityid
const SingleForecast = ({day,cityid}) => {
  const navigate = useNavigate()
  const Backpage=()=>{
    navigate('/')
  }
  return (
    <div className="total_page">
      <div className="main__container">
        <div className="main__container_forecast">
          <div className="title_forcast">
            <div>
              {/* <h2>{cityid} , IR</h2> */}
              {cityid ? <h2>{cityid} , IR</h2> : <h2>مشهد</h2>}
            </div>
            <div>
              {/* <p>{day.date}</p> */}
              {day ? <p>{day.date}</p> : <p>26.5.2021</p>}

            </div>
          </div>
        </div>
        <div className="forecast_details">
          <div className="forecast_items">
            <div className="item_temp">
              {/* <h1>{day.temp}°</h1> */}
              {day ? <h1>{day.temp}°</h1> : <h2>83</h2>}
            </div>
            <div className="item_wind">
              <div className="item_detail">
                <iconify-icon icon="fontisto:wind" width="24"></iconify-icon>
                {/* <h3>{day.wind}</h3> */}
                {day ? <h3>{day.wind}</h3>  : <h3>12</h3>}
              </div>
              <div className="item_detail">
                <iconify-icon icon="bx:moon" width="26"></iconify-icon>
                {/* <h5>{day.description}</h5> */}
              {day ? <h5>{day.description}</h5> : <h5>ابری</h5>}
              </div>
              <div className="item_detail">
                <iconify-icon icon="akar-icons:cloud" width="26"></iconify-icon>
                {/* <h3>{day.clouds}</h3> */}
              {day ? <h3>{day.clouds}</h3> : <h3>32</h3>}

              </div>
            </div>
          </div>
          <div className="forecast_icon" >
            <iconify-icon icon="charm:sun" width="128"></iconify-icon>
          </div>
        </div>
        <button onClick={Backpage} className="back-btn">بازگشت</button>
      </div>
    </div>
  );
};

export default SingleForecast;
