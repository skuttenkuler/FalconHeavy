import * as React from 'react';
import {Doughnut} from 'react-chartjs-2';


const data = {
    labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
	datasets: [{
		data: [40, 97, 100, 0],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#008000'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        '#008000'
		]
	}]
};

export default class SuccessRateChart extends React.Component<{}>{
        public render(): React.ReactNode{
            return(
                <div className="chart">
                    <h4>Success Ratio</h4>
                <Doughnut data={data} options={{maintainAspectRatio: false}} />
                </div>
            );
         }
             

};

