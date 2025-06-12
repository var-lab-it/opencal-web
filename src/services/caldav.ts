import apiClient from "./api";
import {CalDavAuths} from "../types/CalDavAuth";

export async function getCalDavAuths(): Promise<CalDavAuths> {
    try {
        const response = await apiClient.get(`/cal_dav_auths`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
