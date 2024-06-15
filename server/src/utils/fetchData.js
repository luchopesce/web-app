import axios from 'axios';

/**
 * Realiza una solicitud GET a la URL especificada con los headers proporcionados.
 * @param {string} url - La URL a la que se realizará la solicitud.
 * @param {object} headers - Los headers que se incluirán en la solicitud.
 * @returns {Promise<object>} - Los datos de la respuesta.
 */
const fetchData = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (err) {
    console.error('Error fetching data:', err.message);
    throw new Error('Error fetching data');
  }
};

export {
  fetchData
}