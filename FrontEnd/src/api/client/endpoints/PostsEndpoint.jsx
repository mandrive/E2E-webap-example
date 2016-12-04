export default class PostsEndpoint {
    constructor(url) {
        this.url = url;
    }
    endpointUrlSuffix() {
        return 'post';
    }
    fullEndpointUrl() {
        return this.url + '/' + endpointUrlSuffix();
    }
}
