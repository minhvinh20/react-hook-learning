import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';


function BetterClock() {
    const {timeString} = useClock()
    return (
        <h1>Now is: {timeString}</h1>
    )
}

export default BetterClock;