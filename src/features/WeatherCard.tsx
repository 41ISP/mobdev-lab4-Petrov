import { CityWeather } from "../entities/CityWeather";

interface CityWeatherProps{
    cityWeather: CityWeather
}

export const WeatherInfo = ({cityWeather}: CityWeatherProps) => {

  if(cityWeather == undefined)
    return;

  return (
    <div>
        <div className="info">
            <h2>Информация</h2>
            <p>Город: {cityWeather.location.name}</p>
            <img src={cityWeather.current.weather_icons[0]} alt={cityWeather.current.weather_descriptions[0]} />
            <p>Температура: {cityWeather.current.temperature}</p>
        </div>
    </div>
  );
};