import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";


export default class Store {
    isAuth = false;
    isLoading = false;
    isError = false;
    startFetch = false;
    RequestCounter = 2;

    constructor() {
        makeAutoObservable(this);
    };
    setAuth(bool: boolean) {
        this.isAuth = bool;
    }
    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
    setIsError(bool: boolean) {
        this.isError = bool;
    }
    setStartFetch(bool: boolean) {
        this.startFetch = bool;
    }
    setRequestCounter(counter: number) {
        this.RequestCounter += counter;
    }
    setRequestCounterClean(counter: number) {
        this.RequestCounter = counter;
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
}
