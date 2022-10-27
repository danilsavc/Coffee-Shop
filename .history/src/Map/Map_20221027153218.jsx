import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import React from 'react';


const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_COOGLE_MAPS_API_KEY,
    });

    const center = {lat: 47.8457944565378,  lng: 35.12551625143726}
    if(!isLoaded) return <div>Loading...</div>
    return (
        <GoogleMap
            zoom={18} 
            center={center} 
            mapContainerClassName="map-container"
        >
            <MarkerF position={center} />
        </GoogleMap>
    )
}

export default Map