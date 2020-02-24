import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
    datasets: [
      {
        label: 'Cost Per Launch (USD)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [6700000, 50000000, 90000000, 7000000]
    }
    ]
  };


export default class CostChart extends React.Component<{}>{
        public render(): React.ReactNode{
            return(
                <div className="chart">
                    <h4>Cost</h4>
                <Line data={data} width={50} height={25}  options={{maintainAspectRatio: false}} />
                </div>
            );
         }
             

};

