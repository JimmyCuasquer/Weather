import React, { useState} from 'react'
import CardClima from '../../components/Home/CardClima/CardClima'
import FormCapital from '../../components/Home/FormCapital'

const Home = () => {
    const [capital, setcapital] = useState("")
    const [data, setdata] = useState(null)

    const handleUserName =(target) => {
        console.log(target.value)
    setcapital(target.value);
    }
    const FetchDataApi = async e => {
        e.preventDefault()
        try {
        const key="e4bdb727c318dcfa4eb00a8b9a6bf2e6"                    
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}`
            const response = await fetch(API)
            const result = await response.json()
            setdata(result)
            console.log(result) 
            
        } catch (error) {
            console.log(error)
        } 
    }      
    return (
        <>   
        <FormCapital
            handleUserName={handleUserName}
            FetchDataApi={FetchDataApi}
        />
        
        {data && (<CardClima   
            description={data?.weather[0].description}  
            icon={data?.weather[0].icon}
            temp={data?.main.temp}
            data={data}
            capital={capital}
            name={data?.name}
            humidity={data?.main.humidity}
          />
        )}


        
        </>
    )
}

export default Home;
