import apiClient from "./api";
import {EventTypes} from "../types/EventType";

export async function getEventTypesByUser(email: string): Promise<EventTypes> {
    try {
        const response = await apiClient.get(`/event_types?host.email=${email}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createEventType(name: string, description: string, duration: number, slug: string): Promise<EventTypes> {
    try {
        const response = await apiClient.post(`/event_types`, {
            name: name,
            description: description,
            duration: duration,
            slug: slug,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateEventType(id: number, name: string, description: string, duration: number, slug: string): Promise<EventTypes> {
    try {
        const response = await apiClient.patch(`/event_types/${id}`, {
            name: name,
            description: description,
            duration: duration,
            slug: slug,
        }, {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteEventType(id: number): Promise<null> {
    try {
        const response = await apiClient.delete(`/event_types/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
