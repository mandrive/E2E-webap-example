export default class PostsEndpoint {
    constructor(url) {
        this.Url = url;
    }
    endpointUrlSuffix() {
        return 'post';
    }
    fullEndpointUrl() {
        return this.Url + '/' + endpointUrlSuffix();
    }
    getAll() {
        return new Promise((resolve, reject) => {
            resolve(window.customStorage.posts);
        });
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            resolve(window.customStorage.posts.filter((item, index) => {
                return item.id == id;
            }));
        });
    }
    create(post) {
        return new Promise((resolve, reject) => {
            var newPostId = window.customStorage.posts.length + 1; 
            window.customStorage.posts.push({
                ...post,
                id: newPostId
            });

            resolve(newPostId);
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }
    update(post) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }
}
