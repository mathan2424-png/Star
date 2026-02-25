import apiClient from '../config/apiClient';

export const getEvents = () => {
    return apiClient.get('/events');
};

export const getNews = () => {
    return apiClient.get('/news');
};

export const getGallery = () => {
    return apiClient.get('/gallery');
};

export const getTestimonials = () => {
    return apiClient.get('/testimonials');
};
