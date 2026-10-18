import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
});

export const getUsers = async () => {
    return await api.get('/users/');
}

export const createUser = async (data) => {
    return await api.post('/users/', data);
}
