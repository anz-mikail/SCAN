import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import SearchService from "../services/SearchService";
import axios from "axios";
import {AuthResponse} from "../models/Responses";
import {API_URL} from "../http";


export default class Store {
    isAuth = false;
    isLoading = false;
    isError = false;

    constructor() {
        makeAutoObservable(this);
    }
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    setIsError(bool: boolean) {
        this.isError = bool;
    }

    async login(login: string, password: string) {
        try {
            const response = await AuthService.login(login, password);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            localStorage.setItem("login", login);
            localStorage.setItem("password", password);
            localStorage.setItem("rate", "PRO");
            this.setAuth(true);
            this.setIsError(false);
            console.log(response.data)
        } catch (error) {
            this.setIsError(true);
            console.error(error.response?.data?.message);
        }
    }
    async refresh(refreshLogin: string, refreshPassword: string) {
        try {
            const response = await AuthService.login(refreshLogin, refreshPassword);
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("expire", response.data.expire);
            this.setAuth(true);
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
            this.setLoading(false);
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }
    async logout() {
        try{
            this.setAuth(false);
            localStorage.clear();
        } catch (error) {
            console.error(error);
        }
    }
    async search(test : {}) {
        try {
            const response = await SearchService.search(test);
            console.log(response.data)
        } catch (error) {
            console.error(error.response?.data?.message);
        }
    }

}