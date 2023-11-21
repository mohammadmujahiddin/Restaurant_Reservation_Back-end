const mongoose = require("mongoose");
const tableSchema = require("./Table").schema;

const daySchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
      },
    tables: [tableSchema]
})

let DayModel = mongoose.model("Day", daySchema);
module.exports.model = DayModel;
module.exports.Schema = daySchema;
module.exports = DayModel;

