import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { findAllByDisplayValue } from '@testing-library/react';

function randomColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log('hello:', randomColor)
    return `#${randomColor}`
}
function useMagicColor(props) {
    const [color,setColor] = useState('transprent')
    useEffect(()=>{
        console.log('First:', color)
        const colorInterval = setInterval(()=>{
            const newcolor = randomColor()
            setColor(newcolor)
        },1000)
        return () => {
            clearInterval(colorInterval)
        }
    },[color])
    return color
}

export default useMagicColor;