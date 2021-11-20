import React from 'react'
import { Card } from 'react-bootstrap';
import "../../../components/Home/CardClima/CardClima.css"
const CardClima = (props) => {
    const {temp,description, data,icon,name,humidity } =props;

    return (

        data && (
            
        <Card className="cardDetails md">
           
        <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="fondo"/>
        <Card.Body>
        <h1>{name}</h1>
        <Card.Title> Estado del tiempo : {description}</Card.Title>
            <h5>Humedad {humidity} %</h5>
        <Card.Title>Temperatura de {temp ? (parseInt(temp - 273.15) ) : "Sin datos de clima"} °C</Card.Title>
        </Card.Body>
        </Card>)
        
        
    )
}

export default CardClima
