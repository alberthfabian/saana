// const URL = 'https://api.coinlore.net/api/tickers/';

import axios from 'axios';

export const getName = name => {
  try {
    return axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b64a56c4&s=${name}`)
      .then(req => {
        return req.data.Search;
      });
  } catch (err) {
    console.log('http get method err', err);
    throw Error(err);
  }
};

export const getId = id => {
  try {
    return axios
      .get(`https://www.omdbapi.com/?i=tt3896198&apikey=b64a56c4&s=${id}`)
      .then(req => {
        return req.data.Search;
      });
  } catch (err) {
    console.log('http get method err', err);
    throw Error(err);
  }
};

// export const getName = async name => {
//   try {
//     let req = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=b64a56c4&s=${name}`,
//     );
//     let json = await req.json();
//     return json;
//   } catch (err) {
//     console.log('http get method err', err);
//     throw Error(err);
//   }
// };

// export const get = async id => {
//   try {
//     let req = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=b64a56c4`);
//     let json = await req.json();
//     return json;
//   } catch (err) {
//     console.log('http get method err', err);
//     throw Error(err);
//   }
// };

// export const post = async body => {
//   try {
//     let req = await fetch(URL, {
//       method: 'POST',
//       body,
//     });

//     let json = await req.json();

//     return json;
//   } catch (err) {
//     console.log('http method post err', err);

//     throw Error(err);
//   }
// };
