import * as React from 'react';
import {Doughnut} from 'react-chartjs-2';


const data = {
    labels: ['Falcon 1', 'Falcon 9', 'Falcon Heavy', 'Big Falcon Heavy'],
	datasets: [{
		data: [66460, 1207920, 3125735, 9700000],
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

export default class MassChart extends React.Component<{}>{
        public render(): React.ReactNode{
            return(
                <div className="chart">
                    <h4>Mass</h4>
                <Doughnut data={data} options={{maintainAspectRatio: false}} />
                </div>
            );
         }
             

};

