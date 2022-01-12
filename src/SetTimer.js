import React, { useState } from 'react'

const SetTimer = () => {

    const [hrs, setHrs] = useState('')
    const [min, setMin] = useState('')
    const [sec, setSec] = useState('')

    const handleHrs = (e) => {
        let intHrs = Number(e.target.value)
        if (intHrs < 0) {
            setHrs('0')
        } else if (intHrs > 99) {
            setHrs('99')
        } else {
            setHrs(e.target.value)
        }
    }

    const handleMins = (e) => {
        let intMin = Number(e.target.value)
        if (intMin < 0) {
            setMin('0')
        } else if (intMin > 59) {
            setMin('59')
        } else {
            setMin(e.target.value)
        }
    }

    const handleSecs = (e) => {
        let intSec = Number(e.target.value)
        if (intSec < 0) {
            setSec('0')
        } else if (intSec > 59) {
            setSec('59')
        } else {
            setSec(e.target.value)
        }
    } 

    const pauseTimer = () => {}
 
    return (
        <div>
            <input 
            type="number" 
            max="24"
            value={hrs} 
            onChange={handleHrs} 
            className="border border-gray-300 w-16 pl-3 py-1 rounded-lg
            shadow-sm focus:outline-none focus:border-indigo-500 text-left"/>
            <label>hrs</label>

            <input 
            type="number" 
            max="60"
            value={min} 
            onChange={handleMins} 
            className="border border-gray-300 w-16 pl-3 py-1 rounded-lg
            shadow-sm focus:outline-none focus:border-indigo-500 text-left"/>
            <label>min</label>

            <input 
            type="number" 
            max = "60"
            value={sec} 
            onChange={handleSecs} 
            className="border border-gray-300 w-16 pl-3 py-1 rounded-lg
            shadow-sm focus:outline-none focus:border-indigo-500 text-left"/>
            <label>sec</label>

            <TimerDisplay hour={hrs} minute={min} second={sec} />
        </div>
    )

}

export default SetTimer