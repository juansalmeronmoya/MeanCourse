var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var contactsSchema = new Schema({
        name: {type: String, required: true},
        surname: {type: String},
        company: {type: Schema.Types.ObjectId, ref: 'Company' },
        phone: {type: Number},
        email: {type: String}
    });

    mongoose.model('Contact', contactsSchema, 'contacts');
};
