import PostsEndpoint from './apiClient.Endpoints.Posts';

export default class Endpoints {
    constructor(url) {
        this.Url = url;
        this.posts = new PostsEndpoint(url);
    }
}
