

const Map = () => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_COOGLE_MAPS_API_KEY,
    });

    const center = {lat: 47.8457944565378,  lng: 35.12551625143726}
    
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