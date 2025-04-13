import { useNavigate } from "react-router-dom";
import "./RealTimePage.css";
import { useState } from "react";
import { WeatherInfo } from "../../features/WeatherCard";
import { weatherRequest } from "../../shared/api/api";
import { CityWeather } from "../../entities/CityWeather";

export const RealTimePage = () => {
    const navigate = useNavigate();
    const [weather, setWeather] = useState<CityWeather>();
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

    const handleClick = () => {
      navigate("/");
    }

    navigator.geolocation.getCurrentPosition(function(position){
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const responseHandler = async () =>
    {
      const response = await weatherRequest.get(`${latitude},${longitude}`);
      setWeather(response);
    };

  return (

    <div className="container" >
        <h2 className="info">Погода по местоположению</h2>
        <div className="content-box">
            <WeatherInfo cityWeather={weather}/>
            <div className="button-group">
              <button className="cancel-btn" onClick={responseHandler}>Обновить</button>
              <button className="cancel-btn" onClick={handleClick}>Назад</button>
            </div>
        </div>
    </div>
  );
};

export default RealTimePage