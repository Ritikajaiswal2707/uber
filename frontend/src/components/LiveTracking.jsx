import React, { useState, useEffect } from 'react'

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const LiveTracking = () => {
    const [ currentPosition, setCurrentPosition ] = useState(center);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude
            });
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    useEffect(() => {
        const updatePosition = () => {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                console.log('Position updated:', latitude, longitude);
                setCurrentPosition({
                    lat: latitude,
                    lng: longitude
                });
            });
        };

        updatePosition(); // Initial position update

        const intervalId = setInterval(updatePosition, 1000); // Update every 10 seconds

    }, []);

    return (
        <div style={containerStyle} className="flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="mb-4">
                    <div className="inline-block w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="ml-2">Live Tracking</span>
                </div>
                <p className="text-sm text-gray-600">Lat: {currentPosition.lat.toFixed(6)}</p>
                <p className="text-sm text-gray-600">Lng: {currentPosition.lng.toFixed(6)}</p>
                <p className="text-xs text-gray-500 mt-2">Captains in your area</p>
            </div>
        </div>
    )
}

export default LiveTracking
