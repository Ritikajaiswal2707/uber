const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    console.log(`Using fallback coordinates for: ${address}`);
    
    // Return different coordinates based on city mentioned in address
    let ltd, lng;
    
    if (address.toLowerCase().includes('mumbai')) {
        ltd = 19.0760; lng = 72.8777;
    } else if (address.toLowerCase().includes('delhi')) {
        ltd = 28.7041; lng = 77.1025;
    } else if (address.toLowerCase().includes('bangalore') || address.toLowerCase().includes('bengaluru')) {
        ltd = 12.9716; lng = 77.5946;
    } else if (address.toLowerCase().includes('chennai')) {
        ltd = 13.0827; lng = 80.2707;
    } else if (address.toLowerCase().includes('kolkata')) {
        ltd = 22.5726; lng = 88.3639;
    } else if (address.toLowerCase().includes('hyderabad')) {
        ltd = 17.3850; lng = 78.4867;
    } else if (address.toLowerCase().includes('pune')) {
        ltd = 18.5204; lng = 73.8567;
    } else if (address.toLowerCase().includes('ahmedabad')) {
        ltd = 23.0225; lng = 72.5714;
    } else if (address.toLowerCase().includes('jaipur')) {
        ltd = 26.9124; lng = 75.7873;
    } else {
        // Default to Bangalore (where captains are located for testing)
        ltd = 12.93649702197792;
        lng = 77.56964622561713;
    }
    
    return { ltd, lng };
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    console.log(`Calculating distance/time for: ${origin} -> ${destination}`);
    
    // Get coordinates for origin and destination
    const originCoords = await module.exports.getAddressCoordinate(origin);
    const destCoords = await module.exports.getAddressCoordinate(destination);
    
    // Calculate distance using Haversine formula
    const distance = calculateDistance(originCoords.ltd, originCoords.lng, destCoords.ltd, destCoords.lng);
    
    // Calculate duration based on distance (assuming average speed of 25 km/h in city traffic)
    const durationMinutes = Math.round((distance / 1000) * (60 / 25)); // Convert km to minutes at 25km/hour
    const durationSeconds = durationMinutes * 60;
    
    // Format distance
    const distanceText = distance >= 1000 ? 
        `${(distance/1000).toFixed(1)} km` : 
        `${Math.round(distance)} m`;
    
    // Format duration  
    const durationText = durationMinutes >= 60 ? 
        `${Math.floor(durationMinutes/60)}h ${durationMinutes%60}m` :
        `${durationMinutes} mins`;
    
    console.log(`Calculated: ${distanceText} ("${distance}m"), ${durationText} ("${durationSeconds}s")`);
    
    return {
        distance: {
            text: distanceText,
            value: distance
        },
        duration: {
            text: durationText,
            value: durationSeconds
        },
        status: 'OK'
    };
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('query is required');
    }

    // Fallback suggestions for testing without billing
    const fallbackSuggestions = [
        `${input}, Mumbai, Maharashtra, India`,
        `${input}, Delhi, Delhi, India`,
        `${input}, Bangalore, Karnataka, India`,
        `${input}, Chennai, Tamil Nadu, India`,
        `${input}, Kolkata, West Bengal, India`,
        `${input}, Hyderabad, Telangana, India`,
        `${input}, Pune, Maharashtra, India`,
        `${input}, Ahmedabad, Gujarat, India`,
        `${input}, Jaipur, Rajasthan, India`,
        `${input}, Surat, Gujarat, India`,
        `${input}, Lucknow, Uttar Pradesh, India`,
        `${input}, Kanpur, Uttar Pradesh, India`,
        `${input}, Nagpur, Maharashtra, India`,
        `${input}, Indore, Madhya Pradesh, India`,
        `${input}, Thane, Maharashtra, India`,
        `${input}, Bhopal, Madhya Pradesh, India`,
        `${input}, Visakhapatnam, Andhra Pradesh, India`,
        `${input}, Patna, Bihar, India`,
        `${input}, Vadodara, Gujarat, India`,
        `${input}, Ghaziabad, Uttar Pradesh, India`,
        `${input}, Coimbatore, Tamil Nadu, India`,
        `${input}, Kochi, Kerala, India`,
        `${input}, Chandigarh, Punjab, India`,
        `${input}, Guwahati, Assam, India`,
        `${input}, Mysore, Karnataka, India`
    ];

    console.log(`Using fallback suggestions for: ${input}`);
    return fallbackSuggestions;
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    
    console.log(`Searching for captains near lat: ${ltd}, lng: ${lng}, radius: ${radius}km`);
    
    // For testing: Find captains with actual locations and socket connections
    const captains = await captainModel.find({
        socketId: { $exists: true, $ne: null }, // Only captains with socket connections
        $or: [
            // Include captains within the radius
            {
                'location.ltd': {
                    $gte: ltd - (radius / 111), // Rough conversion km to degrees
                    $lte: ltd + (radius / 111)
                },
                'location.lng': {
                    $gte: lng - (radius / (111 * Math.cos(ltd * Math.PI / 180))),
                    $lte: lng + (radius / (111 * Math.cos(ltd * Math.PI / 180)))
                }
            },
            // For testing: also include captains with actual location data (not default 0,0)
            {
                'location.ltd': { $ne: 0, $exists: true, $gt: 1 },
                'location.lng': { $ne: 0, $exists: true, $gt: 1 }
            }
        ]
    });

    console.log(`Found ${captains.length} captains within criteria`);
    captains.forEach(captain => {
        console.log(`Captain: ${captain._id}, SocketId: ${captain.socketId}, Location: lat=${captain.location.ltd}, lng=${captain.location.lng}`);
    });
    
    return captains;
}

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371000; // Earth's radius in meters
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c; // Distance in meters
    return Math.round(distance);
}