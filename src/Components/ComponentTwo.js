import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComponentTwo() {
    const [gifUrl, setGifUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchRandomGif = async () => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: 'zkuzymN4PC3Z5ZLHVNsKtRpZx4e4R4bA',
                    tag: 'cat',
                    rating: 'r',
                },
            });
            setGifUrl(data.data.images.original.url);
        } catch (error) {
            setErrorMessage('Failed');
        }
        setIsLoading(false);
    };

    const handleClose = () => {
        setGifUrl('');
    };

    useEffect(() => {
        fetchRandomGif();
    }, []);

    return (
        <>
            <br />
            <button className="open-modal" onClick={fetchRandomGif}>
                {isLoading ? 'Loading...' : 'Open >w<'}
            </button>
            {errorMessage && <div>{errorMessage}</div>}
            {gifUrl && (
                <div className="overlay">
                    <div className="modal">
                        <button onClick={handleClose}>X</button>
                        <img
                            src={gifUrl}
                            alt="Random gif"
                            style={{ width: '300px', height: '300px' }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ComponentTwo;
