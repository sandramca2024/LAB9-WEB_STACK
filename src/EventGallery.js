import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import the CSS

const EventGallery = ({ userDetails }) => {
    const [eventImages, setEventImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const UNSPLASH_ACCESS_KEY = '_mzC9b3I2KHJimtrM7rnDIpHuKC6qzlc0YPgxpugUMU'; 

    useEffect(() => {
        const fetchEventImages = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos?query=events&client_id=${UNSPLASH_ACCESS_KEY}`);
                setEventImages(response.data.results); 
            } catch (error) {
                setError('Error fetching event images');
            } finally {
                setLoading(false);
            }
        };

        fetchEventImages();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="event-gallery">
            <h2>Welcome, {userDetails.username}!</h2>
            <div className="image-gallery">
                {eventImages.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.urls.small} alt={image.alt_description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventGallery;
