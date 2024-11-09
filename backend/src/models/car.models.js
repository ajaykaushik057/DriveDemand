import mongoose, { Schema } from "mongoose";

const carSchema = new Schema({
  carname: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  model: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true,
    min: 1886
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 0
  },
  seats: {
    type: Number,
    required: true,
    min: 1
  },
  fuelType: {
    type: String,
    required: true,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'] 
  },
  transmission: {
    type: String,
    required: true,
    enum: ['Manual', 'Automatic'] 
  },
  location:{
    type:String,
    required:true,
  },
  img: {
    type: String,
    required: true,
    trim: true
  }
});

const Car = mongoose.model('Car', carSchema);

export default Car;
