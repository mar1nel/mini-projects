import React from 'react';
import '../App.css';

function ComponentOne() {

    //let count = 0;
    const [count, setCount]= React.useState(0);

    const onClickPlus = () => {
        setCount(count + 1);
        console.log(count);
    }
    const onClickMinus = () => {
        setCount(count - 1);
        console.log(count);
    }

    if (count == 21 || count == -21){
        setCount(0);
    }

    return (
        <div className="App">

            <div>
                <h2>Learn to count to 20:</h2>
                <h1>{count}</h1>
                <button onClick={onClickMinus} className="minus">- Minus</button>
                <button onClick={onClickPlus} className="plus">+ Plus</button>
            </div>

        </div>
    );
}

export default ComponentOne;
