/**
 * Auto-generated action file for "Blogger" API.
 *
 * Generated at: 2019-05-23T09:13:01.488Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-blogger-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'blogger.posts.update'
 * Endpoint Path: '/blogs/{blogId}/posts/{postId}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "blogId",
    "fetchBody",
    "fetchImages",
    "maxComments",
    "postId",
    "publish",
    "revert"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "blogId": "blogId",
    "fetchBody": "fetchBody",
    "fetchImages": "fetchImages",
    "maxComments": "maxComments",
    "postId": "postId",
    "publish": "publish",
    "revert": "revert",
    "displayName": "displayName",
    "id": "id",
    "url": "url",
    "image": "image",
    "author": "author",
    "blog": "blog",
    "content": "content",
    "customMetaData": "customMetaData",
    "etag": "etag",
    "images": "images",
    "kind": "kind",
    "labels": "labels",
    "lat": "lat",
    "lng": "lng",
    "name": "name",
    "span": "span",
    "location": "location",
    "published": "published",
    "readerComments": "readerComments",
    "items": "items",
    "selfLink": "selfLink",
    "totalItems": "totalItems",
    "replies": "replies",
    "status": "status",
    "title": "title",
    "titleLink": "titleLink",
    "updated": "updated",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'blogger.posts.update',
        pathName: '/blogs/{blogId}/posts/{postId}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}