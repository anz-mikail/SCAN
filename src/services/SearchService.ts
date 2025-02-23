import $api from "../http";
import { AxiosResponse } from "axios";
import {SearchResponse} from "../models/Responses";


export default class SearchService {
    static async search(test : {}): Promise<AxiosResponse<SearchResponse>> {
        return $api.post<SearchResponse>('objectsearch/histograms', {test})
    }
    static async searchObject(): Promise<AxiosResponse<SearchResponse>> {
        return $api.post<SearchResponse>('objectsearch')
    }
    static async documents(): Promise<AxiosResponse<SearchResponse>> {
        return $api.post<SearchResponse>('documents')
    }
}