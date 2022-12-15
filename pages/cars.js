import React, { useContext } from "react";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import VehicleCard from '../components/VehicleCard';
import CarsProvider from '../context/CarsProvider';
const { Context } = CarsProvider;
const newCar = {
    "bodyStyle": "Convertible",
    "color": {
        "exteriorColor": "Silver",
        "interiorColor": "Pearl"
    },
    "fuel": "Gasoline",
    "id": 876558540,
    "image":
        {
            "alt": "New 2022 Mercedes-Benz AMG GT 53",
            "src": "https://images.autotrader.com/scaler/408/306/hn/c/8d8bdc54d4e94557a7ac27b75158e881.jpg"
        },
    "listingType": "New",

    "make": "Mercedes-Benz",
    "mileage": "246",
    "model": "AMG",
    "mpgCity": 28,
    "mpgHighway": 35,
    "priceDetail": "$158,402",
    "title": "New 2022 Mercedes-Benz AMG",
    "transmission": "Automatic",
    "year": 2019
};
export default function Cars() {
    const { addCar, deleteCar, vehicles } = useContext(Context)
    const handleAddCar = () => {
        addCar(newCar);
    }
    const handleDeleteCar = () => {
        deleteCar(newCar.id);
    }
    return (
        <React.Fragment>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Vehicles
                </Typography>
            </Container>
            <Container maxWidth="lg">
                <Grid
                    container
                    alignItems="center"
                    spacing={2}
                    sx={{
                        margin: '25px 0px',
                    }}
                >
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={handleAddCar}
                        >
                            Add Car
                        </Button>

                    </Grid>
                    <Grid item>
                        <Button
                            variant="outlined"
                            onClick={handleDeleteCar}
                        >
                            Delete Car
                        </Button>
                    </Grid>
                </Grid>

            </Container>
            <Container maxWidth="lg">
                <Grid container alignItems="stretch" spacing={2}>
                    {vehicles.map((vehicle) => (
                        <Grid
                            item
                            key={vehicle.title}
                            xs={12}
                            md={4}
                            sx={{
                                marginBottom: '25px',
                            }}
                        >
                            <VehicleCard vehicle={vehicle}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
