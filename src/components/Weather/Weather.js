import { React, useState } from "react";
import { Card, Form, Button, CardGroup } from "react-bootstrap";
import '../../Style.css';

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [forecast, setForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value);
    
  };

  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt` 
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        
      })
      .then((data) => {
        setWeatherForecast(data);
        
      });
  };

  const handleSearchForecast = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&days=3&aqi=no&alerts=no&lang=pt`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        
      })
      .then((data) => {
        setForecast(data);
        console.log(data)
      });
      
  };


  return (
    <div className='container pt-4 w-75'>
      <Card className='card'>
        <Card.Header className="text-center" as="h5">Previsão do tempo na sua cidade</Card.Header>
        <Card.Body  className='d-flex justify-content-center'>
          
          <Form.Control className='w-50' value={city} onChange={handleChange}></Form.Control>
          
          <Button  onClick={handleSearch} variant="primary">
            Buscar
          </Button>

          
        </Card.Body>

        {
        weatherForecast ? (
          <Card.Body >
            <Card.Title className="text-center">{weatherForecast.location.name}/{weatherForecast.location.region}</Card.Title>
            <div className='d-flex justify-content-center'>
            <img  alt={weatherForecast.current.condition.text} src={weatherForecast.current.condition.icon}/>
            </div>
            <Card.Text className="text-center">
                Clima agora na cidade {weatherForecast.location.name}/{weatherForecast.location.region} está: {weatherForecast.current.condition.text}
            </Card.Text>
            <Card.Text className="text-center">
                Temperatura atual:{weatherForecast.current.temp_c}°C
            </Card.Text>
            <Button  onClick={handleSearchForecast}>Previsão estendida</Button>
          </Card.Body>
        ) : null
        }
      </Card>

        <div>
      {
        forecast ? (
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Text>{forecast.location.name}/{forecast.location.region}</Card.Text>
              {/* <Card.Title>{forecast.forecastday}</Card.Title> */}
              </Card.Body>
            </Card>
          </CardGroup>
        ) : null
      }
        </div> 
    </div>
  );
};

export default Weather;
