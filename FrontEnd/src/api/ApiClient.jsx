import Endpoints from './ApiClient.Endpoints';
import './CustomStorage';

export class ApiClient {
    constructor(url) {
        this.url = url;
        this.endpoints = new Endpoints(url);
    }
}
