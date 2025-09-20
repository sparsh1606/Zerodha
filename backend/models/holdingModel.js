const {model} = require('mongoose');
const HoldingSchema = require('../schema/holdingSchema');

const HoldingModel = new model("Holding", HoldingSchema);

module.exports = HoldingModel;