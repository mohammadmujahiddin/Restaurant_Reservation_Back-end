const mongoose = require('mongoose');
const Table = require('../models/Table').model;

//Connect to MongoDB
const dbURI = "mongodb+srv://mohammadmujahiddin01:mujju123@database.ui1abg3.mongodb.net/";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("Connected to database"))
    .catch((err) => console.log(err));


const seedDB = async () => {
  await Table.deleteMany({});
  for (let i = 1; i < 3; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 2,
      isAvailable: true
    })
    await table.save();
  }
  for (let i = 3; i < 6; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 4,
      isAvailable: true
    })
    await table.save();
  }
  for (let i = 6; i < 10; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 6,
      isAvailable: true
    })
    await table.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
})