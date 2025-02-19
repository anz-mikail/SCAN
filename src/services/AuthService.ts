import $api from "../http";
import { AxiosResponse } from "axios";
import {AuthResponse, infoResponse} from "../models/Responses";


export default class AuthService {
    static async login(login: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('account/login', {login, password})
    }
    static async info(): Promise<AxiosResponse<infoResponse>> {
        return $api.get<infoResponse>('account/info')
    }
}