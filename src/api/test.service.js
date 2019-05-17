
import Axios from 'axios';
 
// this is an example.see :
// https://code-maze.com/vuejs-axios-http-environment-files/ => (este es importante para ver como declarar urls globales por environment)
// and
// https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html

// const RESOURCE_NAME = '/owner';

const API_BASEURL = 'https://api.coindesk.com/v1/bpi';

export default {
  getAll() {
    return Axios.get(`${API_BASEURL}/currentprice.json`);
  },
  // ejemplos
  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`);
  },
 
  create(data) {
    return Axios.post(RESOURCE_NAME, data);
  },
 
  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },
 
  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};