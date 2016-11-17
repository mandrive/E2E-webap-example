import { Person } from './../Models/Person';

export class ApiClient {
    constructor(url) {
        this.url = url;
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
                reject(ex);
            });
        });
    }
}
