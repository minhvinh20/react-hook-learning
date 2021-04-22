import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};
function GetRandomColor() {
    const COLORLIST = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const randomIndex = Math.trunc(Math.random() * 5)
    return COLORLIST[randomIndex]
}
function ColorBox(props) {
    
    const [color, setColor] = useState(() =>{
        const initColor = localStorage.getItem('box_color') || 'green'
        console.log(initColor)
        return initColor
    })
    function handleBoxCLick() {
        const newColor = GetRandomColor()
        setColor(newColor)
        localStorage.setItem('box_color',newColor)
    }
    return (
        <div className="color-box" style={{ backgroundColor: color }} onClick={handleBoxCLick}>
            Color Box
        </div>
    );
}

export default ColorBox;