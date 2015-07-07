var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var companySchema = new Schema({
        name: {type: String, required: true},
        phone: {type: Number},
        location: {type: String}
    });

    mongoose.model('Company', companySchema, 'companies');
};
