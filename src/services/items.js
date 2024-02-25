import { clienteAxios } from '../helpers/';

export const fetchItems = async (q) => {
  if (!q) return { items: [], categories: [] };
  return await clienteAxios
    .get(`/api/items?q=${q}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const fetchItem = async (id) => {
  if (!id) return {};
  return await clienteAxios
    .get(`/api/items/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};
