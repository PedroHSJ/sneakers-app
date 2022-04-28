import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
    params: {limit: '100'},
    headers: {
      'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
      'X-RapidAPI-Key': 'cd4f5ff530msh85206d7ddb47ae3p14b375jsna40327277a6c'
    }
  };

let api = {
    getSneakers: async () => {
        let response = axios
            .request(options)
            .then((response) => {
                console.log(response.data);
                return response.data.results
            })
            .catch(function (error) {
                console.error(error);
            });
            return response
    },
};

export default api;