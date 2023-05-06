import React from 'react';
import './App.css';
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';
import ComponentThree from './Components/ComponentThree';

function App() {

    const [showComponentOne, setShowComponentOne] = React.useState(false);
    const [showComponentTwo, setShowComponentTwo] = React.useState(false);
    const [showComponentThree, setShowComponentThree] = React.useState(false);
    const [currentComponent, setCurrentComponent] = React.useState(null);

    const handleButtonClick = (component) => {
        setShowComponentOne(component === 'componentOne');
        setShowComponentTwo(component === 'componentTwo');
        setShowComponentThree(component === 'ComponentThree');
        setCurrentComponent(component);
    }

    const handleHideClick = () => {
        setShowComponentOne(false);
        setShowComponentTwo(false);
        setShowComponentThree(false);
        setCurrentComponent(null);
    }

    return (
        <div className="App">

            <button className="button-common" onClick={() => handleButtonClick('componentOne')}>Mini Project One</button>
            <button className="button-common" onClick={() => handleButtonClick('componentTwo')}>Mini Project Two</button>
            <button className="button-common" onClick={() => handleButtonClick('componentThree')}>Mini Project Three</button>

            {/*<button onClick={() => setShowComponentThree(true)}>Mini Project Three</button>
          <button onClick={() => setShowComponentFour(true)}>Mini Project Four</button>*/}

            {currentComponent &&
                <button className="button-hide" onClick={handleHideClick}>
                    Hide Current Component
                </button>}

            <div className="component-one">
            {showComponentOne && <ComponentOne/>}
            </div>

            {showComponentTwo && <ComponentTwo/>}
            {showComponentThree && <ComponentThree/>}

        </div>
    );
}

export default App;
