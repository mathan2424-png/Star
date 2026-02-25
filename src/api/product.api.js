import apiClient from '../config/apiClient';

export const getProducts = () => {
    return apiClient.get('/products');
};

export const getProductById = (id) => {
    return apiClient.get(`/products/${id}`);
};

export const createProduct = (productData) => {
    // Content-Type handling for FormData is usually manual in simpler axios
    // but interceptor can help if `productData` is FormData.
    return apiClient.post('/products', productData);
};
