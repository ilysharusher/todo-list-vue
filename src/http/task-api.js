import api from '@/http/api';

const resource = '/tasks';

export const getTasks = () => api.get(resource);

export const createTask = (task) => api.post(resource, task);

export const updateTask = (id, task) => api.put(`${resource}/${id}`, task);

export const deleteTask = (id) => api.delete(`${resource}/${id}`);

export const completeTask = (id, task) => api.patch(`${resource}/${id}/complete`, task);
