import React, { createContext, useState } from 'react';
import { get, post } from '../helpers/fetch';

const funcDefault = () => {};




export const CarsContext = createContext({
    vehicles: [],
});

export function CarsProvider({ initialState = {}, children }) {
    const { listings = [] } = initialState;
    const [cars, setCars] = useState(listings);
    //useEffect(() => {}, [vehicles]);
    console.log('listings...........', listings);

    const handleAddCar = async (data) => {
        if (globalThis.location) {
            await post(`${globalThis.location.origin}/api/v1/cars/${data.id}`, data).then((res) => {
                setCars(res.content);
            }).catch(e=> {console.error('There was an error adding a car: ', e)});
        }

    }
    const handleDeleteCar = async (data) => {
        if (globalThis.location) {
            // fetch('https://reqres.in/api/posts/1', { method: 'DELETE' })
            await get(`${globalThis.location.origin}/api/v1/cars/${data.id}`, null, {method: 'DELETE'}).then((res) => {
                setCars(res.content);
            }).catch(e=> {console.error('There was an error adding a car: ', e)});
        }

    }
    const value = {
        addCar: handleAddCar,
        deleteCar: handleDeleteCar,
        vehicles: cars,
    };

    return (
        <CarsContext.Provider value={value}>
            {children}
        </CarsContext.Provider>
    );
}

CarsProvider.displayName = CarsProvider;

export default {
    Provider: CarsProvider,
    Context: CarsContext,
};
