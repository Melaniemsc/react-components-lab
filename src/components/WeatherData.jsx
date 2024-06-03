function WeatherData ({day,condition,time}){
    return(
    <div className="weather-class">
        <h2>{day}</h2>
        <p><span>conditions: </span>{condition}</p>
        <p><span>time: </span>{time}</p>
        </div>
    )
}
export default WeatherData