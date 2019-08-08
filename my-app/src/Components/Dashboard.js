import React from 'react'


const Dashboard = (props) => {

    console.log('props in Dashboard', props)

    return (
        <div>
            <h3>Dashboard</h3>
            <button onClick= {()=> props.handleChange(true)}>Strike</button>
            <button>Ball</button>
            <button>Hit</button>
            <button>Foul</button>
        </div>
    )
}

export default Dashboard