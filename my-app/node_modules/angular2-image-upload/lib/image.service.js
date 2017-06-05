"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ImageService = (function () {
    function ImageService(http) {
        this.http = http;
    }
    ImageService.prototype.postImage = function (url, image, headers, partName, withCredentials) {
        if (partName === void 0) { partName = 'image'; }
        if (!url || url === '') {
            throw new Error('Url is not set! Please set it before doing queries');
        }
        var options = new http_1.RequestOptions();
        if (withCredentials) {
            options.withCredentials = withCredentials;
        }
        if (headers) {
            options.headers = new http_1.Headers();
            for (var _i = 0, headers_1 = headers; _i < headers_1.length; _i++) {
                var header = headers_1[_i];
                options.headers.append(header.header, header.value);
            }
        }
        var formData = new FormData();
        formData.append(partName, image);
        return this.http.post(url, formData, options);
    };
    return ImageService;
}());
ImageService.decorators = [
    { type: core_1.Injectable },
];
ImageService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map