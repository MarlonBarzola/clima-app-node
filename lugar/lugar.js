const axios = require('axios');

const getLugarLatLon = async ( direction ) => {

    const encodeUrl = encodeURI(direction);

    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: {'x-rapidapi-key': 'cce171f3e3msh0ec97832fdeb685p1df07fjsnc20504bb8a59'}
    });
    
    const resp = await instance.get(`?location=${ encodeUrl }`);

    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direction }`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
 
}

module.exports = {
    getLugarLatLon
}
