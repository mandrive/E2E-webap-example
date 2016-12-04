import PostsEndpoint from './PostsEndpoint';

export default class Endpoints {
    constructor(url) {
        this.url = url;
        this.Posts = new PostsEndpoint(url);
    }
}
