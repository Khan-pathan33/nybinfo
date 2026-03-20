import ApiClient from '@/lib/api';

class ProviderService extends ApiClient {
    async getProviders(params) {
        return this.get('/providers', { params });
    }
    async getProviderById(id) {
        const data = await this.get(`/providers/${id}`);
        return data?.provider || data;
    }
    async submitApplication(payload) {
        const data = await this.post('/providers/apply', payload);
        return data?.provider || data;
    }
    async getMyProfile() {
        const data = await this.get('/providers/me/profile');
        return data?.provider || data;
    }
    async updateBusinessProfile(payload) {
        const data = await this.put('/providers/me/profile', payload);
        return data?.provider || data;
    }
}

export const providerService = new ProviderService();
export default providerService;
