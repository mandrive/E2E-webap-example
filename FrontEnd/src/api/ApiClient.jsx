import { Person } from './../Models/Person';
import Endpoints from './client/endpoints/Endpoints';

export class ApiClient {
    constructor(url) {
        this.url = url;
        this.endpoints = new Endpoints(url);
    }
    fetchPosts() {
      return new Promise((resolve, reject) => {
        resolve([
          {id: 1, content: 'asdfgh'},
          {id: 2, content: 'asdfgh1234'}
        ])
      });
    }
    fetchPersons() {
        return new Promise((resolve, reject) => {
            fetch(this.url).then((response) => {
                return response.json();
            }).then((json) => {
                return json.map((row) => {
                    return new Person(row);
                });
            }).then((persons) => {
                return resolve(persons);
            }).catch((ex) => {
                return reject(ex);
            });
        });
    }
}
