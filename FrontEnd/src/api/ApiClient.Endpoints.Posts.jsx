import root from 'window-or-global'

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
        console.log("GETTING ALL");
        return new Promise((resolve, reject) => {
            resolve(root.customStorage.posts);
        });
    }
    getById(id) {
        return new Promise((resolve, reject) => {
            resolve(root.customStorage.posts.filter((item, index) => {
                return item.id == id;
            })[0]);
        });
    }
    create(post) {
        return new Promise((resolve, reject) => {
            var newPostId = root.customStorage.posts.length + 1; 
            root.customStorage.posts.push({
                ...post,
                id: newPostId
            });

            resolve(newPostId);
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            var index = root.customStorage.posts.findIndex(p => { return p.id == id});
            root.customStorage.posts = [...root.customStorage.posts.slice(0, index), ... root.customStorage.posts.slice(index+1)]

            resolve(id);
        });
    }
    update(post) {
        return new Promise((resolve, reject) => {
            var existingPost = root.customStorage.posts.filter(p => { return p.id == post.id})[0];
            
            existingPost.title = post.title;
            existingPost.content = post.content;

            resolve();
        });
    }
}
