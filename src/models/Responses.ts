
export interface AuthResponse {
    accessToken: string;
    expire: string;
}

export interface infoResponse {
    eventFiltersInfo: {
        usedCompanyCount: any;
        companyLimit: any;
    }
}