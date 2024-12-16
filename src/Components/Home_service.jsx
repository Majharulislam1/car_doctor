import { useEffect, useState } from "react";
import Service_Card from "./Service_Card";


const Home_service = () => {

    const [service,setService] = useState([]);

      useEffect(()=>{
           fetch('http://localhost:3000/service')
           .then(res => res.json())
           .then(data => setService(data))
      },[])

 

    return (
        <div>
            <div>
                <h3 className="text-center text-primary font-bold text-2xl">Service</h3>
                <h1 className="text-center text-4xl font-bold py-4">Our Service Area</h1>
                <p className="text-gray-600 w-1/2 mx-auto text-center mb-6">The majority have suffered alteration in some form, by injected humour, or randomized words which don&apos;t look even slightly believable. </p>
            </div>

            <div className="w-4/5 mx-auto">
                <div className="grid grid-cols-4  gap-6">
                    {
                         service.map( car_service => <Service_Card key={car_service._id} service={car_service}></Service_Card> )
                    }
                    
                </div>
            </div>
            <div className="py-4 flex justify-center">
                <button className="px-4 py-2 border-2 border-primary text-primary rounded-sm">More Service</button>
            </div>
        </div>
    );
};

export default Home_service;