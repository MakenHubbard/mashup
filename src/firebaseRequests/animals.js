import axios from 'axios';
import constants from '../constants';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/mashups.json`)
      .then((res) => {
        const animals = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach((key) => {
            res.data[key].id = key;
            animals.push(res.data[key]);
          });
        }
        resolve(animals);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { getRequest };
