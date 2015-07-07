var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var usersSchema = new Schema({
        name: {type: String, required: true},
        surname: {type: String},
        company: {type: String},
        phone: {type: Number}
    });

    mongoose.model('User', usersSchema, 'users');
};
