

const Map = () => {
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