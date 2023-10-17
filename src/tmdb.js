import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  // baseURL : 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
  params: {
    api_key: '94d660a629d9ae773753ee76760166b0',
    language: 'en',
  },
});

async function request(endpoint) {
  const { data } = await instance.get(endpoint);
  return data.results;
}

export default {
  getCategories: async () => ([
    {
      id: 'originals',
      title: 'OrignialS NetfliX',
      items: await request('/discover/tv?with_network=213'),
    }, {
      id: 'trending',
      title: 'TrendinG',
      items: await request('/trending/all/week'),
    }, {
      id: 'toprated',
      title: 'Top RateD',
      items: await request('/movie/top_rated'),
    }, {
      id: 'action',
      title: 'ActioN',
      items: await request('/discover/movie?with_genres=28'),
    }, {
      id: 'comedy',
      title: 'ComedY',
      items: await request('/discover/movie?with_genres=35'),
    }, {
      id: 'horror',
      title: 'HorroR',
      items: await request('/discover/movie?with_genres=27'),
    }, {
      id: 'romance',
      title: 'RomancE',
      items: await request('/discover/movie?with_genres=10749'),
    }, {
      id: 'documentary',
      title: 'DocumentarY',
      items: await request('/discover/movie?with_genres=99'),
    },
  ]),
};
