import React from 'react'


const Dashboard = (props) => {

    console.log('props in Dashboard', props)

    return (
        <div>
            <h3>Dashboard</h3>
            <button onClick= {()=> props.handleStrike(true)}>Strike</button>
            <button onClick= {()=> props.handleBall(true)}>Ball</button>
            <button onClick= {()=> props.handleHit(true)}>Hit</button>
            <button onClick= {()=> props.handleFoul(true)}>Foul</button>
        </div>
    )
}

export default Dashboard