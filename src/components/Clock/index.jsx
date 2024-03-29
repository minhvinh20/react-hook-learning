import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';


function Clock() {
    const {timeString} = useClock()
    return (
        <h1>Time is: {timeString}</h1>
    )
}

export default Clock;