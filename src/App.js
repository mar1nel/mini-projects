import React from 'react';
import './App.css';
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

function App() {

    const [showComponentOne, setShowComponentOne] = React.useState(false);
    const [showComponentTwo, setShowComponentTwo] = React.useState(false);
    const [currentComponent, setCurrentComponent] = React.useState(null);

    const handleButtonClick = (component) => {
        setShowComponentOne(component === 'componentOne');
        setShowComponentTwo(component === 'componentTwo');
        setCurrentComponent(component);
    }

    const handleHideClick = () => {
        setShowComponentOne(false);
        setShowComponentTwo(false);
        setCurrentComponent(null);
    }

    return (
        <div className="App">

            <button onClick={() => handleButtonClick('componentOne')}>Mini Project One</button>
            <button onClick={() => handleButtonClick('componentTwo')}>Mini Project Two</button>
            {/*<button onClick={() => setShowComponentThree(true)}>Mini Project Three</button>
          <button onClick={() => setShowComponentFour(true)}>Mini Project Four</button>*/}

            {currentComponent && <button onClick={handleHideClick}>Hide Current Component</button>}

            {showComponentOne && <ComponentOne/>}
            {showComponentTwo && <ComponentTwo/>}

        </div>
    );
}

export default App;
