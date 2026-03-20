import ApiClient from '@/lib/api';

class EventService extends ApiClient {
    async createEvent(payload) {
        const data = await this.post('/events', payload);
        return data?.event || data;
    }
    async getMyEvents(params) {
        return this.get('/events/my', { params });
    }
    async getEventById(id) {
        const data = await this.get(`/events/${id}`);
        return data?.event || data;
    }
    async updateEvent(id, payload) {
        const data = await this.put(`/events/${id}`, payload);
        return data?.event || data;
    }
    async deleteEvent(id) {
        await this.delete(`/events/${id}`);
    }
}

export const eventService = new EventService();
export default eventService;
