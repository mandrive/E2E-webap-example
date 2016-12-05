import PostsEndpoint from './PostsEndpoint';

export default class Endpoints {
    constructor(url) {
        this.Url = url;
        this.Posts = new PostsEndpoint(url);
    }
}
