import React from 'react';
import { Chart } from 'react-google-charts';

const generateData = () => {
    const data = [['Година', 'Споживання']];
    const currentTime = new Date();

    for (let i = 7; i >= 0; i--) {
        const time = new Date(currentTime.getTime() - i * 60 * 60 * 1000);
        const consumption = Math.floor(Math.random() * 100); // случайное значение потребления
        data.push([time.getHours() + ':00', consumption]);
    }

    return data;
};

const ConsumptionChart = () => {
    const data = generateData();

    const options = {
        title: 'Споживання за останні 7 годин',
        hAxis: { title: 'Години', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 },
        chartArea: { width: '70%', height: '70%' },
    };

    return (
        <div>
            <Chart
                chartType="AreaChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

export default ConsumptionChart;
