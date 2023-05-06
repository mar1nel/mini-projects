import React from 'react';
import '../App.css';

function ComponentTwo() {

    const [open, setOpen] = React.useState(false);

    return(
        <>
            <br />
            <button className="open-modal" onClick={() => setOpen(!open)}>
                Open &gt;w&lt;
            </button>
            {
                open && (
                    <div className="overlay">
                        <div className="modal">
                            <img src="https://media.tenor.com/2-VH7ZH6rxQAAAAC/cat-tongue.gif" alt="gif"
                                 style={{ width: '300px', height: '300px' }} />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ComponentTwo;
