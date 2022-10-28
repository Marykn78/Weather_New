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
              <h2>{cityid} , IR</h2>
            </div>
            <div>
              <p>{day.date}</p>
            </div>
          </div>
        </div>
        <div className="forecast_details">
          <div className="forecast_items">
            <div className="item_temp">
              <h1>{day.temp}°</h1>
            </div>
            <div className="item_wind">
              <div className="item_detail">
                <iconify-icon icon="fontisto:wind" width="24"></iconify-icon>
                <h3>{day.wind}</h3>
              </div>
              <div className="item_detail">
                <iconify-icon icon="bx:moon" width="26"></iconify-icon>
                <h5>{day.description}</h5>
              </div>
              <div className="item_detail">
                <iconify-icon icon="akar-icons:cloud" width="26"></iconify-icon>
                <h3>{day.clouds}</h3>
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
