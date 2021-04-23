import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
function CustomformatDate(date)
{
    if(!date)
        return
    const hours = `0${date.getHours()}`.slice(-2)
    const minutues = `0${date.getMinutes()}`.slice(-2)
    const second = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutues}:${second}`
}

function Clock() {
    const [timeString, setTimeString] = useState('')
    
    useEffect(()=>{
        const clockInterval = setInterval( ()=>{
            const now = new Date()
            //hh:pp:ss
            const newTimeString = CustomformatDate(now)
            setTimeString(newTimeString)
        },1000)
        return () => {
            clearInterval(clockInterval)
        }
    },[])
   
    return (
        <div>
            <h1>{timeString}</h1>
           
        </div>
    );
}

export default Clock;