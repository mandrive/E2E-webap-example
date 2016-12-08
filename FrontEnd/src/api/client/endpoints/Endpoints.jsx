import PostsEndpoint from './PostsEndpoint';

export default class Endpoints {
    constructor(url) {
        this.Url = url;
        this.posts = new PostsEndpoint(url);
    }
}
