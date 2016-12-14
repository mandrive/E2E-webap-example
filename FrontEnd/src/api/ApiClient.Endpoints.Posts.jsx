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
            })[0]);
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
            var index = window.customStorage.posts.findIndex(p => { return p.id == id});
            window.customStorage.posts = [...window.customStorage.posts.slice(0, index), ... window.customStorage.posts.slice(index+1)]

            resolve(id);
        });
    }
    update(post) {
        return new Promise((resolve, reject) => {
            var existingPost = window.customStorage.posts.filter(p => { return p.id == post.id})[0];
            
            existingPost.title = post.title;
            existingPost.content = post.content;

            resolve();
        });
    }
}
