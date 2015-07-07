var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var shipsSchema = new Schema({
        name: {type: String, required: true},
        model: {type: String},
        manufacturer: {type: String},
        passengers: {type: Number},
        max_speed: {type: Number},
        cost: {Number: String}
    });

    mongoose.model('Ship', shipsSchema, 'ships');
};
