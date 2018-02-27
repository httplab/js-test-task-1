/* eslint-env mocha */
'use strict';

var Promise = require('../promise').Promise;
var assert = require('assert');

describe('Promise', function () {
    it('Should resolve', () => {
        const resolvingPromise = new Promise( (resolve) => {
            resolve('promise resolved');
        });

        return resolvingPromise.then( (result) => {
            assert.equal(result, 'promise resolved');
        });
    })
});
