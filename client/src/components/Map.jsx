import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from "@mui/system";
import { Typography } from '@mui/material';

const Map = () => {
    const sensors = [
        {
            id: 1,
            name: 'Sensore 1',
            latitude: 41.10891491370119,
            longitude: 16.87922180556236,
            temperature: "23.4 °C"
        },
        {
            id: 2,
            name: 'Sensore 2',
            latitude: 41.10894724873505,
            longitude: 16.879758247377506,
            temperature: "22.7 °C"
        },
        {
            id: 3,
            name: 'Sensore 3',
            latitude: 41.10834904803113,
            longitude: 16.87952221297884,
            temperature: "24.2 °C"
        },
    ];

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                m: "3%"
            }}>
                <Typography variant='h6' gutterBottom>
                    MAPPA DEI SENSORI DISPONIBILI
                </Typography>
                <MapContainer center={[41.10871491370119, 16.87922180556236]} zoom={17} style={{ height: '400px', width: '50%', }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {sensors.map(sensor => (
                        <Marker key={sensor.id} position={[sensor.latitude, sensor.longitude]}>
                            <Popup>Nome: <b>{sensor.name}</b> <br /> Temperatura: <b>{sensor.temperature}</b></Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </Box>
        </>
    );
};

export default Map;