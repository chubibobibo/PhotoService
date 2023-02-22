//child of RateDipslay
import React from 'react';
import classes from './RateDisplay.module.css';


const RateList = ({ rates }) => {
    return (
        <div>
            {rates.map(allRates => (
                <div className={classes.container}>
                    <div className={classes.allRates} key={allRates.id}>
                        <div>
                            <h5>{allRates.title}</h5>
                        </div>
                        <div>
                            Prix: <span>{allRates.price}</span>
                        </div>
                        <div>
                            <span>{allRates.description}</span>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default RateList;