import { useEffect, useState } from 'react';

function CustomformatDate(date)
{
    if(!date)
        return
    const hours = `0${date.getHours()}`.slice(-2)
    const minutues = `0${date.getMinutes()}`.slice(-2)
    const second = `0${date.getSeconds()}`.slice(-2)
    return `${hours}:${minutues}:${second}`
}

function useClock() {
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
   
    return {timeString}
}

export default useClock;