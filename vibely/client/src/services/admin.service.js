import ApiClient from '@/lib/api';

class AdminService extends ApiClient {
    async getDashboardStats() {
        const data = await this.get('/admin/stats');
        return data?.stats || data;
    }
    async getUsers(params) {
        return this.get('/admin/users', { params });
    }
    async updateUserStatus(userId, status) {
        const data = await this.patch(`/admin/users/${userId}/status`, { status });
        return data?.user || data;
    }
    async getPendingProviders() {
        const data = await this.get('/admin/providers/pending');
        return data?.providers || data;
    }
    async approveProvider(providerId, payload) {
        const data = await this.patch(`/admin/providers/${providerId}/review`, payload);
        return data?.provider || data;
    }
}

export const adminService = new AdminService();
export default adminService;
