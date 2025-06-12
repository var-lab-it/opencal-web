import {Events} from "../types/Event";
import apiClient from "./api";

export async function getAppointments(): Promise<Events> {
    try {
        const response = await apiClient.get(`/events`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function cancelAppointment(eventId: number): Promise<Events> {
    try {
        const response = await apiClient.delete(`/events/${eventId}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
