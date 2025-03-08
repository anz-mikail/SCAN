import $api from "../../../http";
import {AxiosResponse} from "axios";

export default class AxiosService {
    static async Histogram(searchDict: []): Promise<AxiosResponse> {
        return $api.post('objectsearch/histograms', searchDict)
    }
    static async ObjectSearch(searchDict: []): Promise<AxiosResponse> {
        return $api.post('objectsearch', searchDict)
    }
}