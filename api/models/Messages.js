/**
 * Messages.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        userId: "NUMBER",
        username: "STRING",
        message: "STRING",
        timestamp:{ type: 'ref', columnType: 'timestamp' }
    }
};