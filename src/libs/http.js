import axios from 'axios';

const URL = 'https://us-central1-api-saana.cloudfunctions.net/app/api/products';

export const getAll = name => {
  return axios
    .get(URL)
    .then(req => {
      return req.data;
    }, (err) => {
    console.log('http get method err', err);
    throw Error(err);
  })
};

export const postInfo = body => {
  return axios
    .post(URL, {
      ...body
    })
    .then(req => {
      return req;
    }, (err) => {
    console.log('http get method err', err);
    throw Error(err);
  })
};

export const deleteInfo = id => {
  return axios
    .delete(`${URL}/${id}`)
    .then(req => {
      return req;
    }, (err) => {
    console.log('http get method err', err);
    throw Error(err);
  })
};

export const updateInfo = (id, body) => {
  return axios
    .put(`${URL}/${id}`, {
      ...body
    })
    .then(req => {
      return req;
    }, (err) => {
    console.log('http get method err', err);
    throw Error(err);
  })
};