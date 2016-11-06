'use strict';

/**
 * Shared connection to the app's database (Redis).
 * Used as a singleton, like: const db = require('./db').client;
 *
 * As Node.js caches modules after first require,
 * the database client will only be created once.
 */

const bluebird = require('bluebird');
const redis = require('redis');
const debug = require('debug')('server:redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_HOST = process.env.REDIS_HOST || '127.0.0.1';
let client = null;

/**
 * Close current Redis connection
 */
function close() {
    if (client) {
        client.quit();
    }
    client = null;
    debug('Closed Redis connection');
}

/**
 * (Re)initialize a Redis client connection.
 * If a connection exists, it will be closed first.
 */
function reconnect() {
    if (client) {
        close();
    }

    client = redis.createClient(REDIS_PORT, REDIS_HOST);
    client.on('connect', () => {
        debug(`Connected to Redis at ${REDIS_HOST}:${REDIS_PORT}`);
    });
    client.on('error', err => {
        debug(`Error: ${err}`);
    });
}

reconnect();

module.exports = {
    client,
    close,
    reconnect
};
