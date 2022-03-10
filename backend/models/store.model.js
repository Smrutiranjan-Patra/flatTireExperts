const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    radius: { type: Number, required: true },
    online_payment: { type: String, required: true },
    discount: { type: Number, required: true }
  },
  {

    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("store", storeSchema);
