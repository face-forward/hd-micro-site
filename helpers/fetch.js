import 'isomorphic-fetch';

const getJsonBody = (response) => response.json();

const rejectWithError = (reason) => {
    if (!(reason instanceof Error)) {
        throw Error(reason);
    }
    return reason;
};

const fetchWithHandlers = (...args) => fetch(...args)
    .then(getJsonBody)
    .catch(rejectWithError);

/*
*   Handle GET Requests to API
*/
export const get = (url, data, options = {}) => fetchWithHandlers(url + (data ? `?${new URLSearchParams(data)}` : ''), {
    method: 'GET',
    credentials: 'include',
    ...options,
});

/*
*   Handle POST Requests to API
*/
export const post = (url, data, { headers = {}, ...remainingOptions } = {}) => fetchWithHandlers(url, {
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...headers,
    },
    ...remainingOptions,
});

