import React, { useEffect } from 'react';

/**
* Delay for a number of milliseconds
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const About = () => {
    useEffect(() => {
        sleep(1000);
        console.log("Hello");
    }, [])
    return (
        <div>
            <h1>This is About</h1>
        </div>
    )
}

export default About
