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
}
