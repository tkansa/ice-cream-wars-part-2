import React, { useState } from 'react';
import Ad from './Ad';
import './AdDesigner.css';


function AdDesigner() {

    const [flavor, setFlavor] = useState<string>("Strawberry");
    const [ darkMode, setDarkMode ] = useState<boolean>(false);
    const [ fontSize, setFontSize ] = useState<number>(18);

    return (
        <div className="AdDesigner">
            <h1>Ad Designer</h1>
            <Ad flavor={flavor} darkMode={darkMode} fontSize={fontSize}></Ad>
            <p>What to support:</p>
            <div>
                <button onClick={() => setFlavor("Chocolate")} disabled={flavor === "Chocolate"}>Chocolate</button>
                <button onClick={() => setFlavor("Vanilla")} disabled={flavor === "Vanilla"}>Vanilla</button>
                <button onClick={() => setFlavor("Strawberry")} disabled={flavor === "Strawberry"}>Strawberry</button>
            </div>
            <div>
                <p>Color Theme:</p>
                <button onClick={() => setDarkMode(false)} disabled={!darkMode}>Light</button>
                <button onClick={() => setDarkMode(true)} disabled={darkMode}>Dark</button>
            </div>
            <div>
                <p>Font Size:</p>
                <button onClick={() => setFontSize(prevfontSize => prevfontSize - 1)}>Down</button>
                {fontSize}
                <button  onClick={() => setFontSize(prevfontSize => prevfontSize + 1)}>Up</button>
            </div>
        </div>
    );
}

export default AdDesigner;