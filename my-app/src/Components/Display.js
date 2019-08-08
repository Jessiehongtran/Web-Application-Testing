import React from 'react';


const Display = (props) => {
    console.log('props in Display', props)

    return (
        <div>
            <h3>Display</h3>
            <p>Strikes: {props.count} </p>
            <p>Balls: {props.count} </p>
        </div>
    )
}

export default Display