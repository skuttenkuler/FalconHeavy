import * as React from 'react';
import * as charts from 'react-chartjs-2';
    const data : {} = {
        labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
        datasets: [
          {
            label: 'First Launches Timeline',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,203,192,0.4)',
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
            data: [2006, 2010, 2018, 2019]
          }
        ]
    };

export default class TimeLineChart extends React.Component<{}>{
        public render(): React.ReactNode{
            return(
                <div className="chart">
                    <h4>Timeline</h4>
                <charts.Line data={data} width={50} height={25}  options={{maintainAspectRatio: false}} />
                </div>
            );
         }
             

};
