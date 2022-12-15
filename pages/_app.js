import React from "react";
import App from 'next/app';
import { get } from "../helpers/fetch";
import CarsProvider from '../context/CarsProvider';
function MyApp({ Component, listings }) {
    return (
        <CarsProvider.Provider initialState={{listings}}>
            <Component />
        </CarsProvider.Provider>
        )
};
// This gets called on every request
MyApp.getInitialProps = async ({ ctx }) => {
    // Fetch data from external API
    const props = {}
    if (ctx?.req?.headers?.referer) {
        const { origin } =  new URL(ctx?.req?.headers?.referer);
        const data = await get(`${origin}/api/v1/cars`);
        props.listings = data;
    }
    // Pass data to the page via props
    return props;
}
export default MyApp
