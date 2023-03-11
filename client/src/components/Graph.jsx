import { Box } from '@mui/material';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', t: 23.3, h: 12 },
    { name: 'Feb', t: 22, h: 11 },
    { name: 'Mar', t: 24, h: 15 },
    { name: 'Apr', t: 27, h: 12.3 },
    { name: 'May', t: 23, h: 12.9 },
    { name: 'Jun', t: 29, h: 10 },
];

const Graph = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            m: "3%"
        }}>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line name='Temperatura' type="monotone" dataKey="t" stroke="#8884d8" />
                <Line name='Umidità' type="monotone" dataKey="h" stroke="gray" />
                <Tooltip />
                <Legend />
            </LineChart>
        </Box>
    );
};

export default Graph;
