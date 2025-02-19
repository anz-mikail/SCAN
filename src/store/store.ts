import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/Responses";
import {API_URL} from "../http";


export default class Store {
    isAuth = false;
    isLoading = false;
    forInfo =false

    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    setForInfo(bool: boolean) {
        this.forInfo = bool;
    }

    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            this.setAuth(true);
            this.setForInfo(true)
            console.log(response.data)
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }

    async info() {
        try {
            this.setLoading(true);
            const response = await AuthService.info();
            localStorage.setItem("usedCompanyCount", response.data.eventFiltersInfo.usedCompanyCount);
            localStorage.setItem("companyLimit", response.data.eventFiltersInfo.companyLimit);
            console.log(response)
            this.setForInfo(false)
            this.setLoading(false);
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }

    async logout() {
        try{
            localStorage.clear();
            this.setAuth(false);
        } catch (error) {
            console.error(error);
        }
    }

}