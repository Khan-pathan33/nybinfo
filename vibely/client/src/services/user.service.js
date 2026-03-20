import ApiClient from '@/lib/api';

class UserService extends ApiClient {
    async getMe() {
        const data = await this.get('/users/me');
        return data?.user || data;
    }
    async updateMe(payload) {
        const data = await this.put('/users/me', payload);
        return data?.user || data;
    }
}

export const userService = new UserService();
export default userService;
