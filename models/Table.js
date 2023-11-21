// models/Table.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  
  isAvailable: {
    type: Boolean,
    default: true,
  },
  
});

const TableModel = mongoose.model('Table', tableSchema);
module.exports = TableModel;

