import React from 'react'

const TimerDisplay = (props) => {

    const hour = Number(props.hour)
    const minute = Number(props.minute)
    const sec = Number(props.sec)

    const milliseconds = ((hour*3600+min)+sec)*1000

    

    return (
        <div>
            <button>Start</button>
            <button>Pause</button>
            <button>Reset</button>

        </div>
    )
}

export default TimerDisplay