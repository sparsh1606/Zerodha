const {Schema} = require("mongoose");
const OrderSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  mode: { type: String},
});
module.exports = OrderSchema;