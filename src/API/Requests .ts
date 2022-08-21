const Request = {
  Home: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  Adventure: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
  War: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10752`,
  History: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
  Fantasy: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
  Comedy: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  Action: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  Horror: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  origienals: `discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213
  `,
};
export default Request;
