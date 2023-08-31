import './Chart.css'
import React from 'react'
import ChartBar from './ChartBar'

const Chart = props => {

    const dataPointValues = props.dataPoint.map(data => data.value)

    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className='chart'>
            {props.dataPoint.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                />)
            }
        </div>
    )
}

export default Chart