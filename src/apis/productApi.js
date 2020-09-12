import axiosClient from './axiosClient';

const productApi = {
  getAll: (query) => {
    const url = '/products?' + query;
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getByCategory: (categoryId) => {
    const url = `/products/product-by-category/${categoryId}`;
    return axiosClient.get(url);
  },
};

export default productApi;
