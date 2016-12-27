import Endpoints from './apiClient.endpoints';
import './customStorage';

export class ApiClient {
    constructor(url) {
        this.url = url;
        this.endpoints = new Endpoints(url);
    }
}
