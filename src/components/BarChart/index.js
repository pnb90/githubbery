import React from 'react'
import {Bar} from 'react-chartjs-2';

function BarChart(props) {
  return(
   <div>
     <h2>{props.chartLabel}</h2>
     <Bar
       data={props.data}
       width={100}
       height={50}
       options={{
         maintainAspectRatio: false
       }}
     />
   </div>
  )
}

export default BarChart