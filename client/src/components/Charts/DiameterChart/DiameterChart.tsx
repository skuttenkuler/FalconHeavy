import * as React from 'react';
import {Bubble} from 'react-chartjs-2';

const data = {
    labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
    datasets: [
      {
        label: 'Diameter in Feet',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:1,y:20,r:5.5},{x:2,y:20,r:12},{x:3,y:20,r:39.9},{x:4,y:20,r:30}]
      }
    ]
  };

  export default class DiameterChart extends React.Component<{}>{
    public render(): React.ReactNode{
        return(
            <div className="chart">
                <h4>Diameter</h4>
            <Bubble data={data} width={50} height={25}  options={{maintainAspectRatio: false}} />
            </div>
        );
     }
         

};