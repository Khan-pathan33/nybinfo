import { AxiosError } from 'axios';
import axiosInstance from './interceptors';

/**
 * ApiClient — Generic API wrapper class.
 * All service files extend this class.
 * Methods return the `data` field from the server's { success, message, data } envelope.
 */
class ApiClient {
    extractError(error) {
        if (error instanceof AxiosError) {
            const serverMsg = error.response?.data?.message;
            throw new Error(serverMsg || error.message || 'An unexpected error occurred.');
        }
        throw new Error('An unexpected error occurred.');
    }

    async get(url, config) {
        try {
            const response = await axiosInstance.get(url, config);
            return response.data.data;
        } catch (error) {
            this.extractError(error);
        }
    }

    async post(url, body, config) {
        try {
            const response = await axiosInstance.post(url, body, config);
            return response.data.data;
        } catch (error) {
            this.extractError(error);
        }
    }

    async put(url, body, config) {
        try {
            const response = await axiosInstance.put(url, body, config);
            return response.data.data;
        } catch (error) {
            this.extractError(error);
        }
    }

    async patch(url, body, config) {
        try {
            const response = await axiosInstance.patch(url, body, config);
            return response.data.data;
        } catch (error) {
            this.extractError(error);
        }
    }

    async delete(url, config) {
        try {
            const response = await axiosInstance.delete(url, config);
            return response.data.data;
        } catch (error) {
            this.extractError(error);
        }
    }
}

export const apiClient = new ApiClient();
export default ApiClient;
