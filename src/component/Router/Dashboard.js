import React, { useEffect } from 'react';
/**
* Delay for a number of milliseconds
*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Dashboard = () => {
    // sleep(1000);
    useEffect(() => {
        sleep(1000);
        console.log("Hello");
    }, [])
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    )
}

export default Dashboard
