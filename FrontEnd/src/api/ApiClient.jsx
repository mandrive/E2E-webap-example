import { Person } from './../Models/Person';
import Endpoints from './client/endpoints/Endpoints';
import './client/storage';

export class ApiClient {
    constructor(url) {
        this.url = url;
        this.endpoints = new Endpoints(url);
    }
}
