import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    "api-key": "94d660a629d9ae773753ee76760166b0",
  },
});

async function request(endpoint) {
  const reqValue = await instance.get(endpoint);
  return reqValue;
}

export default { 
  getCategories: async () => ([
    {
      id: 'originals',
      title: 'Originais Netflix',
      items: [],
    }, {
      id: 'trending',
      title: 'Recomendados para você',
      items: [],
    }, {
      id: 'toprated',
      title: 'Em alta',
      items: [],
    }, {
      id: 'action',
      title: 'Ação',
      items: [],
    }, {
      id: 'comedy',
      title: 'Comédia',
      items: [],
    }, {
      id: 'horror',
      title: 'Terror',
      items: [],
    },
  ]),  
};