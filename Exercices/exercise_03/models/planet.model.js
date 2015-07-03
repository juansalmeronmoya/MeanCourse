var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var planetsSchema = new Schema({
        name: {type: String, required: true},
        diameter: {type: String},
        climate: {type: String},
        population: {type: Number},
        rotation_period: {type: Number},
        orbital_period: {text: Number}
    });

    mongoose.model('Planet', planetsSchema, 'planets');
};
