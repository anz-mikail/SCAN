
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

export interface SearchResponse {
    "data": [{
        "data": [{
            "date": any;
            "value": any;
        }, {
            "date": any;
            "value": any;
        }],
        "histogramType": any;
    }, {
        "data": [{
            "date": any;
            "value": any;
        }, {
            "date": any;
            "value": any;
        }],
        "histogramType": any;
    }]
}