import apiClient from '../config/apiClient';

export const login = (email, password) => {
    return apiClient.post('/auth/login', { email, password });
};

export const register = (userData) => {
    return apiClient.post('/auth/register', userData);
};

export const logout = () => {
    // Should ideally call backend to invalidate token
    localStorage.removeItem('token');
    // window.location.href = '/login'; 
};
