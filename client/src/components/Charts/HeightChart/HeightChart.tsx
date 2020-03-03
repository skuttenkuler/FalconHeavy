import * as React from 'react';
import * as charts from 'react-chartjs-2';
const data = {
    labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
    datasets: [
      {
        label: 'Height in Feet',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [73, 229.6, 229.6, 348]
    }
    ]
  };


export default class HeightChart extends React.Component<{}>{
        public render(): React.ReactNode{
            return(
                <div className="chart">
                    <h4>Height</h4>
                <charts.Bar data={data} width={50} height={25}  options={{maintainAspectRatio: false}} />
                </div>
            );
         }
             

};

