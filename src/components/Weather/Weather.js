import { React, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (e) => {
    setCity(e.target.value);
    
  };

  const handleSearch = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`
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

  return (
    <div className='container'>
      <Card >
        <Card.Header className="text-center" as="h5">Previsão do tempo na sua cidade</Card.Header>
        <Card.Body  className='d-flex justify-content-center'>
          
          <Form.Control className='w-50' value={city} onChange={handleChange}></Form.Control>
          
          <Button  onClick={handleSearch} variant="primary">
            Contar
          </Button>

          
        </Card.Body>

        {
        weatherForecast ? (
          <Card.Body>
            <Card.Title className="text-center">{weatherForecast.location.name}/{weatherForecast.location.region}</Card.Title>
            <div className='d-flex justify-content-center'>
            <img  alt={weatherForecast.current.condition.text} src={weatherForecast.current.condition.icon}/>
            </div>
            <Card.Text className="text-center">
                Clima agora na cidade {city} está: {weatherForecast.current.condition.text}
            </Card.Text>
            <Card.Text className="text-center">
                Temperatura atual:{weatherForecast.current.temp_c}°C
            </Card.Text>
          </Card.Body>
        ) : null
        }

      </Card>
    </div>
  );
};

export default Weather;
