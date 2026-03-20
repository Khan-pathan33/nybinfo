import ApiClient from '@/lib/api';
import Cookies from 'js-cookie';

class AuthService extends ApiClient {
    async register(payload) {
        const data = await this.post('/auth/register', payload);
        this._storeToken(data.accessToken);
        return data;
    }

    async login(payload) {
        const data = await this.post('/auth/login', payload);
        this._storeToken(data.accessToken);
        return data;
    }

    async logout() {
        await this.post('/auth/logout');
        Cookies.remove('accessToken');
    }

    async refresh() {
        return this.post('/auth/refresh');
    }

    async forgotPassword(email) {
        await this.post('/auth/forgot-password', { email });
    }

    async resetPassword(payload) {
        await this.post('/auth/reset-password', payload);
    }

    async getMe() {
        const data = await this.get('/users/me');
        return data?.user || data;
    }

    _storeToken(token) {
        if (token) Cookies.set('accessToken', token, { expires: 1 / 96, sameSite: 'lax' });
    }
}

export const authService = new AuthService();
export default authService;
