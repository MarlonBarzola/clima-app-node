const { argv } = require('./config/yargs');
const { getLugarLatLon } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

/* getLugarLatLon(argv.direction)
        .then(resp => console.log(resp))
        .catch(err => console.log(err)) */

/* getClima(40.750000, -74.000000)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))  */

const getInfo = async (direccion) => {
        
   try {

      const coords = await getLugarLatLon(direccion);
      const temp = await getClima(coords.lat, coords.lon);
      
      return `El clima de ${ coords.direccion } es de: ${ temp }.`;

   } catch (error) {

      return `No se pudo determinar el clima para ${ direccion }.`;
           
   }

}

getInfo(argv.direction)
.then(res => console.log(res))
.catch(err => console.log(err));



