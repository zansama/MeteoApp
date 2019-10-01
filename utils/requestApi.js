const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'b5edd5705acfeddd1772bb43cc701ba9';


export function requestGet(endPoint, query=''){
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&APPID=${apiKey}&units=metric`;

    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
                .json()
                .then(json => {
                    return json !== undefined ? json : {};
                })
                .catch(e => ({}));
        }
        return response.status;
    });
}