import { WeatherInfo } from "../../features/WeatherCard";
import { useState } from "react";
import { weatherRequest } from "../../shared/api/api";
import "./SearchPage.css";
import { useNavigate } from "react-router-dom";
import { CityWeather } from "../../entities/CityWeather";
import { SearchBar } from "../../features/SearchBar";
import ThemeToggle from "../../features/ThemeProvider";



export const SearchPage = () => {

    const navigate = useNavigate();
    const [weather, setWeather] = useState<CityWeather>();
    const handleClick = () => {
      navigate("RealTimePage");
    }
    
    const responseHandler = async (query: string) =>
    {
        if(query.trim() == '')
          return;
        const response = await weatherRequest.get(query);
       
        if(response.success == undefined)
          setWeather(response);
    } 

    return (
      
        <div className="container" id="container">
            <h1 className="info">Погода</h1>
            {/* <ThemeProvider/> */}
          <div className="content-box">
            <WeatherInfo cityWeather={weather}/>
            <SearchBar onSearch={responseHandler}/>

              <button className="cancel-btn" onClick={handleClick}>Погода вашего города в реальном времени</button>
            <ThemeToggle />
          </div>
        </div>
      
    );
};

export default SearchPage