const mongoose = require("mongoose");

let reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        default: "Unknown",
      },
      
      
    lastName: String,
    phoneNumber: String,
    creditCard: {
        type: {
          cardNumber: String,
          expDate: String,
          cvv: String,
        },
        required: true,
      },
                      
    });

    let ReservationModel = mongoose.model("Reservation", reservationSchema);
    module.exports.model = ReservationModel;
    module.exports.schema = reservationSchema;
    module.exports = ReservationModel;
