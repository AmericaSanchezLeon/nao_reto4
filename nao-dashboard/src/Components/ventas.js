
import React from 'react';

import { ResponsiveLine } from '@nivo/line';
import '@nivo/core';

const salesData = [
  {
    id: 'Sales',
    data: [
      { x: 'Jan', y: 100 },
      { x: 'Feb', y: 300 },
      { x: 'Mar', y: 200 },
      { x: 'Apr', y: 500 },
      { x: 'May', y: 400 },
    ],
  },
];

const Ventas = () => {
  return (
    <div className="w-full" style={{ height: '400px' }}>
            <h2 className="p-2 underline decoration-violet-900	font-semibold text-lg">Ventas</h2>


      <ResponsiveLine
        data={salesData}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        curve="linear"
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Month',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Sales',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'nivo' }}
        lineWidth={3}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableArea={true}
        areaOpacity={0.2}
      />
    </div>
  );
};

export default Ventas;
