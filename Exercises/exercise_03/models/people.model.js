var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
module.exports = function() {
    var peopleSchema = new Schema({
        name: {type: String, required: true},
        height: {type: String},
        mass: {type: String},
        homeworld: {type: Schema.Types.ObjectId, ref: 'Planet' },
        race: {type: Schema.Types.ObjectId, ref: 'Race' },
        ships: {type: Schema.Types.ObjectId, ref: 'Ship' }
    });

    mongoose.model('People', peopleSchema, 'people');
};
