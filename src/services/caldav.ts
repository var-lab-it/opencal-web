import apiClient from "./api";
import {CalDavAuths} from "../types/CalDavAuth";
import {EventTypes} from "../types/EventType";

export async function getCalDavAuths(): Promise<CalDavAuths> {
    try {
        const response = await apiClient.get(`/cal_dav_auths`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createCalDavAuth(baseUri: string, username: string, password: string): Promise<EventTypes> {
    try {
        const response = await apiClient.post(`/cal_dav_auths`, {
            enabled: true,
            baseUri: baseUri,
            username: username,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateCalDavAuth(id: number, baseUri: string, username: string, password: string): Promise<EventTypes> {
    try {
        const response = await apiClient.patch(`/cal_dav_auths/${id}`, {
            enabled: true,
            baseUri: baseUri,
            username: username,
            password: password,
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

export async function deleteCalDavAuth(id: number): Promise<null> {
    try {
        const response = await apiClient.delete(`/cal_dav_auths/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
