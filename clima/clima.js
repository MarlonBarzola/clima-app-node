const axios = require('axios');

const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=4973bce3290ebec429248fbba33d382a&units=metric`);

    if(!resp.data.length === 0) {
        throw new Error(`No hay resultados para latitud: ${ lat } y longitud: ${ lon }`);
    }

    return resp.data.main.temp;

}

module.exports = {
    getClima
}