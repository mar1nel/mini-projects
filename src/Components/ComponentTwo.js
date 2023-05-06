import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComponentTwo() {
    const [gifUrl, setGifUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchRandomGif = async (tag) => {
        setIsLoading(true);
        try {
            const { data } = await axios.get('https://api.giphy.com/v1/gifs/random', {
                params: {
                    api_key: 'zkuzymN4PC3Z5ZLHVNsKtRpZx4e4R4bA',
                    tag: tag,
                    rating: 'r',
                },
            });
            setGifUrl(data.data.images.original.url);
        } catch (error) {
            console.error(error);
            setGifUrl('');
        }
        setIsLoading(false);
    };

    const handleClose = () => {
        setGifUrl('');
    };

    return (
        <>
            <div className="place-me-center">
                <button className="open-modal" onClick={() => fetchRandomGif('cat')}>
                    {isLoading ? 'Loading...' : 'Open 🐱'}
                </button>
                <button className="open-modal" onClick={() => fetchRandomGif('dog')}>
                    {isLoading ? 'Loading...' : 'Open 🐶'}
                </button>
                <button className="open-modal" onClick={() => fetchRandomGif('random')}>
                    {isLoading ? 'Loading...' : 'Open ❓'}
                </button>
            </div>

            {gifUrl && (
                <div className="overlay">
                    <div className="modal">
                        <button className="close-button" onClick={handleClose}>
                            X
                        </button>
                        <img src={gifUrl} alt="Random gif" style={{ width: '300px', height: '300px' }} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ComponentTwo;
