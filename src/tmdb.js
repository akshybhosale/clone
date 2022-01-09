import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '94d660a629d9ae773753ee76760166b0',
    language: 'pt-BR',
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
      items: await request('/discover/tv?with_network=213'),
    }, {
      id: 'trending',
      title: 'Recomendados para você',
      items: await request('/trending/all/week'),
    }, {
      id: 'toprated',
      title: 'Em alta',
      items: await request('/movie/top_rated'),
    }, {
      id: 'action',
      title: 'Ação',
      items: await request('/discover/movie?with_genres=28'),
    }, {
      id: 'comedy',
      title: 'Comédia',
      items: await request('/discover/movie?with_genres=35'),
    }, {
      id: 'horror',
      title: 'Terror',
      items: await request('/discover/movie?with_genres=27'),
    }, {
      id: 'romance',
      title: 'Romance',
      items: await request('/discover/movie?with_genres=10749'),
    }, {
      id: 'documentary',
      title: 'Documentários',
      items: await request('/discover/movie?with_genres=99'),
    },
  ]),
};
