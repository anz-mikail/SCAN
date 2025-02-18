import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";


export default class Store {
    isAuth = false;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            this.setAuth(true);
            console.log(response.data)
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }
    logout() {
            localStorage.clear()
            this.setAuth(false);
        }
}