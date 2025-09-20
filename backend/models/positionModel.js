const {model} = require('mongoose');
const PositionSchema = require('../schema/positionSchema');

const PositionModel = new model("Position", PositionSchema);

module.exports = PositionModel;